import React, { useState } from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import HomeSectionCard from "../card/homeSectionCard/HomeSectionCard"
import { Button } from "@mui/material"
import { KeyboardArrowLeft, Sync } from "@mui/icons-material"

const CardCarousel = ({ data }) => {
  const [mainIndex, setMainIndex] = useState(0)
  const [mainAnimation, setMainAnimation] = useState(false)
  const [thumbIndex, setThumbIndex] = useState(0)
  const [thumbAnimation, setThumbAnimation] = useState(false)

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />)
  const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
      <div
        className="thumb"
        onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
      >
        {item}
      </div>
    ))
  }
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  )

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true)
  }

  const syncMainAfterChange = (e) => {
    setMainAnimation(false)

    if (e.type === "action") {
      setThumbIndex(e.item)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex)
    }
  }

  const syncThumbs = (e) => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }
  const responsive = {
    0: { items: 1 },
    524: { items: 2 },
    1024: { items: 5.5 },
  }

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          activeIndex={mainIndex}
          animationType="slide"
          animationDuration={800}
          disableDotsControls
          mouseTracking={!thumbAnimation}
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
          touchTracking={!thumbAnimation}
        />
        {/* {mainIndex !== items.length - 5 && (
          <Button
            variant="contained"
            onClick={slideNext}
            className="z-50 btn-next"
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
        {mainIndex !== 0 && (
          <Button
            variant="contained"
            onClick={slidePrev}
            className="z-50 btn-prev"
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
        )} */}
      </div>
    </div>
  )
}

export default CardCarousel
