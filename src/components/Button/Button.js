import React from 'react';

const buttonStyles = {
  display: 'inline-flex',
  margin: '0 4px',
  padding: '8px 24px',
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: 'inherit',
};

const Button = ({ type = 'button', label, disabled }) => (
    <button
        type={type}
        disabled={disabled}
        style={{
          ...buttonStyles,
          backgroundColor: disabled ? '#0000001f' : '#2196f3',
          color: disabled ? '#00000042' : '#ffffff',
        }}
    >
      {label}
    </button>
);

export default Button;