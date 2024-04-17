import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { mainCarouselData } from "./mainCarouselData"

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img className="cursor-pointer" src={item.image} alt="" />
  ))
  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="slide"
      infinite
      disableButtonsControls
    />
  )
}

export default MainCarousel
