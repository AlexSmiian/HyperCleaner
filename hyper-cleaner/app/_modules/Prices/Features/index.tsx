import styles from './features.module.scss'
import H3 from "@/app/_ui/H3";
import Image from 'next/image';

type ContentType = {
    text: string;
}

export default function Features({content}:{ content: readonly ContentType[]}) {
    return (
        <div className={styles.features}>
            <H3 classModifier={styles.title}>
                What you get
            </H3>
            <ul className={styles.list}>
                {
                    content.map((item,index) =>(
                        <li className={styles.item} key={index}>
                            <Image src={'/images/prices/features-check.svg'} width={16} height={16} alt={''} loading={'lazy'}/>
                            <span className={styles.itemText}>
                                {item.text}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}