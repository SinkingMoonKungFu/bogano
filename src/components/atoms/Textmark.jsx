import React from "react";
import PropTypes from "prop-types";
import "./Textmark.scss";

/**
 * Primary UI component for user interaction
 */
export const Textmark = ({ ...props }) => {
    return (
        <div className="inline-textmark-container">
            <h3 className="textmark">{props.text}</h3>
        </div>
    );

};

Textmark.propTypes = {
  /**
   * This is the text that will be displayed in the textmark.
   */
  text: PropTypes.string,
};

Textmark.defaultProps = {
  text: "Sinking Moon School of Kung Fu",
};
