import React, { useState } from "react";
import axios from "axios";
import "./C1.css";

const C1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/contactInsert.php",
        formData
      );

      if (response.data.success) {
        setSuccessMessage(
          "Thank You for Reaching Out! We have received your message and will get back to you shortly."
        );
        setSubmitted(true);
        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSuccessMessage(
          "There was an error submitting the form. Please try again."
        );
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setSuccessMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="thank-you-message">
          <h2>{successMessage}</h2>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}

      <div className="contact-details">
        <h2>Our Contact Details</h2>
        <p>Email: contact@tranquilltravel.com</p>
        <p>Phone: +91 78743 77364</p>
        <p>
          Address: 105, Tranquill Travel, Near Shilp bunglows, Nikol, Ahmedabad
        </p>
      </div>
    </div>
  );
};

export default C1;
