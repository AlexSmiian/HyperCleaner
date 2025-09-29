import styles from './footer.module.scss'
import Lavr from "@/app/_components/Home/_components/Lavr";
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Lavr classModifier={styles.footerLavr}/>
                <div className={styles.footerContent}>
                    <div className={styles.footerAppStore}>
                        <Image src={'/images/home/footer/apple.svg'} width={24} height={24} alt={'App Store'} loading={'lazy'}/>
                        <span>App Store</span>
                    </div>
                    <div className={styles.footerMain}>
                        <span>4.6</span>
                        <Image src={'/images/home/footer/stars.webp'} width={116} height={20} alt={'Stars'} loading={'lazy'}/>
                    </div>
                    <p className={styles.text}>
                        36.9K Ratings
                    </p>
                </div>
            </div>
        </footer>
    )
}