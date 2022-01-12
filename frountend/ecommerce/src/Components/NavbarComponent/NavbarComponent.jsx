import React from 'react';

import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';

import './NavbarComponent.css';

function NavbarComponent() {
   return (
      <div className="Navbar_Div side_padding">
         <div className="padding_one Navbar__Inner_Div">
            <div className="Navbar__inner_logo">
               <h1>Readymart.</h1>
            </div>

            <SearchBarComponent />

            <div className="NavbarBar__Icons_Div">
               <i class="far fa-heart"></i>
               <div className="MyCart">
                  <div className="TotalItem">
                     <p>1</p>
                  </div>
                  <i class="fas fa-shopping-bag"></i>
                  <p>My Cart</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NavbarComponent;
