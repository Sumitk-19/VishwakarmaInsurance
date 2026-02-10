import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    emailjs
      .sendForm(
        "service_65mgblo",     // 🔴 Service
        "template_maf9yh9",    // 🔴 Template
        e.target,
        "SdEwzo6EyrGgnP_AG"      // 🔴 Pulic key
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);

          setTimeout(() => {
            setSubmitted(false);
            e.target.reset();
          }, 4000);
        },
        () => {
          setLoading(false);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-content">

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          <a href="https://share.google/usXAQaOsUqEm1bVHv" target="_blank" className="contact-pill">
            📍 Delhi, India
          </a>

          <a href="tel:+918447154229" className="contact-pill">
            📞 +91 84471 54229
          </a>

          <a href="mailto:v.insurancedocs@gmail.com" className="contact-pill">
            📧 v.insurancedocs@gmail.com
          </a>

          <div className="contact-pill">
            🕒 Mon–Sat: 9 AM – 10 PM
          </div>
        </div>

        {/* FORM / SUCCESS */}
        <div className="contact-form-wrapper">

          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>

              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />

              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="4"
                required
              />

              {error && <p className="form-error">{error}</p>}

              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="form-success">
              <FaCheckCircle />
              <h3>Message Sent Successfully</h3>
              <p>
                Thank you for contacting us.  
                Our team will get back to you shortly.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
