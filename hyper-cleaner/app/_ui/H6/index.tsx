import cln from 'classnames';
import styles from './h6.module.scss';

export default function H6({ children, classModifier }: { children: React.ReactNode, classModifier?: string }) {
    return (
        <h6 className={cln(styles.h6, classModifier)}>{children}</h6>
    );
}