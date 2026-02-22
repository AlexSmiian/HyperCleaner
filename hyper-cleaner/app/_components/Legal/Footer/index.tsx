import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                © 2024 All Rights Reserved.
            </p>
        </footer>
    )
}