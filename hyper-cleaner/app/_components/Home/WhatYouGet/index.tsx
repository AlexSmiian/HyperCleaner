import styles from './whatYouGet.module.scss'
import H3 from "@/app/_ui/H3";
import Image from 'next/image'

const list = [
    {
        imgSrc: "/images/home/what-you-get/item-1.webp",
        text: "Fun Swipe-to-Clean Interface"
    },
    {
        imgSrc: "/images/home/what-you-get/item-2.webp",
        text: "Smart Cleanup Suggestions"
    },
    {
        imgSrc: "/images/home/what-you-get/item-3.webp",
        text: "One-Tap Cleanup"
    },
    {
        imgSrc: "/images/home/what-you-get/item-4.webp",
        text: "Duplicate Photo Detection"
    },
    {
        imgSrc: "/images/home/what-you-get/item-5.webp",
        text: "Secret Folder"
    },
    {
        imgSrc: "/images/home/what-you-get/item-6.webp",
        text: "Widgets"
    },
    {
        imgSrc: "/images/home/what-you-get/item-7.webp",
        text: "Ad Blocker"
    },
    {
        imgSrc: "/images/home/what-you-get/item-8.webp",
        text: "Charger Animation"
    },
]

export default function WhatYouGet() {
    return (
        <section className={styles.whatYouGet}>
            <div className={styles.container}>
                <H3 classModifier={styles.title}>
                    What you get
                </H3>
                <ul className={styles.list}>
                    {
                        list.map((item:{imgSrc: string, text: string},index) => (
                            <li className={styles.listItem} key={index}>
                                <Image className={styles.itemImg} src={item.imgSrc} alt={item.text} width={140} height={90} loading={'lazy'} />
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </section>
    )
}