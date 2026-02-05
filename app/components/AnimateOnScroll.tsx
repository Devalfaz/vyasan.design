'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-up';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimateOnScroll({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  className = ''
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return isVisible ? 'animate-fade-in' : 'opacity-0';
      case 'fade-in-up':
        return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8';
      case 'fade-in-down':
        return isVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-8';
      case 'fade-in-left':
        return isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8';
      case 'fade-in-right':
        return isVisible ? 'animate-fade-in-right' : 'opacity-0 -translate-x-8';
      case 'scale-in':
        return isVisible ? 'animate-scale-in' : 'opacity-0 scale-95';
      case 'slide-up':
        return isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12';
      default:
        return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

