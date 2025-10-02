import styles from './modal.module.scss'
import Image from "next/image";
import H3 from "@/app/_ui/H3";
import {LinkButton} from "@/app/_ui/Button";

const modalList = [
    {
        text: "Total space to free",
        value: '54.5 GB',
    },
    {
        text: "Photos ready for removal",
        value: '238',
    },
    {
        text: "Duplicate photos",
        value: '238',
    },
]

export default function Modal() {
    return (
        <div className={styles.modal}>
            <div className={styles.modalImgWrapper}>
                <Image
                    className={styles.modalCheck}
                    src="/images/progress/modal-check.webp"
                    width={100}
                    height={100}
                    alt=""
                    loading="lazy"
                />
                <Image
                    className={styles.modalImage}
                    src="/images/progress/modal-image.svg"
                    width={135}
                    height={102}
                    alt=""
                    loading="lazy"
                />
            </div>
            <H3 classModifier={styles.title}>
                Scan Completed!
            </H3>
            <ul className={styles.modalList}>
                {
                    modalList.map((item: { text: string, value: string }, index) => (
                        <li key={index} className={styles.modalItem}>
                            <p className={styles.modalText}>{item.text}</p>
                            <div className={styles.modalDotted}></div>
                            <p className={styles.modalValue}>{item.value}</p>
                        </li>
                    ))
                }
            </ul>
            <LinkButton classModifier={styles.button} href={'/email'}>
                Continue
            </LinkButton>
        </div>
    )
}