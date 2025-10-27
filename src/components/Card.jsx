// card component

import Badge from './Badge'
import styles from './card.module.css';

function Card () {

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Badge text='Buy Now' className={styles.cardBadge} />
        <h4 className={styles.cardTitle}>Cool Card</h4>
      </div>
      <img src="https://placehold.co/400x300" alt="placeholder image" />
      <div className={styles.cardBody}>
        <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
      </div>
    </div>
  )
};

export default Card;