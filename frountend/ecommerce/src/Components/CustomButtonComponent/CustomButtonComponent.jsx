import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ ButtonClass, type }) {
  return (
    <button type={type ? type : null} className={ButtonClass ? ButtonClass : null}>
      SHOP NOW
    </button>
  );
}

export default CustomButtonComponent;
