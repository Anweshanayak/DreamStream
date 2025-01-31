import React from 'react';

function Frame() {
  const frameStyles = {
    width: '1440px',
    height: '750px',
    backgroundColor: '#6c757d', // Placeholder gray background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px', // Optional, for smooth corners
    overflow: 'hidden', // Ensures content stays within bounds
    position: 'relative', // To position the play button properly
  };

  const playButtonImageStyles = {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    cursor: 'pointer', // Indicates interactivity
  };

  return (
    <div style={frameStyles}>
      <img 
        src="https://s3-alpha-sig.figma.com/img/a4c5/2950/96381a9e0bb9ba9047fe6894ed854339?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daiY-b-4F-svYRPRzHIrYqd0EHqBrXQcAgwaSX-jS33hbjbp6iRPiwEC4~BSTU6lbebUQEpJ2u1KYpdV9hzcadJRNyKBWL9RLuNIHKxkgyOiM3f5ZOFA7SK0SAvD5GhBUYoSk4mc4zzz3OxUuYKv9GnXOns7erHsWwuwoFNTbffl1zfnlK41i3GQuyAhAh-tCSdBu7BKJRCQWwjlpfBAtT-YIeUJbuHfndVdSKm1-fh1bd7yWw7eAn09tfUE06B4BH4ag1k-eSlnVs9Ilqds71nXLefmLUqko7OnXvXixpCZNBV0tBdi80wMJYVJGPDhIlTHFh9vdjLk5jgVZ1n7xg__" // Path to the play button image
        alt="Play Button" 
        style={playButtonImageStyles} 
      />
    </div>
  );
}

export default Frame;
