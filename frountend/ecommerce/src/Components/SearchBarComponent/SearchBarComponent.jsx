import React, { useState } from 'react';

import './SearchBarComponent.css';

function SearchBarComponent() {
  const [SearchData, setSearchData] = useState('');

  const ChangeSearchInput = function (e) {
    setSearchData(e.target.value);
  };

  const SendData = async function () {
    const res = await fetch(`/products/get/${SearchData}`, {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',

      body: JSON.stringify({
        SearchData,
      }),
    });

    const data = await res.json();
    console.log(data);
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
