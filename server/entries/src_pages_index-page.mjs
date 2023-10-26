import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import { H as HeaderBar, S as SitemapFooter } from "../chunks/chunk-869567f0.js";
import PropTypes from "prop-types";
import { IoIosPin } from "react-icons/io/index.js";
import "react-bootstrap/cjs/Dropdown.js";
import "../chunks/chunk-15e5d99a.js";
const HeroHeadline$1 = "";
const HeroHeadline = ({ ...props }) => {
  let classNames = [props.className, "hero-headline"];
  let icon;
  if (props.icon && props.icon === "pin") {
    icon = /* @__PURE__ */ jsx(IoIosPin, { size: "2em" });
    classNames.push("with-icon");
  }
  let heroContainer = /* @__PURE__ */ jsxs("h2", { className: classNames.join(" "), children: [
    icon,
    " ",
    props.text
  ] });
  if (props.size === "smallBox") {
    classNames.push("smallBox");
    heroContainer = /* @__PURE__ */ jsxs("h5", { className: classNames.join(" "), children: [
      icon,
      " ",
      props.text
    ] });
  }
  if (props.link) {
    return /* @__PURE__ */ jsx("a", { href: props.link, children: heroContainer });
  }
  return heroContainer;
};
HeroHeadline.propTypes = {
  /**
   * This is the text that will be displayed in the headline.
   */
  text: PropTypes.string,
  icon: PropTypes.string
};
HeroHeadline.defaultProps = {};
const HeroImage$1 = "";
const HeroImage = ({ ...props }) => {
  return /* @__PURE__ */ jsx("img", { className: "hero-image", src: props.image, alt: props.alt });
};
HeroImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};
HeroImage.defaultProps = {};
const HeroBlock$1 = "";
const HeroBlock = ({ ...props }) => {
  return /* @__PURE__ */ jsxs("span", { className: "hero-block", children: [
    /* @__PURE__ */ jsx(HeroImage, { image: props.image, alt: props.imageAlt }),
    /* @__PURE__ */ jsx(HeroHeadline, { className: "block-hero-tagline", text: props.tagline }),
    /* @__PURE__ */ jsx(HeroHeadline, { className: "block-hero-address", text: props.address, link: props.addressLink, icon: "pin", size: "smallBox" })
  ] });
};
HeroBlock.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  tagline: PropTypes.string,
  address: PropTypes.string,
  addressLink: PropTypes.string
};
HeroBlock.defaultProps = {};
const BlockTout$1 = "";
const BlockTout = ({ ...props }) => {
  return /* @__PURE__ */ jsxs("a", { className: "block-tout", href: props.link, children: [
    /* @__PURE__ */ jsx("img", { className: "block-tout-img", src: props.image, alt: props.text }),
    /* @__PURE__ */ jsx("h4", { className: "block-tout-headline", children: props.text })
  ] });
};
BlockTout.PropTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string
};
BlockTout.defaultProps = {};
const BlockToutList$1 = "";
const BlockToutList = ({ ...props }) => {
  let blockTouts2 = [];
  if (props.blockTouts) {
    props.blockTouts.forEach((nextTout) => {
      blockTouts2.push(/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(BlockTout, { text: nextTout.text, link: nextTout.link, image: nextTout.image }) }));
    });
  }
  return /* @__PURE__ */ jsx("ul", { className: "block-tout-list", children: blockTouts2 });
};
BlockToutList.PropTypes = {
  blockTouts: PropTypes.array
};
BlockToutList.defaultProps = {};
const index = "";
const blockTouts = [
  {
    text: "Meet our instructors",
    image: "/images/instructor-tout.png",
    link: "/instructors"
  },
  {
    text: "Learn About our History and Mission",
    image: "/images/history-tout.png",
    link: "/mission"
  },
  {
    text: "Donate to Our Nonprofit",
    image: "/images/tout-donate.png",
    link: "/donate"
  },
  {
    text: "Join Us for Class",
    image: "/images/join-tout.png",
    link: "/students/prospective"
  }
];
function Page(props) {
  console.log("WTF");
  console.log(props.window);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(HeaderBar, { menu: props.menu, window: props.window }),
    /* @__PURE__ */ jsxs("main", { role: "main", children: [
      /* @__PURE__ */ jsx(
        HeroBlock,
        {
          image: "/images/wudang.jpg",
          imageAlt: "Wudang Mountain, China",
          tagline: "Martial arts, without egos or intimidation",
          address: "13755 Nicollet Ave Suite 203 Burnsville, MN 55337",
          addressLink: "https://maps.app.goo.gl/jESujkKdHnnnJ2y79"
        }
      ),
      /* @__PURE__ */ jsx(BlockToutList, { blockTouts })
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
  ] });
}
export {
  Page
};
