import React, { useState } from "react";
import "./contact.css";

import { NavLink } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phonenumber: "",
    emailaddress: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const sub = () => {
    return alert(`Form submitted ${data.fullname}!`);
  };

  return (
    <>
      <div className="container-fluid service-banner">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-sm-7 col-md-7 col-lg-5 col-9">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  name="fullname"
                  onChange={inputEvent}
                  value={data.fullname}
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Contact Number"
                  name="phonenumber"
                  onChange={inputEvent}
                  value={data.phonenumber}
                />
              </div>
              <div class="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  name="emailaddress"
                  onChange={inputEvent}
                  value={data.emailaddress}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="exampleInputPassword1"
                  rows="4"
                  name="message"
                  onChange={inputEvent}
                  value={data.message}
                />
              </div>
              <NavLink>
                <button
                  type="submit"
                  class="btn btn-outline-primary"
                  style={{ transition: "0.5s" }}
                  onClick={sub}
                >
                  Submit
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
