import React from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import Footer from "../Footer";
import PropTypes from "prop-types";

const Body = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <SideBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
