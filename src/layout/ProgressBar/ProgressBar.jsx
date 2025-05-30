import styles from './ProgressBar.module.css';
import { useProgressBar } from './useProgressBar';

export const ProgressBar = ({ target }) => {
  const { scrollProgress } = useProgressBar(target);

  return (
    <div 
        className={styles.progress} 
        style={{ width: `${scrollProgress}%` }}
    />
  );
};