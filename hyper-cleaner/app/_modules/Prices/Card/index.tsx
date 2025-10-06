import styles from './card.module.scss';
import cln from 'classnames';

export default function Card({
    mostPopular,
    period,
    fullOldPrice,
    fullNewPrice,
    oneDayNewPrice,
    oneDayOldPrice,
    perDay,
    itemCode,
    isSelected,
    onSelect
}: {
    mostPopular?: string;
    period: string;
    fullOldPrice: string;
    fullNewPrice: string;
    oneDayNewPrice: string;
    oneDayOldPrice: string;
    perDay: string;
    itemCode: string;
    isSelected:boolean;
    onSelect: () => void;
}) {
    return (
        <label className={cln(styles.card,
            mostPopular && styles.popular,
            isSelected && styles.active
        )}>
            {mostPopular && (
                <div className={styles.mostPopular}>{mostPopular}</div>
            )}

            <div className={styles.fakeInput}></div>

            <input
                type="radio"
                className={styles.radio}
                value={itemCode}
                checked={isSelected}
                onChange={onSelect}
                name="plan"
            />

            <div className={styles.periodWrapper}>
                <span className={styles.period}>{period}</span>
                <div className={styles.fullPriceWrapper}>
                    <span className={styles.fullOldPrice}>{fullOldPrice}</span>
                    <span className={styles.fullNewPrice}>{fullNewPrice}</span>
                </div>
            </div>

            <div className={styles.oneDayWrapper}>
                <div className={styles.oneDayOldPriceWrapper}>
                    <span className={styles.oneDayOldPrice}>{oneDayOldPrice}</span>
                    <span className={styles.currency}>$</span>
                </div>
                <span className={styles.zero}>0</span>
                <div className={styles.oneDayNewPriceWrapper}>
                    <span className={styles.oneDayNewPrice}>{oneDayNewPrice}</span>
                    <span className={styles.perDay}>{perDay}</span>
                </div>
            </div>
        </label>
    );
}
