import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/6ad5/b81e/ac7ee6a88d8194cb36b94ad2305c7067?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cYG6G5kbll~JlL37QPeL6Hkc9ZZ8uZ4Y~4oSFk0bCyLjFjLN68Q4tSuGoDrJmHowF4oI4t129n4tDBNNfFlpE1FDBo6jAa-CXc7p~M3t-shc3ZByGnAK9iwUs40J1O3dCHkheaNrodbkPHAVj1ptQ9JCDiyDOt-I0x3OCuc0c2XVCyBdwnxwO86c7awZGS4kUpjluQN6DT0hH31zih92ZaqFy53udNB3WsUGv5b5JuJRz6LX01KZypgOBooXrAK-3fCE5jfalDrivUuU8XMZG~jI9qPAEiuD~Stkl-6CDIaYzwckYH3aGHslvFKmKuYgDWxd8myteAp6YykK9d~s6Q__',
      text: 'Seamless integration with my favorite apps has boosted my productivity significantly.',
      name: 'Emily Turner',
      role: 'Entrepreneur',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/6d7e/fae8/a169aee14c3f88d079ff1259e9ec22ae?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRvJr6mwH7mR0hELm9jABvsV7suV0FgJ4292RKP8UU5RF-36-kBVkG98Fu1Nk3f8iJ-ZcayUvXLSPziw5HvBSJCPBr~Kp2TIQjB38RfcTytf4Ov3jlUL7Z6HsgP8Mb6d~UKFPqXAjuSf2HL97sw~ly4-6XOvXNJJTMCbHjsonJ8oxMsi1TxA5zBRllqiZh~28ERP7aacYhj6yhz7cq4Zx9UhiFuUWpm-MItrxPoKmpC2cd3epuZhqDNtwJbZhKmSpRfEoZ4GmJdZyrp1RDYKABLNHFhLtCtysOtll87-ssWzpCIr0dEpv8261RjuYVEkmgmvvpU9677qBDc23lJcaQ__',
      text: 'I rely on it for everything—emails, lists, and reminders. It’s like having a 24/7 assistant.',
      name: 'Sarah Mitchell',
      role: 'Marketing Manager',
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/0858/00d0/b51307a02c867d65326e6f2126f36eda?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k1z3iRiFVgx-z~XuiXwAre51TyPodvJig1gaZ23Ob8g5p-Kg8sV10kVGKrX4MF1C1LDda5klBaM7nyQnhIgbsQDXSdoXuGUGnm2gSmXnasSPDjMuxd8zTxHxSFKpSviJmWYc0l~Fyb3fEEOyOqnrtSIrUzGQJXoQJc25JvX8-GKh9s-Dz2mG-kmkGWwgv3XVbIwexT1hjOhFydCS00F~SKCrkDpojM18NsroYvw6QxtnGmSsEg~7SawUS4wdAPTUy5r1NV8lyfkBbRJrvlV7uBYTGaapDh5mgukteAbEAqm0kpp6XggVd4OGll0N99xNjYV9393OzksoLg3Qt9KuKA__',
      text: 'It saves me so much time! Smart recommendations and task management are a game-changer.',
      name: 'Laura Simmons',
      role: 'Project Manager',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '2rem',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Left Section */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>What our volunteers may said to us</h2>
        <p style={{ fontSize: '1rem', color: '#555', marginTop: '1rem' }}>We want to thank them for their time and effort!</p>
      </div>

      {/* Right Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, auto)',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
        }}
      >
        {/* Top Image */}
        <div
          style={{
            gridColumn: '1 / span 2',
            position: 'relative',
            background: '#fff',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', height: '350px' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              color: '#fff',
              textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
            }}
          >
            <p style={{ fontSize: '1rem', marginBottom: '5px' }}>{testimonials[0].text}</p>
            <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>{testimonials[0].name}</p>
            <p style={{ fontSize: '0.9rem', color: '#ddd' }}>{testimonials[0].role}</p>
          </div>
        </div>

        {/* Bottom Left and Right Images */}
        {testimonials.slice(1).map((testimonial, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              background: '#fff',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', height: '300px' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: '#fff',
                textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
              }}
            >
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>{testimonial.text}</p>
              <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>{testimonial.name}</p>
              <p style={{ fontSize: '0.9rem', color: '#ddd' }}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
