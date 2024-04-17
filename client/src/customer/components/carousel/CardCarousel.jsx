import React, { useState } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import HomeSectionCard from "../card/homeSectionCard/HomeSectionCard"
import { Button } from "@mui/material"
import { KeyboardArrowLeft } from "@mui/icons-material"
import { mens_kurta } from "../../../Data/mens_kurta"

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const responsive = {
    0: { items: 1.5 },
    524: { items: 2 },
    1024: { items: 5.5 },
  }

  const slidePrev = () => setActiveIndex(activeIndex - 1)
  const slideNext = () => setActiveIndex(activeIndex + 1)

  const syncActiveIndex = ({ item }) => setActiveIndex(item)
  const items = mens_kurta
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />)
  return (
    <div className="border">
      <div className="relative p-5 justify-center">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              color: "black",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeft sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
              color: "black",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeft sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  )
}

export default CardCarousel
