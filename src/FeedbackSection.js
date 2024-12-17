import React from 'react';

function FeedbackSection() {
  const feedbacks = [
    {
      name: "Jane Doe",
      role: "Volunteer",
      feedback: "Volunteering here has changed my life for the better!",
    },
    {
      name: "John Smith",
      role: "Director, Nonprofit",
      feedback: "The support from volunteers makes a real difference!",
    },
    {
      name: "Emily Johnson",
      role: "Coordinator",
      feedback: "I feel proud to be part of such impactful projects!",
    },
  ];

  return (
    <section>
      <h2>Volunteer Feedback</h2>
      <div>
        {feedbacks.map((item, index) => (
          <div key={index}>
            <h3>{item.feedback}</h3>
            <p>{item.name} - {item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackSection;
