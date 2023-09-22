import React from "react";
import App from "./App";
import "./App.scss";
import Header from "./shared/Header";
import LeftSidebar from "./shared/LeftSidebar";

const PageRouter = () => {
  return (
    <>
      <Header />
      <section>
        <div className="body_section_wrapper">
          <div className="body_left_section">
            <LeftSidebar />
          </div>
          <div className="body_right_section">
            <App />
          </div>
        </div>
      </section>
    </>
  );
};

export default PageRouter;
