import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <>
      <div className={`sidebar ${props.open ? "open" : ""}`}>
        <Navigation sources={props.sources} sidebarToggle={props.toggle} />
        <span className="closeIcon" onClick={props.toggle}>
          &#215;
        </span>
        <SearchForm onSubmit={props.onSubmit} />
        <button
          className="contactUsBtn"
          onClick={props.contactFormOpen}
        >
          Contact us
        </button>
      </div>
      {props.open ? <Backdrop clicked={props.toggle} /> : null}
    </>
  );
};

export default Sidebar;
