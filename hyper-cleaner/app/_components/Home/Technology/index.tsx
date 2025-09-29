"use client"

import styles from './technology.module.scss'
import H3 from "@/app/_ui/H3";
import Image from "next/image";
import {Button} from "@/app/_ui/Button";

const list = [
    {
        imgSrc: "/images/home/technology/item-1.webp",
        text: "AI-Powered Photo Recognition"
    },
    {
        imgSrc: "/images/home/technology/item-2.webp",
        text: "Smart Algorithms for Optimal Space Saving"
    },
    {
        imgSrc: "/images/home/technology/item-3.webp",
        text: "Secure Photo Management"
    },
]

export default function Technology() {

    const handleClick = () =>{

    }

    return (
        <section className={styles.technology}>
            <div className={styles.container}>
                <H3 classModifier={styles.title}>
                    Technology
                </H3>
                <ul className={styles.list}>
                    {
                        list.map((item:{imgSrc: string, text: string},index) => (
                            <li className={styles.listItem} key={index}>
                                <Image className={styles.itemImg} src={item.imgSrc} alt={item.text} width={40} height={40} loading={'lazy'} />
                                <span>{item.text}</span>
                            </li>
                            )
                        )}
                </ul>
                <Button classModifier={styles.button} type={'button'} onClick={handleClick}>
                    Try Hyper Cleaner Now
                </Button>
            </div>
        </section>
    )
}