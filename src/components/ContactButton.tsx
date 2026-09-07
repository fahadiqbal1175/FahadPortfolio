import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className = '' }) => {
  return (
    <motion.a
      href="mailto:hafizfahad1175@gmail.com"
      className={`rounded-full font-medium uppercase tracking-widest text-white inline-block px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #0A2E1F 7%, #00B87A 37%, #2196B0 72%, #52E2B1 100%)',
        boxShadow: '0px 4px 4px rgba(0, 184, 122, 0.25), 4px 4px 12px #2D7A5E inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
      whileHover={{ scale: 1.05 }}
    >
      Contact Me
    </motion.a>
  );
};

export default ContactButton;
