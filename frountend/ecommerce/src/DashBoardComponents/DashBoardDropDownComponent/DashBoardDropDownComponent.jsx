import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './DashBoardDropDownComponent.css';

function DashBoardDropDownComponent({ HeadingContent, SubOptionData }) {
  const [ShowDropDown, setShowDropDown] = useState(false);
  const [OptionActive, setOptionActive] = useState('');
  const [OptionsData, setOptionsData] = useState(SubOptionData.option);

  const ShowDropDownFunction = function () {
    setShowDropDown(!ShowDropDown);
  };

  return (
    <div className="DropDown__Div">
      <div className={!ShowDropDown ? 'dropDown_heading_div' : 'dropDown_heading_div_active'} onClick={ShowDropDownFunction}>
        <h1>{HeadingContent ? HeadingContent : null}</h1>
        <i class={!ShowDropDown ? 'fas fa-sort-down' : 'fas fa-sort-up'}></i>
      </div>
      <div className={!ShowDropDown ? 'Drop__List' : 'Drop__List Drop__List_action'}>
        <ul>
          {OptionsData.map((el) => (
            <li key={el.data}>
              <Link to={el.data.toLowerCase().replaceAll(' ', '_')}>
                <p
                  className={OptionActive === el.data ? 'Drop__List_action' : null}
                  onClick={(e) => {
                    if (e.target.textContent === el.data) {
                      setOptionActive(el.data);
                    }
                  }}
                >
                  {el.data}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashBoardDropDownComponent;
