// Badge component

import styles from './badge.module.css';

function Badge({ text }) {

  return (
    <div className={styles.badge}>
      <span className={styles.badgeText}>{text}</span>
    </div>
  );
};

export default Badge;