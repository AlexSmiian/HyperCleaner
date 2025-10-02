'use client';

import styles from './progressAnimation.module.scss';
import { useEffect, useState } from 'react';
import cln from 'classnames';
import Image from 'next/image';
import Modal from "@/app/_modules/Progress/Modal";

const list = [
    { text: "Analyzing your gallery" },
    { text: "Identifying duplicates and similar photos" },
    { text: "Connecting to the phone" },
    { text: "Finalizing process" },
];

export default function ProgressAnimation() {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [finished, setFinished] = useState(false);

    const steps = [
        { text: list[0].text, breakpoint: 33 },
        { text: list[1].text, breakpoint: 66 },
        { text: list[2].text, breakpoint: 90 },
    ];

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + 100 / (16 * 60);
                if (newProgress >= 100) {
                    clearInterval(progressInterval);
                    setFinished(true);
                    return 100;
                }
                return newProgress;
            });
        }, 6.67);

        return () => {
            clearInterval(progressInterval);
        };
    }, []);

    useEffect(() => {
        const stepIndex = steps.findIndex((s) => progress < s.breakpoint);
        setCurrentStep(stepIndex === -1 ? steps.length - 1 : stepIndex);
    }, [progress, steps]);

    return (
        <div className={styles.progressAnimation}>
            <ul className={styles.list}>
                {steps.map((step, index) => {
                    const isCurrentlyActive = currentStep === index;
                    const isCompleted = progress >= step.breakpoint;

                    return (
                        <li key={index} className={cln(styles.item, {[styles.stepItem]: isCompleted})}>
                            {isCompleted ? (
                                <Image src="/images/progress/check.svg" width={24} height={24} alt="" loading="lazy"
                                />
                            ) : (
                                <div className={styles.stepDot}></div>
                            )}
                            <span className={cln(styles.stepText, {[styles.completedText]: isCompleted, [styles.activeText]: isCurrentlyActive,})}>
                                {step.text}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.progressBar}>
                <div className={styles.bar}>
                    <div className={styles.progressFill} style={{width: `${progress}%`}}/>
                </div>
            </div>
            { finished &&
                <Modal />
            }
        </div>
    );
}
