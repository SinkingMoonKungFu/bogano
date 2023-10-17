import React from "react";
// import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import { HamburgerMenu } from "./HamburgerMenu";

// import { getWindowDimensions } from "../../util/Viewport";

export const buildHeaderMenu = (menuDefinition, condensedMenu) => {
  // if (condensedMenu) {
  //   return (<HamburgerMenu>
  //     </HamburgerMenu>);
  // }

  let renderedMenuItems = [];
  for (let menuItemIdx in menuDefinition) {
    const menuItem = menuDefinition[menuItemIdx];
    let subMenu = [];
    if (menuItem.subMenu) {
      for (let subMenuItemIdx in menuItem.subMenu) {
        const subMenuItem = menuItem.subMenu[subMenuItemIdx];
        subMenu.push(<Dropdown.Item>{subMenuItem.title}</Dropdown.Item>);
      }
    }

    if (!menuItem.subMenu) {
      renderedMenuItems.push(<a className="dropdown-header" href={menuItem.link}>{menuItem.title}</a>);
    } else {
      if (condensedMenu) {
        renderedMenuItems.push(<Dropdown.Header>{menuItem.title}</Dropdown.Header>);
        renderedMenuItems.push(subMenu);
      } else {
        const renderedSubMenu = <Dropdown.Menu className="dropdown-menu-smskf">{subMenu}</Dropdown.Menu>;

        renderedMenuItems.push(
          <Dropdown className="plain-dropdown">
            <Dropdown.Toggle variant="menu">{menuItem.title}</Dropdown.Toggle>
            {subMenu && renderedSubMenu}
          </Dropdown>
        );
      }
    }
  }

  if (condensedMenu) {
    return (
      <div className="menus">
        <HamburgerMenu>
          {renderedMenuItems}
        </HamburgerMenu>
      </div>
    );
  } else {
    return <div className="menus">{renderedMenuItems}</div>;
  }
};
