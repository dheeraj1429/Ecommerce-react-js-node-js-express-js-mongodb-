import React from 'react';

import './InputComponent.css';

function InputComponent({ InputPLac, Class, Tag, TagInnerContent, show, Value, name, ChangeFunction }) {
  return (
    <>
      <Tag className={Class ? ` ${Class} product_heading_Input` : 'product_heading_Input'}>{TagInnerContent ? TagInnerContent : null}</Tag>
      {!show ? null : (
        <input type="text" className="Product_Input_Section" placeholder={InputPLac} name={name} value={Value} onChange={ChangeFunction} />
      )}
    </>
  );
}

export default InputComponent;
