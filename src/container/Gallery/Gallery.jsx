import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {

    const { current } = scrollRef;  // Referencia al renderizado de todas las imagenes en "app__gallery-images_container"
                                    // Esta habilitado el scroll si se sale de las medidas de la pantalla
    if (direction === 'left') {     // Si se pincha en el boton de left
      current.scrollLeft -= 300;    // se activa el scroll a -300px sobre el eje x
    } else {                        // Sino se pincha en el boton de left (rigth)
      current.scrollLeft += 300;    // se activa en el scroll a +300px sobre el eje x
    }
  };

  return(
                    // df fd:row bg
    <div className="app__gallery flex__center">
                    {/* df flex 1 fd:column ai:flex-start*/}
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
                    {/* df flex 1 fd:row pos:relative */}
      <div className="app__gallery-images">
                        {/* df fd:row overflow-x: scroll*/}
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                            //pos:relative width height
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
                                    {/* pos:absolute */}
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

                  {/* df pos:absolute bottom 5% df justify:space-between */}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
