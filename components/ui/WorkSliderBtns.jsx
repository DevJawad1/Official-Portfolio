"use client";

import { useSwiper } from "swiper/react";

import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
const WorkSliderBtns = ({swiperRef, contaninerStyles, btnStyles, iconStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={contaninerStyles}>
        <button className={btnStyles}>
            <PiCaretLeftBold className={iconStyles} onClick={()=>swiperRef.current?.slidePrev()} />
        </button>
        <button className={btnStyles}>
            <PiCaretRightBold className={iconStyles} onClick={()=>swiperRef.current?.slideNext()} />
        </button>
    </div>
  )
}

export default WorkSliderBtns