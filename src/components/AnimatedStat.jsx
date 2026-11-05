import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedStat({ 
  targetNumber, 
  prefix = '', 
  suffix = '+', 
  label = '', 
  description = '', 
  color = '#2563eb',
  duration = 1800 
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime = null;
          const endVal = Number(targetNumber);

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease-out cubic curve
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(easeOut * endVal);
            
            setCurrentValue(val);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentValue(endVal);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, duration, hasAnimated]);

  return (
    <div ref={statRef} className="stat-card-animated reveal-on-scroll">
      <div 
        className="stat-number-animated" 
        style={{ color }}
      >
        <span>{prefix}</span>
        <span>{currentValue}</span>
        <span>{suffix}</span>
      </div>
      {label && (
        <div style={{
          fontSize: '0.82rem',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '0.2rem',
          fontFamily: 'var(--font-display)'
        }}>
          {label}
        </div>
      )}
      {description && (
        <div style={{
          fontSize: '0.8rem',
          color: '#64748b',
          fontWeight: 500,
          lineHeight: 1.45
        }}>
          {description}
        </div>
      )}
    </div>
  );
}
