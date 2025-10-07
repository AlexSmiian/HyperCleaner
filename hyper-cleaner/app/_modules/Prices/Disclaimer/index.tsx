import Link from "next/link";
import styles from './disclaimer.module.scss'

type DisclaimerProps = {
    selectedItem?: {
        fullNewPrice: string;
        fullOldPrice: string;
        period: string;
    }
}

export default function Disclaimer({ selectedItem }: DisclaimerProps) {
    const introPrice = selectedItem?.fullNewPrice || "$6.99";
    const renewPrice = "$39.99";

    let renewalPrice = renewPrice;
    let subscriptionPeriod = selectedItem?.period
    if (selectedItem?.period === "1 week") {
        renewalPrice = "39.99";
        subscriptionPeriod = "1-week"
    } else if (selectedItem?.period === "1 month") {
        renewalPrice = "$39.99";
        subscriptionPeriod = "1-month"
    } else if (selectedItem?.period === "3 months") {
        renewalPrice = "$59.99";
        subscriptionPeriod = "3-months"
    }

    return (
        <div className={styles.disclaimer}>
            <p>
                You will be automatically charged <span>{introPrice}</span> after the payment confirmation.
                The subscription will then be auto-renewed monthly after a {subscriptionPeriod} intro offer at the full price of <span>{renewalPrice}</span>.
                Payments are charged in USD. To learn more, visit our <Link href={'/'} className={styles.link}>Terms of Use</Link> or contact us via <Link href={'/'} className={styles.link}>support@hypercleaner.app</Link>
            </p>
        </div>
    )
}
