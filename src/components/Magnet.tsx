import React, { useRef, useState, MouseEvent } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 120,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const [isActive, setIsActive] = useState(false);
  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const { left, top, width, height } = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    setTransform(`translate3d(${x / strength}px, ${y / strength}px, 0)`);
    if (!isActive) setIsActive(true);
  };

  const handleMouseLeave = () => {
    setTransform('translate3d(0, 0, 0)');
    setIsActive(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ padding: `${padding}px`, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
