import React, { useState } from 'react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'How to volunteer?', answer: 'You can sign up by visiting our volunteer portal.' },
    { question: 'What projects are available?', answer: 'We have various projects ranging from community service to skill-based volunteering.' },
    { question: 'How do I sign up?', answer: 'Click on the "Sign Up" button on our homepage and follow the instructions.' },
    { question: 'Can I track hours?', answer: 'Yes, you can track your volunteer hours through your dashboard.' },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        FAQs
      </h2>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ borderBottom: index !== faqs.length - 1 ? '1px solid #ddd' : 'none' }}>
            <button
              onClick={() => toggleAccordion(index)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: '1rem',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {faq.question}
              <span style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div style={{ padding: '0 1rem 1rem', fontSize: '0.9rem', color: '#555' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
