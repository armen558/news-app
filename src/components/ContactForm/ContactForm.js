import React from "react";

import "./ContactForm.css";

class ContactForm extends React.Component {
  state = {
    fields: {
      name: "",
      email: "",
      message: "",
    },
    err: {},
  };

  handleChange = (event, type) => {
    let newFields = { ...this.state.fields, [type]: event.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (this.state.fields.name.trim() === "") {
      errors.name = "Please enter name";
    }
    if (this.state.fields.email.trim() === "") {
      errors.email = "Please enter email";
    } else if (!validateEmail(this.state.fields.email)) {
      errors.email = "Please enter valid email";
    }
    if (this.state.fields.message.trim() === "") {
      errors.message = "Please enter message";
    }
    this.setState({ err: errors });
    if (Object.keys(errors).length !== 0) return;
    this.setState({
      fields: {
        name: "",
        email: "",
        message: "",
      },
    });
    alert('Form submitted')

  };

  render() {
    return (
      <div className="contactForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name*"
            value={this.state.fields.name}
            onChange={(_) => this.handleChange(_, "name")}
          />
          {this.state.err.name ? <p>{this.state.err.name}</p> : null}
          <input
            type="text"
            placeholder="Email*"
            value={this.state.fields.email}
            onChange={(_) => this.handleChange(_, "email")}
          />
          {this.state.err.email ? <p>{this.state.err.email}</p> : null}
          <textarea
            placeholder="Message*"
            value={this.state.fields.message}
            onChange={(_) => this.handleChange(_, "message")}
          />
          {this.state.err.message ? <p>{this.state.err.message}</p> : null}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    return false;
  }

  return true;
}

export default ContactForm;
