import styles from './aboutUs.module.scss'
import H3 from "@/app/_ui/H3";
import Image from 'next/image'

const list = [
    {
        imgSrc: '/images/home/about-us/item-1.webp',
        width: 50,
        height: 50,
    },
    {
        imgSrc: '/images/home/about-us/item-2.webp',
        width: 68,
        height: 50,
    },
    {
        imgSrc: '/images/home/about-us/item-3.webp',
        width: 75,
        height: 50,
    },
]

export default function AboutUs() {
    return (
            <section className={styles.aboutUs}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <H3 classModifier={styles.title}>
                            They write about us
                        </H3>
                        <ul className={styles.list}>
                            {
                                list.map((item:{imgSrc: string, width: number, height: number}, index) => (
                                    <li className={styles.listItem} key={index}>
                                        <Image className={styles.itemImg} src={item.imgSrc} alt={''} width={item.width} height={item.height} loading={'lazy'} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </section>
    )
}