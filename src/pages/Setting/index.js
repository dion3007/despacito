import React from "react";
import Body from "../../layout/Body";

const Setting = () => {
  return (
    <Body>
      <div class="page-wrapper">
        <div class="page-content-wrapper">
          <div class="page-content">
            <div className="card radius-15">
              <div className="card-body">
                <div class="page-breadcrumb d-none d-md-flex align-items-center mb-3">
                  <div class="breadcrumb-title pr-3">Setting</div>
                </div>
                <hr />
                <button type="button" class="btn btn-outline-info m-1 px-5">
                  <i class="bx bx-phone mr-1"></i>Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Setting;
