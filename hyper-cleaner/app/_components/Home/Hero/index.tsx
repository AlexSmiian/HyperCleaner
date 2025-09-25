import Image from "next/image";
import styles from './hero.module.scss'
import {Button} from "@/app/_ui/Button";

const list = [
    {
        imgSrc: "/images/home/hero/secure.svg",
        text: "100% Private & Secure"
    },
    {
        imgSrc: "/images/home/hero/lock.svg",
        text: "Advanced Encryption for Photo Safety"
    }
]


export default function Hero() {
    return (
            <div className={styles.hero}>
                <div className={styles.lavr}>
                    <Image className={styles.lavrImgLeft} src={'/images/home/hero/cleaned-over-left.svg'} width={33} height={64} alt={''} />
                    <div className={styles.lavrContent}>
                        <p className={styles.lavrTitle}>
                            Cleaned over
                        </p>
                        <p className={styles.lavrText}>
                            50+ Million Photos
                        </p>
                    </div>
                    <Image className={styles.lavrImgRight} src={'/images/home/hero/cleaned-over-left.svg'} width={33} height={64} alt={''} />
                </div>
                <div className={styles.heroImgWrapper}>
                    <Image className={styles.heroImgphone} src={"/images/home/hero/hero-phone.webp"} width={430} height={603} alt={''} />
                    <Image className={styles.heroImgcat} src={"/images/home/hero/hero-cat.webp"} width={325} height={303} alt={''} />
                    <p className={styles.title}>Clean up your camera roll & enjoy the memories with Hyper Cleaner!</p>
                    <p className={styles.heroText}>Who Said Cleaning Can’t Be Fun?</p>
                    <Button classModifier={styles.button}>
                        Try Hyper Cleaner Now
                    </Button>
                </div>
                <ul className={styles.advantages}>
                    {
                        list.map((item, index) => (
                            <li className={styles.advantagesItem} key={index}>
                                <Image src={item.imgSrc} alt={item.text} width={24} height={24} />
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
    )
}