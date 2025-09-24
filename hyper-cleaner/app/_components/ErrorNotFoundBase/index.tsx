"use client"

import cln from 'classnames';
import Image from "next/image"
import Container from "../../_ui/Container"
import { LinkButton } from "../../_ui/Button";
import styles from './notFound.module.scss';

export default function ErrorNotFoundBase({ title, text, button }: { title: string, text: string, button: string }) {


    return (
        <Container classModifier={cln(styles.paddingForBlock, styles.errorsPage)}>
            <section className={styles.errors}>
                <div className={styles.block}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <p className={styles.text}>
                        {text}
                    </p>
                    <LinkButton href="/" classModifier={styles.button}>
                        {button}
                    </LinkButton>
                </div>
                <Image className={styles.img}
                    src="/images/world.webp"
                    alt="error-img"
                    width="282"
                    height="182"
                    loading="lazy"
                />
            </section>
        </Container>
    )
}
