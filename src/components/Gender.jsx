import React, { useState, useEffect } from 'react';

const cardStyleBase = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  marginTop: '20px',
  width: '200px',
  textAlign: 'center',
  color: 'white',
};

function MaleCard() {
  const maleCardStyle = { ...cardStyleBase, backgroundColor: '#007bff' }; // blue
  return (
    <div style={maleCardStyle}>
      <h2>👨 Male Card</h2>
      <p>This is content tailored for males.</p>
    </div>
  );
}

function FemaleCard() {
  const femaleCardStyle = { ...cardStyleBase, backgroundColor: '#ff69b4' }; // pink
  return (
    <div style={femaleCardStyle}>
      <h2>👩 Female Card</h2>
      <p>This is content tailored for females.</p>
    </div>
  );
}

export default function Gender() {
  const [gender, setGender] = useState(null);

  useEffect(() => {
    console.log('Selected gender:', gender);
  });

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    color: 'white',
  };

  const maleBtnStyle = {
    ...buttonStyle,
    backgroundColor: gender === 'male' ? '#0056b3' : '#007bff',
  };

  const femaleBtnStyle = {
    ...buttonStyle,
    backgroundColor: gender === 'female' ? '#c71585' : '#ff69b4',
    marginLeft: '10px',
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Select Gender</h1>
      <button style={maleBtnStyle} onClick={() => setGender('male')}>
        Male
      </button>
      <button style={femaleBtnStyle} onClick={() => setGender('female')}>
        Female
      </button>

      {gender === 'male' && <MaleCard />}
      {gender === 'female' && <FemaleCard />}
    </div>
  );
}
