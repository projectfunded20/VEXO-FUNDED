import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  // TanStack Start server handler destructures router.getMatchedRoutes as an array:
  // const [matchedRoutes, rawParams, foundRoute] = router.getMatchedRoutes(pathname)
  // while TanStack Router returns an object { matchedRoutes, routeParams, foundRoute }.
  // Add Symbol.iterator so both array destructuring and object property access succeed.
  const origGetMatchedRoutes = router.getMatchedRoutes.bind(router);
  router.getMatchedRoutes = (pathname: string) => {
    const res = origGetMatchedRoutes(pathname) as Record<string, unknown>;
    if (
      res &&
      typeof res === "object" &&
      typeof (res as unknown as Iterable<unknown>)[Symbol.iterator] !== "function"
    ) {
      const matchedRoutes = res.matchedRoutes ?? (Array.isArray(res) ? res : []);
      const routeParams = res.routeParams ?? res.rawParams ?? {};
      const foundRoute = res.foundRoute;
      (res as unknown as Record<symbol, unknown>)[Symbol.iterator] = function* () {
        yield matchedRoutes;
        yield routeParams;
        yield foundRoute;
      };
    }
    return res as ReturnType<typeof origGetMatchedRoutes>;
  };

  // Polyfill takeBufferedScripts on router.serverSsr so newer react-router Scripts component
  // works seamlessly with start-server-core
  const patchServerSsr = (ssr: unknown) => {
    if (
      ssr &&
      typeof ssr === "object" &&
      typeof (ssr as { takeBufferedScripts?: unknown }).takeBufferedScripts !== "function"
    ) {
      (ssr as { takeBufferedScripts?: () => undefined }).takeBufferedScripts = () => undefined;
    }
  };

  const routerObj = router as unknown as {
    serverSsrLifecycle?: { onServerSsrAttach?: Array<(ssr: unknown) => void> };
    serverSsr?: unknown;
  };
  const lifecycle = (routerObj.serverSsrLifecycle = routerObj.serverSsrLifecycle || {});
  lifecycle.onServerSsrAttach = lifecycle.onServerSsrAttach || [];
  lifecycle.onServerSsrAttach.push(patchServerSsr);

  let _serverSsr = routerObj.serverSsr;
  patchServerSsr(_serverSsr);
  Object.defineProperty(router, "serverSsr", {
    configurable: true,
    enumerable: true,
    get() {
      patchServerSsr(_serverSsr);
      return _serverSsr;
    },
    set(v: unknown) {
      patchServerSsr(v);
      _serverSsr = v;
    },
  });

  return router;
};
