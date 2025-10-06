'use client';

import styles from './timer.module.scss';
import Image from 'next/image';
import cln from 'classnames';
import { useEffect, useState } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    let endTime = sessionStorage.getItem('timerEnd');

    if (!endTime) {
      endTime = String(Date.now() + 10 * 60 * 1000);
      sessionStorage.setItem('timerEnd', endTime);
    }

    const interval = setInterval(() => {
      const diff = Math.floor((+endTime! - Date.now()) / 1000);
      if (diff <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <>
      <div className={cln(styles.timer)}>
        <Image className={styles.image} src={'/images/prices/timer-img.webp'} width={214} height={90} alt={''} />
        <span className={styles.timerText}>
         Personal offer expires in
        </span>
        <div className={styles.timerDate}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    </>
  );
}
