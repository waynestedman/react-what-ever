import styles from './button.module.css';

/**
 * Button component with multiple variants based on Figma design
 * @param {Object} props
 * @param {string} props.label - Button text label
 * @param {'small'|'regular'|'large'} props.size - Button size variant
 * @param {'idle'|'platter'|'hover'|'selected'|'disabled'} props.state - Button state variant
 * @param {'capsule'|'rounded'} props.style - Button style variant (capsule or rounded rect)
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
export default function Button({
  label = 'Label',
  size = 'regular',
  state = 'idle',
  style = 'capsule',
  onClick,
  className = ''
}) {
  const buttonClasses = [
    styles.button,
    styles[`size-${size}`],
    styles[`state-${state}`],
    styles[`style-${style}`],
    className
  ].filter(Boolean).join(' ');

  const isDisabled = state === 'disabled';

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className={styles.label}>{label}</span>
    </button>
  );
}
