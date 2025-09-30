"use client"

import CenteredContainer from "@/app/_ui/CenteredContainer";
import styles from './header.module.scss'
import Image from 'next/image';
import Menu from "@/app/_components/Header/Menu";
import {useState} from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    return (
            <CenteredContainer elementType={'header'} classModifier={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logoWrapper}>
                        <Image src={'/images/logo.webp'} className={styles.logoImg} alt={'Hyper Cleaner'} width={36} height={36} />
                        <span className={styles.logoText}>
                            Hyper Cleaner
                        </span>
                    </div>
                    <button className={styles.burgerButton} onClick={toggleMenu}>
                    </button>
                    <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                </div>
            </CenteredContainer>
    )
}