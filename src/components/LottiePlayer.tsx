// @ts-nocheck
'use client';

import React, { useRef, useEffect } from 'react';

// Define the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        background: string;
        speed: string;
        loop: boolean;
        autoplay: boolean;
        [key: string]: any;
      };
    }
  }
}

interface LottiePlayerProps {
  src: string;
  className?: string;
  [key: string]: any;
}

export function LottiePlayer({ src, className, ...rest }: LottiePlayerProps) {
  const ref = useRef(null);
  
  // No need for useEffect to handle interactions if they are not required.
  // The component simply renders the lottie-player custom element.

  return (
    <lottie-player
      ref={ref}
      src={src}
      background="transparent"
      speed="1"
      loop
      autoplay
      className={className}
      {...rest}
    ></lottie-player>
  );
}