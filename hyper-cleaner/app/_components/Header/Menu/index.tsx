"use client"

import styles from './menu.module.scss'
import Link from "next/link";
import Image from 'next/image';

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {

    return (
        <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <button className={styles.btnClose} onClick={onClose}>
                <Image src={'/images/btn-close.svg'} alt={'Close'} width={16} height={16} />
            </button>
            <div className={styles.linksWrapper}>
                <Link href={'/terms'} className={styles.link}>
                    Terms of Use
                </Link>
                <Link href={'/privacy'} className={styles.link}>
                    Privacy Policy
                </Link>
            </div>

        </nav>
    )
}
