import Image from 'next/image';
import styles from './card.module.scss'

type PropsType = {
    index: number;
    commasImg: string;
    text: string;
    userImg: string;
    name: string;
    date: string
    activeSlideIndex: number;
}

export default function Card({index,commasImg,text,userImg,name,date,activeSlideIndex}: PropsType) {
    let cardClass = styles.slide;

    if (index === activeSlideIndex) {
        cardClass += ` ${styles.active}`;
    } else if (index === activeSlideIndex - 1) {
        cardClass += ` ${styles.prev}`;
    } else if (index === activeSlideIndex + 1) {
        cardClass += ` ${styles.next}`;
    }

    return (
        <div className={cardClass}>
            <Image src={commasImg} alt="commas" width={20} height={20} loading={'lazy'} className={styles.commas}/>
            <p className={styles.text}>{text}</p>
            <div className={styles.user}>
                <Image src={userImg} alt={name} className={styles.userImg} width={40} height={32} loading={'lazy'}/>
                <div className={styles.userInfo}>
                    <span className={styles.name}>{name}</span>
                    <p className={styles.date}>
                        <Image src="/images/home/our-users/planet.svg" alt="calendar" width={11} height={11} loading={'lazy'}/>
                        <span>{date}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}