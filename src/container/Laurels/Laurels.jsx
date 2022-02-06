import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  //              df flex1 flex-start
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
                    {/* df fd:colum */}
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
                  // bg    df centrado      padding
  <div  className="app__bg app__wrapper section__padding" id="awards">
                  {/* df flex1  fd:column*/}
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
                      {/* df flex-start flex-wrap */}
      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>

    </div>
                  {/* df flex1 */}
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels_img" />
    </div>

  </div>
);

export default Laurels;