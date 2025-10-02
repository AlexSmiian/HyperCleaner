import styles from './progress.module.scss'
import Image from 'next/image';
import ProgressAnimation from './ProgressAnimation';
import cln from 'classnames';
import CenteredContainer from "@/app/_ui/CenteredContainer";

export default async function ProgressPage({searchParams}:{
  searchParams: { username?: string },
}) {
  const userName = searchParams?.username ?? '';

  return (
      <CenteredContainer elementType="section" classModifier={styles.progressContainer}>
          <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={styles.video}
              poster="/images/progress/poster.webp"
          >
              <source src="/images/progress/video.mp4" type="video/mp4"/>
          </video>
          <p className={cln(styles.userAccount)}>
              {userName}
          </p>
          <ProgressAnimation/>
      </CenteredContainer>
  )
}

