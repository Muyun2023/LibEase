import React, { useState } from 'react';
import Accordion from '../components/Accordion';


const Contact = () => {
  const [inquiryType, setInquiryType] = useState('general');
  const [otherFieldVisible, setOtherFieldVisible] = useState(false);
  const [otherFieldValue, setOtherFieldValue] = useState('');
  const [role, setRole] = useState('');
  const [memberLevel, setMemberLevel] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInquiryTypeChange = (event) => {
    const value = event.target.value;
    setInquiryType(value);

    // If "Other" is selected, show the additional field
    setOtherFieldVisible(value === 'other');
  };

  const handleOtherFieldValueChange = (event) => {
    setOtherFieldValue(event.target.value);
    // Clear validation error when user starts typing
    setValidationError('');
  };

  const handleRoleChange = (event) => {
    const value = event.target.value;
    setRole(value);
    // Reset memberLevel when role makes changes
    setMemberLevel('');
  };

  const handleMemberLevelChange = (event) => {
    setMemberLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    if (inquiryType === 'other' && otherFieldValue.trim() === '') {
      setValidationError('Other field is required when "Other" is selected.');
      return;
    }

    // Log or process form data here
    console.log('Form submitted:', {
      inquiryType,
      otherFieldValue,
      role,
      memberLevel,
    });

    // Update state to show submission message
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you cannot find what you're looking for, send our library admins a personal message!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="inquiryType">Inquiry Type</label>
        <select id="inquiryType" value={inquiryType} onChange={handleInquiryTypeChange}>
          <option value="general">General Inquiry</option>
          <option value="technical">Technical Support</option>
          <option value="other">Tell Me What</option>
        </select>

        {otherFieldVisible && (
          <div>
            <label htmlFor="otherField">Other</label>
            <input
              type="text"
              id="otherField"
              value={otherFieldValue}
              onChange={handleOtherFieldValueChange}
              placeholder="Specify other inquiry"
            />
            {validationError && <p className="error-message">{validationError}</p>}
          </div>
        )}

        <label htmlFor="role">Role</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="Guest">Guest</option>
          <option value="member">Member</option>
        </select>

        <label htmlFor="memberLevel">Membership</label>
        <select id="memberLevel" value={memberLevel} onChange={handleMemberLevelChange}>
          {role === 'member' && <option value="Newbie">Newbie</option>}
          {role === 'member' && <option value="Registered member">Registered member</option>}
          {role === 'member' && <option value="Advanced member">Advanced member</option>}
          {role === 'member' && <option value="VIP member">VIP member</option>}
        </select>

        <button type="submit">Submit</button>
      </form>

      {isSubmitted && <p className="submission-message">Successfully Submitted!</p>}
      <Accordion />
    </div>
  );
};

export default Contact;