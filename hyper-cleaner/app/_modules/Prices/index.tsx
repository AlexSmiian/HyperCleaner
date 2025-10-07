"use client"

import CenteredContainer from "@/app/_ui/CenteredContainer";
import styles from './prices.module.scss'
import Timer from "@/app/_components/Timer";
import Card from "@/app/_modules/Prices/Card";
import {useEffect, useState} from "react";
import Features from "@/app/_modules/Prices/Features";
import Image from 'next/image';
import MoneyBack from "@/app/_modules/Prices/MoneyBack";
import Disclaimer from "@/app/_modules/Prices/Disclaimer";

const pricesList = [
    {
        mostPopular: "🔥  most popular",
        period: "1 week",
        fullOldPrice: "$13.98",
        fullNewPrice: "$6.99",
        oneDayOldPrice: "$1.98",
        oneDayNewPrice: "99",
        perDay: "per day",
        itemCode: "hype_clin_7",
    },
    {
        period: "1 month",
        fullOldPrice: "$39.99",
        fullNewPrice: "$19.99",
        oneDayOldPrice: "$1.32",
        oneDayNewPrice: "66",
        perDay: "per day",
        itemCode: "hype_clin_28",
    },
    {
        period: "3 months",
        fullOldPrice: "$59.99",
        fullNewPrice: "$29.99",
        oneDayOldPrice: "$0.68",
        oneDayNewPrice: "33",
        perDay: "per day",
        itemCode: "hype_clin_84",
    },
]
const featuresContent = [
    {
        text: "Fun swipe-to-clean interface",
    },
    {
        text: "Smart photo suggestions",
    },
    {
        text: "Free up storage in minutes",
    },
    {
        text: "Compress videos",
    },
    {
        text: "Secret Folder",
    },
    {
        text: "Charge animations",
    },
    {
        text: "Widgets",
    },
    {
        text: "Ad blocker",
    },
]

type itemType = {
    mostPopular?: string;
    period: string;
    fullOldPrice: string;
    fullNewPrice: string;
    oneDayNewPrice: string;
    oneDayOldPrice: string;
    perDay: string;
    itemCode: string;
}

export default function Prices({searchParams} : {searchParams: object}) {
    const [selectedCode, setSelectedCode] = useState<string>("");

    const selectedItem = pricesList.find(item => item.itemCode === selectedCode);

    useEffect(() => {
        const popularItem = pricesList.find(item => item.mostPopular);
        if (popularItem) {
            setSelectedCode(popularItem.itemCode);
            document.cookie = `selectedPlan=${popularItem.itemCode}; path=/; max-age=31536000`;
        }
    }, []);

    const handleSelect = (code: string) => {
        setSelectedCode(code);
        document.cookie = `selectedPlan=${code}; path=/; max-age=31536000`;
    };

    return (
        <CenteredContainer elementType="section" classModifier={styles.prices}>
            <div className={styles.pricesContainer}>
                <h1 className={styles.title}>
                    Safe checkout
                </h1>
                <Timer/>
                <form action="" className={styles.form}>
                    {
                        pricesList.map((item: itemType, index) => (
                            <Card
                                mostPopular={item.mostPopular}
                                period={item.period}
                                fullOldPrice={item.fullOldPrice}
                                fullNewPrice={item.fullNewPrice}
                                oneDayNewPrice={item.oneDayNewPrice}
                                oneDayOldPrice={item.oneDayOldPrice}
                                perDay={item.perDay}
                                key={index}
                                itemCode={item.itemCode}
                                isSelected={selectedCode === item.itemCode}
                                onSelect={() => handleSelect(item.itemCode)}
                            />
                        ))
                    }
                </form>
                <Features content={featuresContent}/>
                <Image className={styles.provider} src={'/images/prices/provider.webp'} width={236} height={30} alt={''} loading={'lazy'} />
                <p className={styles.money}>
                    Money-Back Guarantee
                </p>
                <div>PAYMENT</div> 
                <MoneyBack />
                <Disclaimer selectedItem={selectedItem} />
            </div>
        </CenteredContainer>
    )
}