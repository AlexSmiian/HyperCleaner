"use client"

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

const useSlider = (options?: EmblaOptionsType) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, ...(options || {}) }); // Вимкнено loop
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = (emblaApi: EmblaCarouselType) => {
        const activeIndex = emblaApi.selectedScrollSnap();
        setActiveSlideIndex(activeIndex);
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    };

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on('select', () => onSelect(emblaApi));
        onSelect(emblaApi);
    }, [emblaApi]);

    const scrollTo = (index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return {
        emblaRef,
        activeSlideIndex,
        scrollTo,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
    };
};

export default useSlider;
