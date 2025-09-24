import cln from 'classnames';
import styles from './hamburger.module.scss';

export default function Hamburger({
    isOpen,
    onClick,
    classModifier
}: {
    isOpen: boolean,
    onClick: () => void,
    classModifier?: string
}) {
    return (
        <button
            type="button"
            className={cln(styles.hamburger, { [styles.open]: isOpen }, classModifier)}
            onClick={onClick}
        >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    )
}