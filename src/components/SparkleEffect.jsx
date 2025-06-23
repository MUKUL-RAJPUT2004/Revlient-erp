import React, { useEffect, useState } from 'react';

const SparkleEffect = ({ density = 50, className = "" }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < density; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 2,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <div
            className="bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-70"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              boxShadow: `0 0 ${sparkle.size * 2}px rgba(255, 111, 97, 0.5)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SparkleEffect;