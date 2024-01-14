import React, { useRef } from "react";
import PropTypes from "prop-types";

import { getWindowDimensions } from "../../util/Viewport";
import { buildHeaderMenu } from "./MenuUtils";
import { Logo } from '../01-atoms/Logo';

import "./HeaderBar.scss";

export const HeaderBar = ({ ...props }) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions(props.window));
        }

        window.addEventListener('resize', handleResize)
    })

    let headerMenu = buildHeaderMenu(props.menu, windowSize[0] <= 600);

    return (
        <header className="main-header" role="banner">
            <Logo textmark={true} logoTitle={"Sinking Moon School of Kung Fu"} link={"/"} />
            {headerMenu}
        </header>
    );
};

HeaderBar.propTypes = {
    menu: PropTypes.array
};

HeaderBar.defaultProps = {
};
