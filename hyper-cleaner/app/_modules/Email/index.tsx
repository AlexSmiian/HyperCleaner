import styles from './email.module.scss';
import Image from 'next/image';
import EmailForm from './EmailForm';
import CenteredContainer from "@/app/_ui/CenteredContainer";

const list =[
    {
        text: "100% Private & Secure",
        imgScr: "/images/email/guard.svg"
    },
    {
        text: "Advanced Encryption for Photo Safety",
        imgScr: "/images/email/lock.svg"
    },
]

export default function EmailPage({ searchParams }: {
    searchParams: object | string,
}) {

    return (
        <CenteredContainer elementType="section"
                   classModifier={styles.email}>
            <div className={styles.container}>
                <div className={styles.peopleStardet}>
                    <Image src={'/images/w2a/email/stars.svg'}
                           width={29}
                           height={29}
                           alt=""/>
                    <p className={styles.peopleStardetText}>
                        5+ million users have trusted us
                    </p>
                </div>
                <h1 className={styles.title}>
                    Enter your email to start freeing up space!
                </h1>
                <p className={styles.subTitle}>
                    We’ll create an account for you to manage
                    <br/>
                    your cleanup process
                </p>
                <EmailForm />
                <ul className={styles.list}>
                    {
                        list.map((item:{text:string;imgScr:string}, index) => (
                            <li key={index}
                                className={styles.item}>
                                <Image src={item.imgScr}
                                       width={18}
                                       height={18}
                                       alt=""
                                       loading={'lazy'}/>
                                <span className={styles.itemText}>
                {item.text}
              </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </CenteredContainer>
    );
}

