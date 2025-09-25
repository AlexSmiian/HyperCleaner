import CenteredContainer from "@/app/_ui/CenteredContainer";
import styles from './footer.module.scss'


export default function Footer() {
    return (
        <CenteredContainer elementType={'footer'} classModifier={styles.footer}>
            Footer
        </CenteredContainer>
    )
}