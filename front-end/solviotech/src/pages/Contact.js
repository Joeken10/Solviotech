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

  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most web applications take 4–12 weeks from start to finish. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive maintenance packages including updates, security monitoring, performance optimization, and feature enhancements.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in React, Next.js, Flask, Node.js, Python, and modern cloud technologies. We choose the best tech stack for each project's specific needs.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "We maintain regular communication through scheduled calls, progress updates, and collaborative tools. You'll always know exactly where your project stands.",
    },
  ];

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
                1st Kaunda Street <br />
                Nairobi <br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>+254 720955034</p>
              <p>+254 720955034</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p>info@solviotech.com</p>
              <p>joek@solviotech.com</p>
              <p>posir@solviotech.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Quick answers to common questions</h2>
        <p className="faq-intro">
          Learn more about our services and how we work.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ChatBot />
    </div>
  );
}

export default Contact;
