import React from "react";
import PropTypes from "prop-types";

import { Textmark } from './Textmark';

import logoImg from "../../assets/smskf-logo.svg";
import monochromeLogo from '/images/logo-monochrome.svg';

import { normalizeToBasePath } from "../../util/Url";

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
        const link = normalizeToBasePath(props.link);

        outerLink = (
        <a className="logo-link" href={link}>
            {logoContainer}
        </a>
        );
    }

    return outerLink;
};

Logo.propTypes = {
  logoTitle: PropTypes.string,
  link: PropTypes.string,
  textmark: PropTypes.bool,
};

Logo.defaultProps = {
  logoTitle: "Sinking Moon School of Kung Fu",
  textmark: false,
};
