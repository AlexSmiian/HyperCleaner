import styles from './moneyBack.module.scss'
import H3 from "@/app/_ui/H3";

export default function MoneyBack() {
    return (
        <div className={styles.moneyBack}>
            <H3 classModifier={styles.title}>
                Money-Back Guarantee
            </H3>
            <p className={styles.text}>
                We are confident in the quality of our app – tens of thousands of users around the world have already optimized their photo storage with the Hyper Cleaner app. We are prepared to refund your money if you encountered technical issues that hindered the proper use of the application.
            </p>
        </div>
    )
}