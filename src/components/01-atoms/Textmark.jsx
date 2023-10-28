import React from "react";
import PropTypes from "prop-types";
import "./Textmark.scss";

/**
 * Primary UI component for user interaction
 */
export const Textmark = ({ ...props }) => {
  let classNames = ['textmark'];
  if (props.alternate) {
    classNames.push('alternate');
  }

  return (
      <div className="inline-textmark-container">
          <h3 className={classNames.join(' ')}>{props.text}</h3>
      </div>
  );
};

Textmark.propTypes = {
  text: PropTypes.string,
};

Textmark.defaultProps = {
  text: "Sinking Moon School of Kung Fu",
};
