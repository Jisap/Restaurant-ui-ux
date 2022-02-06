import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
                 // df fd:column
  <div className="app__menuitem">
                  {/* df jc:space-between */}
    <div className="app__menuitem-head">
                    {/* flex 1 */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
                    {/* linea hacia el precio */}
      <div className="app__menuitem-dash" />
                    {/* df jc:flex-end */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
      
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;