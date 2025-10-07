import Container from "@/app/_ui/Container";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Legal/Footer";
import {ReactNode} from "react";
import styles from './index.module.scss'

export default function LegalPage({children}: {children:ReactNode}) {
    return (
        <Container elementType={'main'} classModifier={styles.mainPage}>
            <Header isMenu={false} />
                {children}
            <Footer />
        </Container>
    )
}