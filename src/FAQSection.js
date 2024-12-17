import React from 'react';

function FAQSection() {
  const faqs = [
    { question: "How do I volunteer?", answer: "Sign up and choose a project that interests you." },
    { question: "Can I volunteer remotely?", answer: "Yes, many projects can be done remotely." },
    { question: "How do I track hours?", answer: "Log your hours through your volunteer profile." },
  ];

  return (
    <section>
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQSection;
