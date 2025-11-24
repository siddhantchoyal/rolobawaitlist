import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-brand-green flex-shrink-0"
      >
        {/* Top Left Square */}
        <rect x="0" y="0" width="22" height="22" fill="currentColor" />
        
        {/* Bottom Left Triangle shape */}
        <path d="M0 22 H22 L0 44 Z" fill="currentColor" />
        
        {/* Bottom Right Curved shape - The 'R' curve */}
        <path d="M40 40 H18 V18 C30.15 18 40 27.85 40 40 Z" fill="currentColor" />
      </svg>
      <span className={`font-extrabold tracking-tight text-brand-green uppercase ${size >= 32 ? 'text-3xl' : 'text-xl'}`}>
        Roloba
      </span>
    </div>
  );
};

export default Logo;