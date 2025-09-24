import cln from 'classnames';
import styles from './container.module.scss';

export default function Container({
    children,
    elementType = 'div',
    classModifier,
}: {
    children: React.ReactNode,
    elementType?: 'div' | 'main' | 'section',
    classModifier?: string
}) {
    if (elementType === 'main') {
        return (
            <main className={cln(styles.container, classModifier)}>
                {children}
            </main>
        )
    }

    if (elementType === 'section') {
        return (
            <section className={cln(styles.container, classModifier)}>
                {children}
            </section>
        )
    }

    return (
        <div className={cln(styles.container, classModifier)}>
            {children}
        </div>
    )
}