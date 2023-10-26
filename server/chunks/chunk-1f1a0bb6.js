import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import PropTypes from "prop-types";
import { H as HeaderBar, S as SitemapFooter } from "./chunk-869567f0.js";
const SidebarEntry$1 = "";
const SidebarEntry = ({ ...props }) => {
  return /* @__PURE__ */ jsxs("a", { className: "sidebar-block", href: props.link, children: [
    /* @__PURE__ */ jsx("div", { className: "sidebar-block-media", children: /* @__PURE__ */ jsx("img", { src: props.image, className: "sidebar-block-media-img", alt: props.title }) }),
    /* @__PURE__ */ jsxs("div", { className: "sidebar-block-body", children: [
      /* @__PURE__ */ jsx("h2", { className: "sidebar-block-headline", children: props.title }),
      /* @__PURE__ */ jsx("div", { className: "sidebar-block-excerpt", children: props.excerpt })
    ] })
  ] });
};
SidebarEntry.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  excerpt: PropTypes.string
};
SidebarEntry.defaultProps = {};
const Sidebar$1 = "";
const Sidebar = ({ ...props }) => {
  let listElements = [];
  if (props.entries) {
    props.entries.forEach((child, index) => {
      let key = `sidebar-${props.title.split(" ")[0]}-${index}`;
      listElements.push(/* @__PURE__ */ jsx("li", { className: "block-item", children: /* @__PURE__ */ jsx(
        SidebarEntry,
        {
          title: child.title,
          image: child.image,
          excerpt: child.excerpt,
          link: child.link
        }
      ) }, key));
    });
  }
  return /* @__PURE__ */ jsxs("section", { className: "sidebar", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: props.title }),
    /* @__PURE__ */ jsx("ul", { className: "block-list", children: listElements })
  ] });
};
Sidebar.propTypes = {
  title: PropTypes.string,
  entries: PropTypes.array
};
Sidebar.defaultProps = {};
const InfoPage$1 = "";
const InfoPage = ({ ...props }) => {
  let topLevelParagraphs = [];
  if (props.topParagraphs) {
    props.topParagraphs.forEach((para, index) => {
      let key = `infoPage-topParagraphs-${index}`;
      topLevelParagraphs.push(/* @__PURE__ */ jsx("p", { children: para }, key));
    });
  }
  let sidebar2 = "";
  if (props.sidebar) {
    sidebar2 = /* @__PURE__ */ jsx(Sidebar, { ...props.sidebar });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeaderBar, { menu: props.menu, window: props.window }),
    /* @__PURE__ */ jsxs("main", { role: "main", children: [
      /* @__PURE__ */ jsxs("div", { className: "info-page", children: [
        /* @__PURE__ */ jsx("h1", { className: "infopage-title", children: props.title }),
        /* @__PURE__ */ jsxs("section", { className: props.sidebar ? "infoSection withSidebar" : "infoSection noSidebar", children: [
          /* @__PURE__ */ jsxs("div", { className: "textContent", children: [
            topLevelParagraphs,
            /* @__PURE__ */ jsx("img", { className: "textContent-image", src: props.mainImage, alt: `${props.title} Image` }),
            props.children
          ] }),
          sidebar2
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        SitemapFooter,
        {
          logoTitle: "Sinking Moon School of Kung Fu",
          copyrightInfo: "© Copyright 2023 Sinking Moon School of Kung Fu. All rights reserved.",
          logoLink: "/",
          imageAcknowledgementsLink: "/acknowledgements",
          sitemap: props.sitemap
        }
      )
    ] })
  ] });
};
InfoPage.PropTypes = {
  title: PropTypes.string,
  menu: PropTypes.array,
  topParagraphs: PropTypes.array,
  sitemap: PropTypes.array
};
InfoPage.defaultProps = {};
const Definition$1 = "";
const Definition = ({ ...props }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("dt", { children: props.term }),
    /* @__PURE__ */ jsx("dd", { children: props.definition })
  ] });
};
Definition.PropTypes = {
  term: PropTypes.string,
  definition: PropTypes.string,
  marker: PropTypes.bool
};
Definition.defaultProps = {
  marker: false
};
const DefinitionList$1 = "";
const DefinitionList = ({ ...props }) => {
  let definitions = [];
  if (props.terms) {
    props.terms.forEach((term, index) => {
      const key = `definition-${term}-${index}`;
      definitions.push(/* @__PURE__ */ jsx(Definition, { term, definition: props.definitions[index] }, key));
    });
  }
  return /* @__PURE__ */ jsx("dl", { children: definitions });
};
DefinitionList.PropTypes = {};
DefinitionList.defaultProps = {};
const sidebar = {
  title: "Additional Information",
  entries: [
    {
      title: "Instructors & Staff",
      image: "/images/saam.png",
      excerpt: "Meet the instructors and staff members of the Sinking Moon School of Kung Fu",
      link: "/instructors"
    },
    {
      title: "Curriculum",
      image: "/images/curriculum.png",
      excerpt: "An overview of what we teach and our methodology",
      link: "/curriculum"
    },
    {
      title: "Class Rules",
      image: "/images/whistle.png",
      excerpt: "A list of rules to follow while participating at the Sinking Moon School of Kung Fu",
      link: "/rules"
    },
    {
      title: "Belt Ranks",
      image: "/images/belts-small.png",
      excerpt: "Take a look at our belt rankings and the symbolism behind them",
      link: "/ranks"
    },
    {
      title: "Pricing",
      image: "/images/coins-small.png",
      excerpt: "View our student pricing schedule for information on our class and equipment costs",
      link: "/pricing"
    }
  ]
};
export {
  DefinitionList as D,
  InfoPage as I,
  sidebar as s
};
