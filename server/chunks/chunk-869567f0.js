import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/cjs/Dropdown.js";
import { l as logoImg } from "./chunk-15e5d99a.js";
const getWindowDimensions = (window2) => {
  let width = 1200;
  let height = 800;
  if (window2) {
    width = window2.innerWidth;
    height = window2.innerHeight;
  } else if (global.window) {
    console.info("Using global window instead of passed-in window object");
    width = global.window.innerWidth;
    height = global.window.innerHeight;
  } else {
    console.warn(
      "Unable to retrieve 'window' object. This will result in incorrect width and height for the viewport."
    );
  }
  return {
    width,
    height
  };
};
const biMenu = "/bogano/assets/static/bi-menu.2f3edb3e.svg";
const HamburgerMenu$1 = "";
const HamburgerToggle = React.forwardRef(({ children, onClick }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    className: "hamburgerMenu",
    ref,
    onClick: (e) => {
      e.preventDefault();
      onClick(e);
    },
    children: /* @__PURE__ */ jsx("img", { src: biMenu })
  }
));
const HamburgerMenu = ({ ...props }) => {
  return /* @__PURE__ */ jsxs(Dropdown, { children: [
    /* @__PURE__ */ jsx(Dropdown.Toggle, { as: HamburgerToggle, id: "dropdown-custom-components", children: "Custom toggle" }),
    /* @__PURE__ */ jsx(Dropdown.Menu, { children: props.children })
  ] });
};
HamburgerMenu.propTypes = {
  menu: PropTypes.array,
  children: PropTypes.array
};
HamburgerMenu.defaultProps = {};
const buildHeaderMenu = (menuDefinition, condensedMenu) => {
  let renderedMenuItems = [];
  for (let menuItemIdx in menuDefinition) {
    const menuItem = menuDefinition[menuItemIdx];
    let subMenu = [];
    if (menuItem.subMenu) {
      for (let subMenuItemIdx in menuItem.subMenu) {
        const subMenuItem = menuItem.subMenu[subMenuItemIdx];
        const key = `subMenu-${menuItem.title}-${subMenuItemIdx}`;
        subMenu.push(/* @__PURE__ */ jsx(Dropdown.Item, { href: subMenuItem.link, children: subMenuItem.title }, key));
      }
    }
    if (!menuItem.subMenu) {
      const key = `linkedMenu-${menuItem.title}`;
      renderedMenuItems.push(/* @__PURE__ */ jsx("a", { className: "dropdown-header", href: menuItem.link, children: menuItem.title }, key));
    } else {
      if (condensedMenu) {
        let key = `menuHeader-${menuItem.title}`;
        renderedMenuItems.push(/* @__PURE__ */ jsx(Dropdown.Header, { children: menuItem.title }, key));
        renderedMenuItems.push(subMenu);
      } else {
        const renderedSubMenu = /* @__PURE__ */ jsx(Dropdown.Menu, { className: "dropdown-menu-smskf", children: subMenu });
        const key = `plainDropdown-${menuItem.title}`;
        renderedMenuItems.push(
          /* @__PURE__ */ jsxs(Dropdown, { className: "plain-dropdown", children: [
            /* @__PURE__ */ jsx(Dropdown.Toggle, { variant: "menu", children: menuItem.title }),
            subMenu && renderedSubMenu
          ] }, key)
        );
      }
    }
  }
  if (condensedMenu) {
    return /* @__PURE__ */ jsx("div", { className: "menus", children: /* @__PURE__ */ jsx(HamburgerMenu, { children: renderedMenuItems }) });
  } else {
    return /* @__PURE__ */ jsx("div", { className: "menus", children: renderedMenuItems });
  }
};
const Textmark$1 = "";
const Textmark = ({ ...props }) => {
  let classNames = ["textmark"];
  if (props.alternate) {
    classNames.push("alternate");
  }
  return /* @__PURE__ */ jsx("div", { className: "inline-textmark-container", children: /* @__PURE__ */ jsx("h3", { className: classNames.join(" "), children: props.text }) });
};
Textmark.propTypes = {
  /**
   * This is the text that will be displayed in the textmark.
   */
  text: PropTypes.string
};
Textmark.defaultProps = {
  text: "Sinking Moon School of Kung Fu"
};
const monochromeLogo = "/bogano/images/logo-monochrome.svg";
const Logo$1 = "";
const Logo = ({ ...props }) => {
  const textmark = /* @__PURE__ */ jsx(Textmark, { alternate: props.monochrome ? true : false, text: props.logoTitle });
  let styleObj = {};
  if (!props.monochrome) {
    styleObj.marginLeft = "1rem";
  }
  const logoContainer = /* @__PURE__ */ jsxs("div", { className: "logo-container", style: styleObj, children: [
    /* @__PURE__ */ jsx("div", { className: "inline-logo-container", children: /* @__PURE__ */ jsx("img", { className: "logo", src: props.monochrome ? monochromeLogo : logoImg, alt: props.logoTitle }) }),
    props.textmark ? textmark : ""
  ] });
  let outerLink = logoContainer;
  if (props.link) {
    outerLink = /* @__PURE__ */ jsx("a", { className: "logo-link", href: props.link, children: logoContainer });
  }
  return outerLink;
};
Logo.propTypes = {
  /**
   * This is the title of the logo, used for both the alternate text and the wordmark (if desired).
   */
  logoTitle: PropTypes.string,
  /**
   * An address that the overall container should link to.
   */
  link: PropTypes.string,
  /**
   * Whether or not the textmark should be shown.
   */
  textmark: PropTypes.bool
  /**
   * Is this the principal call to action on the page?
   */
  //   primary: PropTypes.bool,
  /**
   * What background color to use
   */
  //   backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  //   size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  //   label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  //   onClick: PropTypes.func,
};
Logo.defaultProps = {
  logoTitle: "Sinking Moon School of Kung Fu",
  textmark: false
};
const HeaderBar$1 = "";
const HeaderBar = ({ ...props }) => {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions(props.window));
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(props.window));
    }
    window.addEventListener("resize", handleResize);
  });
  let headerMenu = buildHeaderMenu(props.menu, windowDimensions.width <= 600);
  return /* @__PURE__ */ jsxs("header", { className: "main-header", role: "banner", children: [
    /* @__PURE__ */ jsx(Logo, { textmark: true, logoTitle: "Sinking Moon School of Kung Fu", link: "/" }),
    headerMenu
  ] });
};
HeaderBar.propTypes = {
  menu: PropTypes.array
};
HeaderBar.defaultProps = {};
const SitemapColumn$1 = "";
const SitemapColumn = ({ ...props }) => {
  let links = [];
  if (props.links) {
    props.links.forEach((linkVal, index) => {
      const linkKey = `${linkVal.title}-${index}`;
      links.push(/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: linkVal.link, children: linkVal.title }) }, linkKey));
    });
  }
  const submenuVariant = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h5", { children: props.title }),
    /* @__PURE__ */ jsx("ul", { children: links })
  ] });
  const singleLinkVariant = /* @__PURE__ */ jsx("a", { href: props.link, children: /* @__PURE__ */ jsx("h5", { children: props.title }) });
  let classNames = ["sitemap-column"];
  if (props.dark) {
    classNames.push("dark");
  }
  return /* @__PURE__ */ jsx("div", { className: classNames.join(" "), children: props.links ? submenuVariant : singleLinkVariant });
};
SitemapColumn.PropTypes = {
  title: PropTypes.string,
  links: PropTypes.array
};
SitemapColumn.defaultProps = {};
const Sitemap$1 = "";
const Sitemap = ({ ...props }) => {
  let sitemapColumns = [];
  if (props.sitemap) {
    props.sitemap.forEach((menuEntry) => {
      sitemapColumns.push(/* @__PURE__ */ jsx(SitemapColumn, { dark: props.dark, title: menuEntry.categoryTitle, links: menuEntry.links }));
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "sitemap", children: sitemapColumns });
};
Sitemap.PropTypes = {
  sitemap: PropTypes.array
};
Sitemap.defaultProps = {};
const SitemapFooter$1 = "";
const SitemapFooter = ({ ...props }) => {
  return /* @__PURE__ */ jsx("footer", { className: "footer", role: "sitemap", children: /* @__PURE__ */ jsx("div", { className: "layout", children: /* @__PURE__ */ jsxs("div", { className: "layout-oneline", children: [
    /* @__PURE__ */ jsxs("div", { className: "logo-and-copyright-container", children: [
      /* @__PURE__ */ jsx("a", { className: "logo-footer-link", href: props.logoLink, children: /* @__PURE__ */ jsx(
        Logo,
        {
          logoTitle: props.logoTitle,
          textmark: true,
          monochrome: true
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "copyright", children: [
        /* @__PURE__ */ jsx("p", { children: props.copyrightInfo }),
        /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: props.imageAcknowledgementsLink, children: "Image and Copyright Acknowledgements" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Sitemap, { sitemap: props.sitemap, dark: true })
  ] }) }) });
};
SitemapFooter.PropTypes = {
  copyrightInfo: PropTypes.string,
  imageAcknowedlegementsLink: PropTypes.string
};
SitemapFooter.defaultProps = {};
export {
  HeaderBar as H,
  SitemapFooter as S
};
