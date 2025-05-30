import { useEffect, useState } from 'react';

export const useProgressBar = (target) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = target.current;

    if (!element) {
        return;
    }

    const handleScroll = (event) => {
        if (!event?.currentTarget)
        {
            return;
        }

        const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
        
          const maxScroll = scrollHeight - clientHeight;
          let progress = (scrollTop / maxScroll) * 100;

          if (maxScroll - scrollTop <= 1) {
            progress = 100;
          }

        setScrollProgress(Math.ceil(progress));
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
        element.removeEventListener('scroll', handleScroll);
    };
  }, [target]);

  return { scrollProgress };
};