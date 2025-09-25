import CenteredContainer from "@/app/_ui/CenteredContainer";
import styles from './header.module.scss'

export default function Header() {
    return (
            <CenteredContainer elementType={'header'} classModifier={styles.header}>
                Header
            </CenteredContainer>
    )
}