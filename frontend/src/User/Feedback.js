import React, { useState } from 'react';
import './Feedback.css'; 
import Usernav from './Usernav';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    type: 'Comment',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('https://cook-maid-services.vercel.app/email/complain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback), 
      });

      if (res.ok) {
        setSubmitted(true); 
        setFeedback({ type: 'Comment', description: '' }); 
        alert('Feedback submitted successfully!');
      } else {
        alert('Failed to submit feedback.');
      }
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting feedback.');
    }
  };

  return (
    <div className='feedback-app'>
      <Usernav />
      <h1>Feedback Form</h1>
      <p>"How was your experience with our cooking and cleaning services? Let us know!"</p>

      {submitted ? (
        <div className='feedback-thank-you-message'>
          <h2>Thank you for your feedback!</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='feedback-form'>
          <div className='feedback-form-group'>
            <label>Please select feedback type*</label>
            <select 
              name="type"
              value={feedback.type} 
              onChange={handleChange}
            >
              <option>Comment</option>
              <option>Suggestion</option>
              <option>Question</option>
              <option>Complaint</option>
            </select>
          </div>

          <div className='feedback-form-group'>
            <label>Description*</label>
            <textarea
              name="description"
              placeholder="Please describe your feedback here..."
              value={feedback.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className='feedback-submit-btn'>Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
