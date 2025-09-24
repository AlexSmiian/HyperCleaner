import styles from './h3.module.scss';
import cln from 'classnames';

export default function H3({ children, classModifier }: { children: React.ReactNode, classModifier?: string }) {
    return (
        <h3 className={cln(styles.h3, classModifier)}>{children}</h3>
    );
}
