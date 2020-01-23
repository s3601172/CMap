import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css"

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/username">
        Username
      </a>

      <a className="menu-item" href="/yprogram">
        Your Programs
      </a>

      <a className="menu-item" href="/mprogram">
        Manage Programs
      </a>

      <a className="menu-item" href="/acourse">
        Allocate Course
      </a>

    </Menu>
  );
};