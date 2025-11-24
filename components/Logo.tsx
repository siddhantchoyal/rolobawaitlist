import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-green flex-shrink-0"
        aria-label="Roloba Logomark"
      >
        <path fill="currentColor" d="M0 0h22v22H0z"/>
        <path fill="currentColor" d="M0 22h22L0 44z"/>
        <path fill="currentColor" d="M40 40H18V18c12.15 0 22 9.85 22 22z"/>
      </svg>
      <span 
        className={`font-[900] tracking-tighter text-brand-green uppercase ${size >= 32 ? 'text-4xl' : 'text-2xl'}`} 
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
      >
        Roloba
      </span>
    </div>
  );
};

export default Logo;