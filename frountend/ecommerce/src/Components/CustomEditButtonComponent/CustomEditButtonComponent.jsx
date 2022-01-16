import React from 'react';

import './CustomEditButtonComponent.css';

function CustomEditButtonComponent({ TextContent, ClassData, onClick }) {
  return (
    <button className={ClassData ? `${ClassData} Edit_button` : 'Edit_button'} onClick={onClick ? onClick : null}>
      {TextContent}
    </button>
  );
}

export default CustomEditButtonComponent;
