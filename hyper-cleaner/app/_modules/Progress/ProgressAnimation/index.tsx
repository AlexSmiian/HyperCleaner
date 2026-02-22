'use client';

import styles from './progressAnimation.module.scss';
import { useEffect, useRef, useState } from 'react';
import cln from 'classnames';
import Image from 'next/image';
import Modal from "@/app/_modules/Progress/Modal";

const DURATION = 6400;

const steps = [
    { text: "Analyzing your gallery", breakpoint: 33 },
    { text: "Identifying duplicates and similar photos", breakpoint: 56 },
    { text: "Connecting to the phone", breakpoint: 80 },
];

export default function ProgressAnimation() {
    const [currentStep, setCurrentStep] = useState(0);
    const [finished, setFinished] = useState(false);
    const fillRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let startTime: number | null = null;
        let rafId: number;

        const animate = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;

            const elapsed = timestamp - startTime;
            const progress = Math.min((elapsed / DURATION) * 100, 100);

            if (fillRef.current) {
                fillRef.current.style.width = `${progress}%`;
            }

            const stepIdx = steps.findIndex((s) => progress < s.breakpoint);
            setCurrentStep(stepIdx === -1 ? steps.length : stepIdx);

            if (progress < 100) {
                rafId = requestAnimationFrame(animate);
            } else {
                setFinished(true);
            }
        };

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <div className={styles.progressAnimation}>
            <ul className={styles.list}>
                {steps.map((step, index) => {
                    const isCurrentlyActive = currentStep === index;
                    const isCompleted = finished || currentStep > index;

                    return (
                        <li key={index} className={cln(styles.item, {[styles.stepItem]: isCompleted})}>
                            {isCompleted ? (
                                <Image src="/images/progress/check.svg" width={24} height={24} alt="" loading="lazy" />
                            ) : (
                                <div className={styles.stepDot}></div>
                            )}
                            <span className={cln(styles.stepText, {[styles.completedText]: isCompleted, [styles.activeText]: isCurrentlyActive})}>
                                {step.text}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.progressBar}>
                <div className={styles.bar}>
                    <div ref={fillRef} className={styles.progressFill} style={{ width: 0 }} />
                </div>
            </div>
            {finished && <Modal />}
        </div>
    );
}
