import React from 'react';

import './SelectionDropDownComponent.css';

function SelectionDropDownComponent({ Heading, options, name, ChangeFunction }) {
  return (
    <div>
      <h3>{Heading}</h3>
      <select name={name} onChange={ChangeFunction}>
        {options.data.map((el) => (
          <option value={el.el} key={el.el}>
            {el.el}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectionDropDownComponent;
