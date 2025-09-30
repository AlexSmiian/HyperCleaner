"use client"

import styles from './ourUsers.module.scss'
import H3 from "@/app/_ui/H3";
import useSlider from "@/app/_hooks/useSlider";
import Card from "@/app/_components/Home/OurUsers/Card";

type SliderType = {
    commasImg: string;
    text: string;
    name: string;
    userImg: string;
    date: string;
};

const sliderContent: SliderType[] = [
    {
        commasImg: "/images/home/our-users/commas-1.svg",
        text: "Such a great find! I downloaded this app to free up space because I had way too many photos. It turned out to be a super fun and easy way to clean up my phone and get rid of all the pics I don’t need!",
        name: "asawvr",
        userImg: "/images/home/our-users/item-1.webp",
        date: "09/02/2024"
    },
    {
        commasImg: "/images/home/our-users/commas-2.svg",
        text: "Honestly, this app made cleaning up my photos so easy and kinda fun! I sorted through over 5,000 pics in no time, and the swipe feature is a game-changer. Plus, it saves your progress if you leave. Super handy!",
        name: "awesome_Alisha",
        userImg: "/images/home/our-users/item-2.webp",
        date: "08/12/2023"
    },
    {
        commasImg: "/images/home/our-users/commas-3.svg",
        text: "I’m usually terrible at organizing my photos, but this app made it super simple. It’s really easy to use, and the swipe feature makes decisions quick. Tons of cool features too. Highly recommend!",
        name: "Edwardddddd91",
        userImg: "/images/home/our-users/item-3.webp",
        date: "01/07/2024"
    },
]

export default function OurUsers() {

    const slider = useSlider({
        slidesToScroll: 1,
        loop: false,
        containScroll: 'trimSnaps',
        align: 'center',
        startIndex: 1,
    });

    const {emblaRef, activeSlideIndex, scrollTo} = slider;

    return (
        <section className={styles.ourUsers}>
            <div className={styles.container}>
                <H3 classModifier={styles.title}>
                    Our users love us
                </H3>
                <div className={styles.slider}>
                    <div className={styles.sliderViewport} ref={emblaRef}>
                        <div className={styles.sliderContainer}>
                            {sliderContent.map((item, index) => (
                                <Card
                                    key={item.name + index}
                                    index={index}
                                    commasImg={item.commasImg}
                                    text={item.text}
                                    userImg={item.userImg}
                                    name={item.name}
                                    date={item.date}
                                    activeSlideIndex={activeSlideIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.dots}>
                        {sliderContent.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => slider.scrollTo(index)}
                                className={`${styles.dot} ${activeSlideIndex === index ? styles.activeDot : ''}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}