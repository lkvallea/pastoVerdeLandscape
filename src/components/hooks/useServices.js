import { useState, useEffect } from 'react';
import { db } from '../../data/db';

export const useServices = () => {
  const [data] = useState(db);
  const [idService, setIdService] = useState(0);
  const [prevIdService, setPrevIdService] = useState(11);
  const [nextIdService, setNextIdService] = useState(1);
  const [direction, setDirection] = useState('');
  
  let touchStartY = 0;
  let touchEndY = 0;

  const handleNextService = () => {
    setDirection('next');
    setIdService((prev) => {
      const newId = prev + 1 > 11 ? 0 : prev + 1;
      setPrevIdService(prev);
      setNextIdService(newId + 1 > 11 ? 0 : newId + 1);
      return newId;
    });
  };

  const handlePrevService = () => {
    setDirection('prev');
    setIdService((prev) => {
      const newId = prev - 1 < 0 ? 11 : prev - 1;
      setPrevIdService(newId - 1 < 0 ? 11 : newId - 1);
      setNextIdService(prev);
      return newId;
    });
  };

  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].screenY;
  };

  const handleTouchMove = (e) => {
    touchEndY = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = () => {
    if (touchStartY - touchEndY > 50) {
      handleNextService();
    }

    if (touchEndY - touchStartY > 50) {
      handlePrevService();
    }

    // Limpiar eventos después de cambiar el servicio
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
    container.removeEventListener('touchend', handleTouchEnd);
  };

  useEffect(() => {
    const container = document.querySelector('.services-container');
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [idService]);

  const selectSquereOrder = (idSquareOrder) => {
    if (idSquareOrder === idService) {
      return 'front';
    } else if (idSquareOrder === prevIdService) {
      return direction === 'next' ? 'prev-right' : 'prev-left';
    } else if (idSquareOrder === nextIdService) {
      return direction === 'prev' ? 'next-left' : 'next-right';
    } else {
      return 'back';
    }
  };

  return {
    data,
    selectSquereOrder,
    handleNextService,
    handlePrevService,
  };
};
