import { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  if (!images || images.length === 0) {
    return <div className="carousel-empty">No images provided</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-viewer">
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image.url} alt={image.title || `Slide ${index + 1}`} />
              {image.title && (
                <div className="carousel-caption">
                  <h3>{image.title}</h3>
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button 
          onClick={prevImage} 
          className="carousel-control-btn"
          aria-label="Previous image"
        >
          Previous
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextImage} 
          className="carousel-control-btn"
          aria-label="Next image"
        >
          Next
        </button>
      </div>
    </div>
  );
}
