import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/cjs/Dropdown.js";
// import Dropdown from 'react-bootstrap/Dropdown';
import biMenu from "../../assets/bi-menu.svg";
// import { BiMenu } from "react-icons/bi";

import './HamburgerMenu.scss';

// const { BiMenu } = import


// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// eslint-disable-next-line react/display-name
const HamburgerToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div className="hamburgerMenu"
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
    >
        {/* <BiMenu /> */}
        <img src={biMenu} />
    </div>
));

export const HamburgerMenu = ({...props}) => {
    // <HamburgerToggle />
    return (
    <Dropdown>
        <Dropdown.Toggle as={HamburgerToggle} id="dropdown-custom-components">
            Custom toggle
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {props.children}
        </Dropdown.Menu>
    </Dropdown>
    );
};

HamburgerMenu.propTypes = {
    menu: PropTypes.array,
    children: PropTypes.array,
};

HamburgerMenu.defaultProps = {
};
