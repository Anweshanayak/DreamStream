import React from 'react';

function NewsletterSection() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '3rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        margin: '3rem 0',
        gap: '2rem',
      }}
    >
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Stay Updated with Our Newsletter
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>
          Join our community and receive the latest news and updates from our nonprofit organization.
        </p>
        <form style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input
            type="email"
            placeholder="Your Email Here"
            style={{
              flex: 1,
              padding: '0.85rem',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.85rem 2rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            Subscribe Now
          </button>
        </form>
        <p style={{ fontSize: '0.9rem', color: '#777', marginTop: '1rem', lineHeight: '1.4' }}>
          By clicking Subscribe Now, you agree to our Terms and Conditions.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://s3-alpha-sig.figma.com/img/eccd/8ef9/5e9da04e404c95b85561c355027d4333?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MqMDTzCaLqbucSeapeHMjXwskdFIfhbeYK-vQnRp7lCArVTd5t9~jz4jgxGDwh3bOZ~bLtD5to3R4IKDPIxdOWw-fZIw7W3LX4EVURulBez8lDzqkmL0IQ-RK9yyw5oI7hwsGVkiPtLHJZjlTAtIittFUIMjw8pnk2GI2xp9cdfmKn64nV~hIfIAcC7UlMFhxOGzcempxTJG1afAr1aniYQ~USgl-TiM01XWr16wVQdcvTR7SucETuttwKgCuGmm6sh11HP-Dv3noTYlEbaAF8Mt-SRitjBfGVe4u8wPfoL-Xpqb6fnrACerlYFNStp016r0VgER4dt1gzmPk7SDXQ__" // Replace with actual image URL
          alt="Newsletter"
          style={{ width: '100%', maxWidth: '504px', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
}

export default NewsletterSection;
