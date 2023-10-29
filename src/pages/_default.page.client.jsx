export { render };

import { hydrateRoot } from "react-dom/client";
import { PageShell } from "./PageShell";

const topMenu = [
  {
    title: "About",
    subMenu: [
      {
        title: "History & Mission",
        link: "/mission",
      },
      {
        title: "Instructors & Staff",
        link: "/instructors",
      },
      {
        title: "Philosophy & Ethics",
        link: "/philosophy",
      },
      {
        title: "Curriculum",
        link: "/curriculum",
      },
      {
        title: "Belt Rankings",
        link: "/ranks",
      },
      {
        title: "Class Rules",
        link: "/rules",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Class Schedule",
    link: "/classes",
  },
  {
    title: "Contact Us",
    subMenu: [
      {
        title: "General Contact",
        link: "/contact",
      },
      {
        title: "Prospective Students",
        link: "/students/prospectives",
      },
    ],
  },
];

const sitemap = [
  {
    categoryTitle: "Discover",
    links: [
      {
        title: "History & Mission",
        link: "/mission",
      },
      {
        title: "Instructors & Staff",
        link: "/instructors",
      },
      {
        title: "Philosophy & Ethics",
        link: "/philosophy",
      },
    ],
  },
  {
    categoryTitle: "Learn",
    links: [
      {
        title: "Class Rules",
        link: "/rules",
      },
      {
        title: "Class Schedule",
        link: "/classes",
      },
      {
        title: "Curriculum",
        link: "/curriculum",
      },
      {
        title: "FAQ",
        link: "/faq",
      },
    ],
  },
  {
    categoryTitle: "Join",
    links: [
      {
        title: "Become a Member",
        link: "/join",
      },
      {
        title: "Pricing",
        link: "/pricing",
      },
      {
        title: "Belt Rankings",
        link: "/ranks",
      },
      {
        title: "Rank Requirements",
        link: "/requirements",
      },
    ]
  },
  {
    categoryTitle: "Support",
    links: [
      {
        title: "Donation Form",
        link: "/donation",
      },
      {
        title: "Volunteer Inquiry",
        link: "/volunteers",
      },
      {
        title: "Corporate Partnerships",
        link: "/affliates",
      },
    ],
  },
  {
    categoryTitle: "Contact",
    links: [
      {
        title: "General Contact",
        link: "/contact",
      },
      {
        title: "Prospective Students",
        link: "/students/prospectives",
      },
    ],
  },
];

// This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  let { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    );
  const root = document.getElementById("root");
  if (!root) throw new Error("DOM element #root not found");

  pageProps = {
    menu: topMenu,
    sitemap: sitemap,
    window: window,
    ...pageProps
  };

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vike.dev/clientRouting */
