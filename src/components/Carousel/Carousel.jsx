import React, { useState } from 'react';
import './Carousel.css';

// Импортируем изображения явно
import subaru from '../../assets/img/bmw.jpg';
import camry from '../../assets/img/camry.jpg';
import honda from '../../assets/img/zaz.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cars = [
    {
      title: 'Subaru Forester',
      image: subaru, // Используем импортированное изображение
      description: 'Полный привод, 2.5L двигатель'
    },
    {
      title: 'Toyota Camry',
      image: camry,
      description: 'Передний привод, 2.4L двигатель'
    },
    {
      title: 'Honda CR-V',
      image: honda,
      description: 'Гибридная версия, экономичный расход'
    }
  ];

  // Остальной код без изменений
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">ARMMAPK</h2>
      <h3 className="carousel-subtitle">Выбери машину, на которой хочешь учиться!</h3>
      
      <div className="carousel-slide">
        <button className="nav-button prev" onClick={prevSlide}>&lt;</button>
        
        <div className="slide-content">
          <img 
            src={cars[currentIndex].image} // Используем импортированное изображение
            alt={cars[currentIndex].title}
            className="car-image"
          />
          <div className="car-info">
            <h4>{cars[currentIndex].title}</h4>
            <p>{cars[currentIndex].description}</p>
          </div>
        </div>

        <button className="nav-button next" onClick={nextSlide}>&gt;</button>
      </div>

      <div className="indicators">
        {cars.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;