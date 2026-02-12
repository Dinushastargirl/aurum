
import React from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
}

/**
 * SafeImage provides a consistent interface for images.
 * In a standard Next.js environment, this would wrap <Image /> from 'next/image'.
 */
const SafeImage: React.FC<SafeImageProps> = ({ priority, className, alt, ...props }) => {
  return (
    <img
      {...props}
      alt={alt || "Aurum Studio"}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`${className} transition-opacity duration-700 ease-in-out`}
      onLoad={(e) => {
        (e.currentTarget as HTMLImageElement).style.opacity = '1';
      }}
      style={{ opacity: 0 }}
    />
  );
};

export default SafeImage;
