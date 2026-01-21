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
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="Roloba Tree Logo"
      >
        <rect width="100" height="100" rx="24" fill="#228b4e" fillOpacity="0.1" />
        {/* Modern Stylized Tree */}
        <path d="M50 20L75 55H25L50 20Z" fill="#2ecc71" />
        <path d="M50 40L82 75H18L50 40Z" fill="#27ae60" />
        <path d="M44 70H56V85H44V70Z" fill="#1a1a1a" />
        <path d="M50 55L85 85H15L50 55Z" fill="#228b4e" />
      </svg>
      <span 
        className={`font-black tracking-tighter text-brand-dark uppercase leading-none select-none ${size >= 32 ? 'text-4xl' : 'text-xl'}`} 
        style={{ 
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          letterSpacing: '-0.05em'
        }}
      >
        ROLOBA<span className="text-brand-green">.</span>
      </span>
    </div>
  );
};

export default Logo;