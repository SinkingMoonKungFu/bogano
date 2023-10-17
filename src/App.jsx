import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });

const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element menu={topMenu} sitemap={sitemap} />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
