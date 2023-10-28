import React from "react";
import Dropdown from "react-bootstrap/cjs/Dropdown.js";
// import Dropdown from "react-bootstrap/esm/Dropdown.js";
import { HamburgerMenu } from "./HamburgerMenu";
import { normalizeToBasePath } from "../../util/Url";

export const buildHeaderMenu = (menuDefinition, condensedMenu) => {
  let renderedMenuItems = [];
  for (let menuItemIdx in menuDefinition) {
    const menuItem = menuDefinition[menuItemIdx];
    let subMenu = [];
    if (menuItem.subMenu) {
      for (let subMenuItemIdx in menuItem.subMenu) {
        const subMenuItem = menuItem.subMenu[subMenuItemIdx];
        const subItemLink = normalizeToBasePath(subMenuItem.link);
        const key = `subMenu-${menuItem.title}-${subMenuItemIdx}`;

        subMenu.push(<Dropdown.Item key={key} href={subItemLink}>{subMenuItem.title}</Dropdown.Item>);
      }
    }

    if (!menuItem.subMenu) {
        const menuItemLink = normalizeToBasePath(menuItem.link);
        const key = `linkedMenu-${menuItem.title}`;
        renderedMenuItems.push(<a key={key} className="dropdown-header" href={menuItemLink}>{menuItem.title}</a>);
    } else {
      if (condensedMenu) {
        let key = `menuHeader-${menuItem.title}`;
        renderedMenuItems.push(<Dropdown.Header key={key}>{menuItem.title}</Dropdown.Header>);
        renderedMenuItems.push(subMenu);
      } else {
        const renderedSubMenu = <Dropdown.Menu className="dropdown-menu-smskf">{subMenu}</Dropdown.Menu>;
        const key = `plainDropdown-${menuItem.title}`;
        renderedMenuItems.push(
          <Dropdown key={key} className="plain-dropdown">
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
