'use client'
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors = {};
    const phoneRegex = /^[0-9]{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) formErrors.name = 'Full name is required';
    if (!formData.email || !emailRegex.test(formData.email)) formErrors.email = 'Invalid email address';
    if (!formData.mobile || !phoneRegex.test(formData.mobile)) formErrors.mobile = 'Invalid mobile number';
    if (!formData.message) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');
    
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const response = await fetch('http://localhost:7000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSubmitStatus('Form submitted successfully.');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setSubmitStatus(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus('Error submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">We are here to help!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Let us know how we can best serve you. Use the contact form to email us or select from the topics below that best fit your needs.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            
            <input
              type="tel"
              name="mobile"
              placeholder="Phone number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
            
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-secondary hover:text-primary hover:bg-secondary py-3 rounded-lg font-semibold transition"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
          {submitStatus && (
            <p className={`mt-4 text-center ${submitStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
              {submitStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
