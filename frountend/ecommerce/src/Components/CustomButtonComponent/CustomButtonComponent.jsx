import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ textContent, ButtonClass, type }) {
  return (
    <button type={type ? type : null} className={ButtonClass ? `${ButtonClass} CustomButton` : null}>
      {textContent}
    </button>
  );
}

export default CustomButtonComponent;
