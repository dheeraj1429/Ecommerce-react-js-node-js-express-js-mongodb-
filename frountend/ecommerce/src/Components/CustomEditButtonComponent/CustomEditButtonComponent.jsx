import React from 'react';

import './CustomEditButtonComponent.css';

function CustomEditButtonComponent({ TextContent, ClassData }) {
  return <button className={ClassData ? `${ClassData} Edit_button` : 'Edit_button'}>{TextContent}</button>;
}

export default CustomEditButtonComponent;
