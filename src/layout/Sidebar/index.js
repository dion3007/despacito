import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div class="sidebar-wrapper" data-simplebar="true">
      <div class="sidebar-header">
        <div class="">
          <img src="assets/images/logo.png" class="logo-icon" alt="" />
        </div>
      </div>
      <ul class="metismenu" id="menu">
        <div class="card-body text-center">
          <img
            src="assets/images/wri-logo.png"
            width="100"
            height="100"
            class="rounded-circle p-1 border bg-white"
            alt=""
          />
          <h5 class="mb-0 mt-4 text-primary">WRI Indonesia</h5>
          <p class="mb-0 text-primary">Super Admin</p>
        </div>
        <li>
          <Link to="/">
            <div class="parent-icon icon-color-3">
              <i class="bx bx-home-alt"></i>
            </div>
            <div class="menu-title">Program Report</div>
          </Link>
        </li>
        <li>
          <Link to="/planting">
            <div class="parent-icon icon-color-3">
              <i class="lni lni-trees"></i>
            </div>
            <div class="menu-title">Planting Report</div>
          </Link>
        </li>
        <li>
          <Link to="/emisi">
            <div class="parent-icon icon-color-3">
              <i class="lni lni-mobile"></i>
            </div>
            <div class="menu-title">Aplikasi EMISI</div>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <div class="parent-icon icon-color-3">
              <i class="lni lni-users"></i>
            </div>
            <div class="menu-title">User Management</div>
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <div class="parent-icon icon-color-3">
              <i class="lni lni-cog"></i>
            </div>
            <div class="menu-title">Setting</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBar;
