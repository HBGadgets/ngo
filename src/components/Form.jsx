import React from 'react';
import Button from '@mui/material/Button';

const Form = () => {
  const handleButtonClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeYU2IKY7Q8Sm3H2bWjSk1If9Wb5QDIzJ96K5kfNVjqP4sG7Q/viewform', '_blank');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Zakkat Scholarship Form
      </Button>
      <span>
        
      </span>
    </div>
  );
}

export default Form;
