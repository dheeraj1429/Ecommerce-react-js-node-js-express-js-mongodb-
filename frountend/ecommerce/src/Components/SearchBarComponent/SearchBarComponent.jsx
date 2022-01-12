import React, { useState } from 'react';

import { searchProduct } from '../../Redux/Action/action';
import { useSelector, useDispatch } from 'react-redux';

import './SearchBarComponent.css';

function SearchBarComponent() {
  const dispatch = useDispatch();
  const [SearchData, setSearchData] = useState('');

  const ChangeSearchInput = function (e) {
    setSearchData(e.target.value);
  };

  const SendData = function () {
    dispatch(searchProduct(SearchData));
  };

  return (
    <div className="SearchBar__Div">
      <input type="search" placeholder="search" value={SearchData} onChange={ChangeSearchInput} />
      <div className="SearchBar__Inner_Icon" onClick={SendData}>
        <p>SEARCH</p>
      </div>
    </div>
  );
}

export default SearchBarComponent;
