import React from 'react';
import Waves from '../Images/Wave.svg'; // Import the image

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${Waves})`,
        backgroundRepeat: 'no-repeat', // Prevent tiling
        backgroundPosition: 'center top', // Center horizontally and align at the top vertically
        backgroundSize: 'contain', // Ensure the image fits without distortion
        backgroundAttachment: 'scroll', // Allow the background to scroll with the content
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
