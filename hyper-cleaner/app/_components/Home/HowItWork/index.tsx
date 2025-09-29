"use client"

import styles from './howItWork.module.scss'
import H3 from "@/app/_ui/H3";

const list = [
    {
        number: 1,
        title: "Simply open Hyper Cleaner",
        text: "Grant access to your photo gallery – rest assured, you retain full control over which photos to choose, and your privacy is fully protected"
    },
    {
        number: 2,
        title: "Review suggestions",
        text: "The app will provide smart suggestions on what to delete. You can swipe through them to decide which ones to keep or remove"
    },
    {
        number: 3,
        title: "Clean up your gallery",
        text: "With one tap, delete all selected photos, free up storage, and enjoy a more organized photo library"
    },
]

export default function HowItWork() {
    return (
        <section className={styles.howItWork}>
            <div className={styles.container}>
                <H3 classModifier={styles.title}>
                    How it works: easy and fun
                </H3>
                <ul className={styles.list}>
                    {
                        list.map((item:{number: number, title: string, text: string},index) => (
                            <li className={styles.listItem} key={index}>
                                <div className={styles.itemNumber}>{item.number}</div>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemTitle}>
                                        {item.title}
                                    </span>
                                    <span className={styles.itemText}>
                                        {item.text}
                                    </span>
                                </div>
                            </li>
                        )
                        )}
                </ul>
            </div>
        </section>
    )
}