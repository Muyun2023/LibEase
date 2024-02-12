// Accordion.jsx
import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        className="accordion-button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
      >
        {isOpen ? 'Close' : 'Contact Us'}
      </button>
      {isOpen && (
        <div id="accordion-content" className="accordion-content">
          <p>Tel: 2063963968<div>Email: ji.mu@northeastern.edu</div><div>Address: Northeastern University Seattle Campus, WA, 98109</div>
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
