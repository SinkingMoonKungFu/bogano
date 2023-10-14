import React from "react";
import PropTypes from "prop-types";

import { Textmark } from './Textmark';

import logoImg from "../../assets/smskf-logo.svg";
import monochromeLogo from '/images/logo-monochrome.svg';

import "./Logo.css";

/**
 * Primary UI component for user interaction
 */
export const Logo = ({ ...props }) => {
  const textmark = (
    <Textmark alternate={props.monochrome ? true : false} text={props.logoTitle} />
  );

  let styleObj = {};
  if (!props.monochrome) {
    styleObj.marginLeft = "1rem";
  };

  const logoContainer = (
    <div className="logo-container" style={styleObj}>
      <div className="inline-logo-container">
        <img className="logo" src={props.monochrome ? monochromeLogo : logoImg} alt={props.logoTitle}></img>
      </div>
        {props.textmark ? textmark : ""}
    </div>
  );

  let outerLink = logoContainer;

  if (props.link) {
    outerLink = (
      <a className="logo-link" href={props.link}>
        {logoContainer}
      </a>
    );
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
  textmark: PropTypes.bool,
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
  textmark: false,
};
