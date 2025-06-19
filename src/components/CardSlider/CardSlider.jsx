// CardSlider.jsx
import { useState } from 'react';
import './CardSlider.css';

export default function CardSlider({ slides }) {
  const [active, setActive] = useState(0);

  const getStyle = (index) => {
    if (index === active) {
      return {
        transform: 'none',
        zIndex: 1,
        filter: 'none',
        opacity: 1,
      };
    }

    const offset = index - active;
    const absOffset = Math.abs(offset);
    const direction = offset > 0 ? 1 : -1;

    return {
      transform: `translateX(${120 * direction * absOffset}px) scale(${
        1 - 0.2 * absOffset
      }) perspective(16px) rotateY(${direction * -1}deg)`,
      zIndex: -absOffset,
      filter: 'blur(5px)',
      opacity: absOffset > 2 ? 0 : 0.6,
    };
  };

  return (
    <div className="slider-container">
      <button
        id="prev"
        onClick={() => setActive(active > 0 ? active - 1 : active)}
      >
        ⟨
      </button>

      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className="item"
            key={index}
            style={getStyle(index)}
            onClick={slide.onClick}
          >
            <img src={slide.image} alt="expertise" />
            <h2>{slide.title}</h2>
            {slide.subtitle && <h3>{slide.subtitle}</h3>}
            {slide.description && <p>{slide.description}</p>}
            {slide.button && slide.button}
          </div>
        ))}
      </div>

      <button
        id="next"
        onClick={() =>
          setActive(active < slides.length - 1 ? active + 1 : active)
        }
      >
        ⟩
      </button>
    </div>
  );
}
