import "./FormStyles.css";
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const csrftoken = getCookie('csrftoken');

    try {
      const response = await fetch('http://localhost:8000/api/contact-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} />

        <label>Email</label>
        <input name="email" type="text" value={formData.email} onChange={handleChange} />

        <label>Subject</label>
        <input name="subject" type="text" value={formData.subject} onChange={handleChange} />

        <label>Message</label>
        <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Type your message here." />

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
