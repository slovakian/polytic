import { createServerFn } from "@tanstack/react-start";

export const getServerSeed = createServerFn({ method: "GET" }).handler(async () => {
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return bytes[0]!;
});
