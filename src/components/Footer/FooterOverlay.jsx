import React from 'react';

import './FooterOverlay.css';

const FooterOverlay = () => (
          // df fd:column pos:absolute
   <div className="app__footerOverlay">
                  {/* heigth:25% bg */}
    <div className="app__footerOverlay-black" />
                  {/* height 75%             bg*/}
    <div className="app__footerOverlay-img app__bg" />
  </div>
);

export default FooterOverlay;