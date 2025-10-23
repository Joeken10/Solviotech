import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
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
  const [showFullHeading, setShowFullHeading] = useState(false);

  const toggleFAQ = (index) =>
    setActiveFAQ(activeFAQ === index ? null : index);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most web applications take 4–12 weeks from start to finish.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer maintenance packages with updates, security monitoring, and performance optimization.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in React, Next.js, Flask, Node.js, Python, and modern cloud technologies.",
    },
    {
      question: "How do you handle communication?",
      answer:
        "We maintain regular updates through calls, reports, and project management tools.",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        {/* LEFT SIDE - INFO */}
        <div className="contact-info">
          <h5 className="contact-label">CONTACT US</h5>

          {!showFullHeading ? (
            <h1 className="typed-heading">
              <ReactTyped
                strings={[
                  `Get in touch with <br/><span class='brand-name'>Solviotech</span><br/><strong>contact information</strong>`,
                ]}
                typeSpeed={50}
                showCursor={false}
                loop={false}
                onComplete={() => setShowFullHeading(true)}
              />
            </h1>
          ) : (
            <h1 className="typed-heading show-full">
              Get in touch with <br />
              <span className="brand-name">Solviotech</span> <br />
              <strong>contact information</strong>
            </h1>
          )}

          <p className="intro">
            We’re always ready to help your business.{" "}
            <strong>Talk with us today.</strong>
          </p>

          <div className="info-block">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Our Address</h4>
              <p>1st Kaunda Street, Nairobi, Kenya</p>
            </div>
          </div>

          <div className="info-block">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Call Us Anytime</h4>
              <p>+254 720955034</p>
              <p>+254 720955034</p>
            </div>
          </div>

          <div className="info-block">
            <FaEnvelope className="icon" />
            <div>
              <h4>Send Email</h4>
              <p>info@solviotech.com</p>
              <p>joek@solviotech.com</p>
              <p>posir@solviotech.com</p>
            </div>
          </div>

          <div className="info-block">
            <FaClock className="icon" />
            <div>
              <h4>Business Hours</h4>
              <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p>Weekend: By appointment</p>
            </div>
          </div>

          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

   
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact us</h2>
          <p className="form-intro">
            We'd love to hear from you. Fill out the form and we’ll respond soon.
          </p>

          <div className="form-grid">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <label className="terms">
            <input type="checkbox" required /> I agree to all terms and
            conditions.
          </label>

          <button type="submit" className="send-btn">
            <FaPaperPlane /> Submit Now
          </button>
        </form>
      </div>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <h2>Quick Answers to Common Questions</h2>
        <p className="faq-intro">
          Learn more about our services and how we work.
        </p>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${activeFAQ === i ? "active" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span>{activeFAQ === i ? "−" : "+"}</span>
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
