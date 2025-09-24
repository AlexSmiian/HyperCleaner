import cln from 'classnames';
import styles from './h2.module.scss';

export default function H2({ children, classModifier }: { children: React.ReactNode, classModifier?: string }) {
    return (
        <h2 className={cln(styles.h2, classModifier)}>{children}</h2>
    );
}