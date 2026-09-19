import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  beforeLoad: () => {
    throw redirect({ to: "/legal/refund" });
  },
  component: () => null,
});
