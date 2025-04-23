import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // use your updated form ID
  const [state, handleSubmit] = useForm("xqaqkwqn");
  const navigate = useNavigate();

  /* --------  SUCCESS SCREEN  -------- */
  if (state.succeeded) {
    return (
      <section className="container py-5 text-center">
        <div
          className="p-4 mb-4 border border-secondary rounded"
          style={{ backgroundColor: "transparent", color: "currentColor" }}
        >
          <h4 className="mb-3">Thank you!</h4>
          <p>We’ve received your message and will get back to you shortly.</p>
        </div>
        <button
          className="btn"
          style={{
            color: "currentColor",
            border: "1px solid currentColor",
            backgroundColor: "transparent",
            transition: "transform .2s ease, box-shadow .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </section>
    );
  }

  /* --------  FORM  -------- */
  return (
    <>
      {/* Banner */}
      <section className="container-fluid text-center py-5 border-bottom border-secondary">
        <h1 className="display-4">Contact Us</h1>
      </section>

      {/* Form */}
      <section className="container py-5">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-4">
            {/* username */}
            <div className="col-md-6">
              <label htmlFor="username" className="form-label">
                Full Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="form-control bg-transparent border-secondary"
                style={{ color: "currentColor" }}
                placeholder="Your full name"
                required
              />
              <ValidationError
                prefix="Full Name"
                field="username"
                errors={state.errors}
                className='text-danger'
              />
            </div>

            {/* emailaddress */}
            <div className="col-md-6">
              <label htmlFor="emailaddress" className="form-label">
                Email Address
              </label>
              <input
                id="emailaddress"
                name="emailaddress"
                type="email"
                className="form-control bg-transparent border-secondary"
                style={{ color: "currentColor" }}
                placeholder="you@example.com"
                required
              />
              <ValidationError
                prefix="Email"
                field="emailaddress"
                errors={state.errors}
                className='text-danger'
              />
            </div>

            {/* phonenumber */}
            <div className="col-md-6">
              <label htmlFor="phonenumber" className="form-label">
                Phone (optional)
              </label>
              <input
                id="phonenumber"
                name="phonenumber"
                type="tel"
                className="form-control bg-transparent border-secondary"
                style={{ color: "currentColor" }}
                placeholder="+1 (555) 123-4567"
              />
              <ValidationError
                prefix="Phone"
                field="phonenumber"
                errors={state.errors}
                className='text-danger'
              />
            </div>

            {/* message */}
            <div className="col-md-6">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-control bg-transparent border-secondary"
                style={{ color: "currentColor" }}
                placeholder="How can we assist you?"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className='text-danger'
              />
            </div>
          </div>

          {/* submit button */}
          <div className="mt-4">
            <button
              type="submit"
              className="btn"
              style={{
                color: "currentColor",
                border: "1px solid currentColor",
                backgroundColor: "transparent",
                transition: "transform .2s ease, box-shadow .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              disabled={state.submitting}
            >
              {state.submitting ? "Sending…" : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
