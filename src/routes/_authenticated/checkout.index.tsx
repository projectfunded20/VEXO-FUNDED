import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/checkout/")({
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/checkout/details",
      search,
    });
  },
  component: () => null,
});
