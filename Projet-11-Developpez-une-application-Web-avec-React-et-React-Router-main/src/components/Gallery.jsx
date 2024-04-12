import React, { useState } from "react";
import '../css/components/gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


function Gallery({picturesLinks}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % picturesLinks.length;
        setCurrentImageIndex(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentImageIndex - 1 + picturesLinks.length) % picturesLinks.length;
        setCurrentImageIndex(newIndex);
    };

    
    if (picturesLinks.length === 1) {
        return (
          <div className="gallery">
            <div className="image-wrapper">
              <img src={picturesLinks[currentImageIndex]} alt="" className="images-logement"/>
            </div>
          </div>
        );
    }

    return (
        <div className="gallery">
            <button onClick={prevImage} className="button-chrevon-gallery button-chrevon-left">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button> 
            <div className="image-wrapper">
                <img src={picturesLinks[currentImageIndex]} alt="" className="images-logement"/>
            </div>
            <button onClick={nextImage} className="button-chrevon-gallery button-chrevon-right">
                <FontAwesomeIcon icon={faChevronRight} />
            </button> 
            <div className="image-count">{`${currentImageIndex + 1}/${picturesLinks.length}`}</div> 
        </div>
    );
}
export default Gallery;