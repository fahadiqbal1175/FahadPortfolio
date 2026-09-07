import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const totalChars = chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / totalChars;
        const end = (i + 1) / totalChars;
        return (
          <CharComponent 
            key={i} 
            char={char} 
            start={start} 
            end={end} 
            scrollYProgress={scrollYProgress} 
          />
        );
      })}
    </p>
  );
};

interface CharComponentProps {
  char: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
}

const CharComponent: React.FC<CharComponentProps> = ({ char, start, end, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  const isSpace = char === ' ';
  
  return (
    <span style={{ position: 'relative', display: isSpace ? 'inline' : 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{isSpace ? '\u00A0' : char}</span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {isSpace ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
