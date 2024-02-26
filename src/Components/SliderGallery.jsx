import { useState, useEffect } from "react";
import "./SliderGallery.css";

function SliderGallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-gallery">
      <button onClick={prevImage} className="prev-btn">
        Prev
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Gallery"
        className="gallery-image"
      />
      <button onClick={nextImage} className="next-btn">
        Next
      </button>
    </div>
  );
}

export default SliderGallery;
