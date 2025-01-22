import React from 'react';

function TestimonialsAndOffer() {
  
  const features = [
    {
      title: 'Automatic Offer Letter Generation',
      description:
        'The Offer Letter Generator automates the creation of personalized offer letters based on candidate data. It pulls information directly from resumes, interviews, and other input sources to create accurate, customizable offer letters for seamless onboarding.',
      buttonText: 'Generate Offer Letter',
      image:
        'https://s3-alpha-sig.figma.com/img/94df/7496/3b941506209cf350ceaddd06875daaec?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qozZLy53FJ1ncV2VUEA7jU1q4vOkaa92l5t0EG9WZ2Bbm3-qWekVALaEXj6vGAgZBqThF2w6Qp-pMlY1Eak0aEEI3t0l7QjH4hBOn7ZUlvPGeVRZp7gLIExO9ygIijfNMFIaDj1egaM9F56lVppjcw9oyH445XRFVYANl4hwkPGTtDtp1G9HR7Je4PxTs6RvaqPRCyPYKFK-jCpkFI-iMz84JnuZ-8gG073Jn2w6-ZOGWo8-qoKj1eRuMUd71FPlngHBcwaXXFsk7O1D6vxlh9CQK5FXjpp7PJ7l9jSekRj16ESK-gkRwxrZk5R47S79VBv0HfIM66PQ1HHcfhXTlg__',
    },
    {
      title: 'Resume Analyzer',
      description:
        'The Resume Analyzer uses AI to quickly and accurately scan resumes, identifying relevant skills, qualifications, and other attributes. This enables recruiters to match candidates to their most suitable roles.',
      buttonText: 'Analyze Resumes Now',
      image: 'https://s3-alpha-sig.figma.com/img/de35/4f0c/550d70f0baca654dfd9449710f168a43?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ipdK7XbT5u27~cHqS1~b8bi4TdtNH67shOUMIerHemp8SGUMhhE~JPLrTuvC0jUKjnd8oWcW~hONp3qOSzPCIgXe0tgXP-eMkugrN3VJvApnCnRbViQXlCGFiKAliiSo7lMIErhsKSyxzOGezPmTZhBR9sNOeMPtvC2ToXo9XIxjeofMSNPK17bMKpFpaVdDCWNBKKftAhaFoXxRzKkRu9fmhFmONU9YTqwEmqwzhRl-HOGK7AGXf5NP4dhfjeAN59uDQ8RUTl~BA0SRvvkl0PjzIml30jz3l1wZsmd-4cPP1kbUZdvcwndgq~7OlEeH3Tjo-yWmS3mYMYOtrBTVxQ__', // Replace with actual URL
    },
    {
      title: 'Reporting',
      description:
        'The Reporting feature provides HR teams and recruiters with insights on workflows, employee performance, and applicant statistics. This empowers organizations to make data-driven decisions.',
      buttonText: 'View Reports',
      image: 'https://s3-alpha-sig.figma.com/img/ad35/8b9a/bc68a84a0802e1fe0863ca2706ac92df?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWMVZgWIge648yVYiZEdLFxPaF2nvdDvEs7VsSTxqMGUb05VLh0G~PbhcMC97cEUk7hEDXQWLJVhrrw-EMrghO6eR2DYvdTaB~D2DSiFKcVloZuH5~V6TtbYH7BsWOFXpmCIC-DQMIQiLCsFoQ3Ya00b-0baM1iTkJG52EQi886Pp5RQIcOLlHb17IwXlKvZVTQleYLIOdvs5FG4R4mKZbWBAo3UOacdpoXyHmCwzXmsgVEynRHI4RztBh-QQasXKwT-Z~66JVsgOov8PCZjOFDmhlOsU8gkrm2Yzrt8OcFSDHK09LL20jXwGCzwyyjR8lCcypf80lbULJFdcnB2bQ__', // Replace with actual URL
    },
    {
      title: 'Recruitment Automation',
      description:
        'Simplify the recruitment process with our fully automated system. From profile screening to communication and offer letter generation, it reduces manual effort while ensuring accuracy.',
      buttonText: 'Automate Recruitment',
      image: 'https://s3-alpha-sig.figma.com/img/ad35/8b9a/bc68a84a0802e1fe0863ca2706ac92df?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWMVZgWIge648yVYiZEdLFxPaF2nvdDvEs7VsSTxqMGUb05VLh0G~PbhcMC97cEUk7hEDXQWLJVhrrw-EMrghO6eR2DYvdTaB~D2DSiFKcVloZuH5~V6TtbYH7BsWOFXpmCIC-DQMIQiLCsFoQ3Ya00b-0baM1iTkJG52EQi886Pp5RQIcOLlHb17IwXlKvZVTQleYLIOdvs5FG4R4mKZbWBAo3UOacdpoXyHmCwzXmsgVEynRHI4RztBh-QQasXKwT-Z~66JVsgOov8PCZjOFDmhlOsU8gkrm2Yzrt8OcFSDHK09LL20jXwGCzwyyjR8lCcypf80lbULJFdcnB2bQ__', // Replace with actual URL
    },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {/* Testimonials Section */}
      
      {/* Features Section */}
      {features.map((feature, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '4rem',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          }}
        >
          <div style={{ flex: 1 }}>
            <img
              src={feature.image}
              alt={feature.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {feature.title}
            </h2>
            <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
              {feature.description}
            </p>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {feature.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsAndOffer;
