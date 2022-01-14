import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ textContent, ButtonClass, type, onCLick }) {
  return (
    <button type={type ? type : null} className={ButtonClass ? `${ButtonClass} CustomButton` : null} onClick={onCLick ? onCLick : null}>
      {textContent}
    </button>
  );
}

export default CustomButtonComponent;
