import React from 'react';

interface GhostButtonProps {
  href?: string;
  label: string;
  className?: string;
}

const GhostButton: React.FC<GhostButtonProps> = ({ href, label, className = '' }) => {
  const classes = `rounded-full border-2 border-silver text-silver font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-silver/10 transition-colors duration-200 inline-block ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  return <span className={classes}>{label}</span>;
};

export default GhostButton;
