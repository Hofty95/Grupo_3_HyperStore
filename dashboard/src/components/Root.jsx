import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";

export const Root = () => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
