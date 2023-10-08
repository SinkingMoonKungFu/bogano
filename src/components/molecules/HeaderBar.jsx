import React from "react";
import PropTypes from "prop-types";
import Dropdown from 'react-bootstrap/Dropdown';

import { getWindowDimensions } from "../../util/Viewport";
import { buildHeaderMenu } from "./MenuUtils";
import { Logo } from '../atoms/Logo';

import "./HeaderBar.scss";

export const HeaderBar = ({ ...props }) => {
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize)
    })

    let headerMenu = buildHeaderMenu(props.menu, windowDimensions.width <= 600);

    return (
        <header className="main-header" role="banner">
            <Logo textmark={true} logoTitle={"Sinking Moon School of Kung Fu"} link={"https://www.sinkingmoon.com"} />
            {headerMenu}
        </header>
    );
};

HeaderBar.propTypes = {
    menu: PropTypes.array
};

HeaderBar.defaultProps = {
};
