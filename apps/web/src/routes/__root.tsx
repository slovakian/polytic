import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Polytik — Understand your politics in high resolution",
      },
      {
        name: "description",
        content:
          "Polytik is a resource that helps you understand your own politics in high resolution. Install the grilling skill into any AI agent and get interviewed across political dimensions — then handed an evidence-backed verdict.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
