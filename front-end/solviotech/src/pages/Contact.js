import React, { useState } from "react";
import "./Contact.css";
import ChatBot from "../components/ChatBot"; 

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-form">
          <h2>Send us a message</h2>
          <p>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us more about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              ✈ Send Message
            </button>
          </form>
        </div>

        
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Whether you have a project in mind, need technical consultation, or
            just want to say hello — we're here to help. Reach out through any
            of the channels below.
          </p>

          <div className="info-item">
            <div className="icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>
                123 Tech Street <br />
                Innovation District <br />
                Digital City, DC 12345
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+1 +254 720955034</p>
              <p>+1 +254 720955034</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p>info@solviotech.com</p>
              <p>joek@solviotech.com</p>
              <p>posir@solviotech.com</p>,
            </div>
          </div>
        </div>
      </div>

      
      <ChatBot />
    </div>
  );
}

export default Contact;
