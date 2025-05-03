import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                    Send Message
                </button>
            </form>
            <div className="contact-info">
                <h3>Our Location</h3>
                <p>Gurugram, Haryana, India</p>
                <h3>Our Email</h3>
                <p>manishsirohi023@gmail.com</p>
                <h3>Call Us</h3>
                <p>+91 9568259784</p>
            </div>
        </div>
    );
};

export default Contact;
