"use client"

import CenteredContainer from "@/app/_ui/CenteredContainer";
import styles from './prices.module.scss'
import Timer from "@/app/_components/Timer";
import Card from "@/app/_modules/Prices/Card";
import {useEffect, useState} from "react";

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

    // при завантаженні вибираємо "mostPopular"
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
            <h1 className={styles.title}>
                Safe checkout
            </h1>
            <Timer />
            <form action="" className={styles.form}>
                {
                    pricesList.map((item:itemType, index) => (
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
        </CenteredContainer>
    )
}