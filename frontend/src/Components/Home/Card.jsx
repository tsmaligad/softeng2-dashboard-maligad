import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div style={{
      background: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      flex: '1 1 200px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', marginTop: '10px' }}>{value}</p>
    </div>
  );
};

export default Card;
