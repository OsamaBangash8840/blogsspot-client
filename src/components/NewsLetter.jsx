'use client';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(false);
    setIsSubmitting(true);
  
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch('http://localhost:7000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        setIsSuccess(true);
        setMessage(responseData.message || 'Thank you for subscribing to our newsletter!');
        setEmail('');
      } else if (response.status === 409) {
        setMessage('This email is already subscribed.');
      } else {
        setMessage(responseData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center h-[290px] px-8 bg-primary">
      <h2 className="text-2xl text-center sm:text-3xl font-semibold text-white mb-6">
        Subscribe to our newsletter
      </h2>
      {isSubmitted ? (
        <p
          className={`mt-4 text-center ${
            isSuccess ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {message}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md flex flex-col items-center"
        >
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="w-full py-3 pl-4 pr-[6rem] text-[12px] sm:text-[16px] text-primary bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button
           type="submit"
           disabled={isSubmitting}
           className={`absolute top-1/2 -translate-y-1/2 right-2 px-4 py-2 font-medium rounded-full transition ${
           isSubmitting ? 'bg-gray-400 text-gray-700' : 'bg-primary text-white hover:bg-secondary hover:text-primary'
            }`}
           >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>

        </form>
      )}
    </div>
  );
};

export default Newsletter;
