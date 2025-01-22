import React from 'react';

function HeroSection() {
  return (
    <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to the HRMS Portal
        </h1>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '1.5rem' }}>
          Automate Offer Letter Generation, Analyze Resumes Effortlessly, and Generate Real-Time Reports to Make Data-Driven Decisions.
        </p>
        <div>
          <button style={{ padding: '0.75rem 1.5rem', marginRight: '1rem', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}>
            Get started
          </button>
          <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer' }}>
            Learn more
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/591b/0d5a/a87448a3cde9c6c34097d250d4d1dcc0?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aIjeRgzkGVJSIXNntnjuD5F9rUieKS9f8eeydhfLFIkTT0sEUqqEPrS4ipNK-9yzPmR1RASDHVpXn2xPhAy5icWJj0Y2PfZPh6bUyHeD-k7w-VFfvHVDLFF2GXvo23EQwzrUon8ocw7fB5Izl1ucUpMbZZeqkxd49URDnmQEj1AcsZchZcFrIM99u6kcV1CsqqypVKorVW16M2Bn9SJjtg2-tEJtQrWoRArwKjtmHRRfiTIk-v7GczHnO5cFrsF8eMBN89KjunMbE9650krmAUmQA1LZPyP4JuwPQKzpW6Z7XJaccIgYRaGNvClo4eaPYKvRik9CvEEffFxkPHElYg__" // Replace with the correct image URL
          alt="HRMS Portal Overview"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
