import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import HomeSectionCard from "../card/homeSectionCard/HomeSectionCard"

const CardCarousel = () => {
  const responsive = {
    0: { items: 1.5 },
    524: { items: 2 },
    1024: { items: 5.5 },
  }
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard />
  ))
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5 justify-center">
        <AliceCarousel items={items} responsive={responsive} />
      </div>
    </div>
  )
}

export default CardCarousel
