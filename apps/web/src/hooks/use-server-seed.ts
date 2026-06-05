import { useRouteContext } from "@tanstack/react-router";

export function useServerSeed() {
  return useRouteContext({
    from: "__root__",
    select: (ctx) => ctx.serverSeed,
  });
}
