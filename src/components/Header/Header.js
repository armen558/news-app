import React from "react";
import { Link, withRouter } from "react-router-dom";

import ContactForm from "../ContactForm/ContactForm";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Sidebar from "../Sidebar/Sidebar";

import "./Header.css";

class Header extends React.Component {
  state = {
    isSidebarOpen: false,
    isModalOpen: false,
  };

  handleSidebarToggle = () => {
    this.setState((prevState) => {
      return { isSidebarOpen: !prevState.isSidebarOpen };
    });
  };

  handleModalToggle = () => {
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  handleSubmit = (e, text) => {
    e.preventDefault();
    if (text.trim() !== "") {
      this.props.history.push(`/search/${text}`);
    }
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">News</Link>
          </div>
          <Navigation sources={this.props.sources} desktop />
          <SearchForm desktop onSubmit={this.handleSubmit} />
          <button className="contactUsBtn desktop" onClick={this.handleModalToggle}>
            Contact us
          </button>
          <div className="menuIcon" onClick={this.handleSidebarToggle}>
            &#8801;
          </div>
        </div>
        <Sidebar
          sources={this.props.sources}
          open={this.state.isSidebarOpen}
          toggle={this.handleSidebarToggle}
          onSubmit={this.handleSubmit}
          contactFormOpen={this.handleModalToggle}
        />
        {this.state.isModalOpen ? (
          <Modal close={this.handleModalToggle}>
            <ContactForm />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Header);
