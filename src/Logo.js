import React from 'react';

function Logo() {
  const companies = [
    { name: 'Webflow', logo: 'webflow-logo-url' },
    { name: 'Relume', logo: 'relume-logo-url' },
    // Add more companies here if needed
  ];

  return (
    <section
      style={{
        backgroundColor: '#F8F9FA',
        textAlign: 'center',
        padding: '2rem 0',
      }}
    >
      <h3
        style={{
          fontSize: '40px',
          fontWeight: '700',
          lineHeight: '48px',
          color: '#000',
          marginBottom: '2rem',
        }}
      >
        Company we work with
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '32px',
          maxWidth: '1312px',
          margin: '0 auto',
        }}
      >
        {companies.map((company, index) => (
          <div key={index}>
            <img
              src={company.logo}
              alt={company.name}
              style={{ maxWidth: '100px', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Logo;
