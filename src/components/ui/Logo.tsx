import React from 'react';
import logo from '../../assets/milkbootle.png'; // Your logo image

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-16',   // 64px
    md: 'h-24',   // 96px
    lg: 'h-32',   // 128px
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Village Milk Logo"
        className={`${sizes[size]} w-auto`}
      />
    </div>
  );
};

export default Logo;
