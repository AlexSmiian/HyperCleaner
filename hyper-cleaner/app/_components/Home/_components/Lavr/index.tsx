import styles from "./lavr.module.scss";
import Image from "next/image";
import cln from "classnames";

export default function Lavr({classModifier} :{classModifier?: string}) {
    return (
        <div className={cln(styles.lavr,classModifier)}>
            <Image className={styles.lavrImgLeft} src={'/images/home/hero/cleaned-over-left.svg'} width={33}
                   height={64} alt={''}/>
            <div className={styles.lavrContent}>
                <p className={styles.lavrTitle}>
                    Cleaned over
                </p>
                <p className={styles.lavrText}>
                    50+ Million Photos
                </p>
            </div>
            <Image className={styles.lavrImgRight} src={'/images/home/hero/cleaned-over-left.svg'}
                   width={33} height={64} alt={''}/>
        </div>
    )
}