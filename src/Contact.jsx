import React, { useState } from "react";
import { useForm } from "@formspree/react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqywnwk");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    setIsSubmitted(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid services_banner" id="contact">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-sm-7 col-md-7 col-lg-5 col-9">
            {!isSubmitted ? (
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Full Name
                  </label>
                  <br />
                  <input
                    className="feeds w-100"
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    id="username"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phonenumber" className="form-label">
                    Phone
                  </label>
                  <br />
                  <input
                    className="feeds w-100"
                    type="tel"
                    name="phonenumber"
                    placeholder="Contact Number"
                    id="phonenumber"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailaddress" className="form-label">
                    Email address
                  </label>
                  <br />
                  <input
                    className="feeds w-100"
                    type="email"
                    name="emailaddress"
                    placeholder="name@example.com"
                    id="emailaddress"
                    required
                    autoComplete="off"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control w-100"
                    rows="4"
                    name="message"
                    required
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  style={{ transition: "0.5s" }}
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                  <div className="col-12">
                    <form>
                      <div>
                        <h3
                          style={{
                            color: "green",
                            textAlign: "justify",
                          }}
                        >
                          Thank you for submitting your form! We appreciate your
                          interest in our services and look forward to
                          connecting with you soon.
                        </h3>
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => navigate(-1)}
                          style={{ transition: "0.5s" }}
                        >
                          Go back
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
