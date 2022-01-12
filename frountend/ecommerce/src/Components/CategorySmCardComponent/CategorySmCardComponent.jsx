import React from 'react';
import { Link } from 'react-router-dom';

import './CategorySmCardComponent.css';

function CategorySmCardComponent({ textContent, DropDown }) {
  return (
    <Link to={`/products/${textContent.toLowerCase()}`}>
      <div className="Category__sm_div">
        <p>{textContent}</p>
        {DropDown == true ? <i class="fas fa-sort-down"></i> : null}
      </div>
    </Link>
  );
}

export default CategorySmCardComponent;
