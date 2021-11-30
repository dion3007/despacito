import React from "react";
import { removeUserSession } from "../../utils/common";

const Header = ({ history }) => {
  const handleLogout = () => {
    removeUserSession();
    window.location.href = "/login";
  };

  return (
    <header class="top-header">
      <nav class="navbar navbar-expand">
        <div class="left-topbar d-flex align-items-center">
          <a href="javascript:;" class="toggle-btn">
            {" "}
            <i class="bx bx-menu"></i>
          </a>
        </div>
        <div class="right-topbar ml-auto">
          <ul class="navbar-nav">
            <li class="nav-item dropdown dropdown-lg">
              <a
                class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                href="javascript:;"
                data-toggle="dropdown"
              >
                <i class="bx bx-bell vertical-align-middle"></i>
              </a>
            </li>
            <li class="nav-item dropdown dropdown-lg">
              <a
                class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                onClick={handleLogout}
                data-toggle="dropdown"
              >
                <i class="lni lni-exit vertical-align-middle"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
