import cln from 'classnames';
import styles from './centeredContainer.module.scss';

export default function CenteredContainer({
    children,
    elementType = 'div',
    classModifier
}: {
    children: React.ReactNode,
    elementType?: 'div' | 'section' | 'header' | 'footer' | 'main',
    classModifier?: string
}) {
    const className = cln(styles.centeredContainer, classModifier);

    if (elementType === 'section') {
        return (
            <section className={className}>
                {children}
            </section>
        )
    }

    if (elementType === 'header') {
        return (
            <header className={className}>
                {children}
            </header>
        )
    }

    if (elementType === 'footer') {
        return (
            <footer className={className}>
                {children}
            </footer>
        )
    }

    if (elementType === 'main') {
        return (
            <main className={className}>
                {children}
            </main>
        )
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}