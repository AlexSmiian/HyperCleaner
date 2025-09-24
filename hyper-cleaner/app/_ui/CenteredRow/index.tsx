import cln from 'classnames';
import styles from './centered.module.scss';

export default function CenteredRow(
    {
        children,
        elementType = 'div',
        classModifier
    }: {
        children: React.ReactNode,
        elementType?: 'div' | 'section',
        classModifier?: string
    }
) {
    const className = cln(styles.centeredRow, classModifier);

    if (elementType === 'section') {
        return (
            <section className={className}>
                {children}
            </section>
        )
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}