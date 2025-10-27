// Badge component

import styles from './badge.module.css';

function Badge({ text, className }) {

  return (
    <div className={`${styles.badge} ${className || ''}`}>
      <span className={styles.badgeText}>{text}</span>
    </div>
  );
};

export default Badge;