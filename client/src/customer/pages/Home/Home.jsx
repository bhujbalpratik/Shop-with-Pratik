import CardCarousel from "../../components/carousel/CardCarousel"
import MainCarousel from "../../components/carousel/MainCarousel"
import { mens_kurta } from "../../../Data/mens_kurta"
const Home = () => {
  return (
    <div className="z-0">
      <MainCarousel />
      <div className="space-y-10 flex flex-col py-20 p-5 lg:px-10">
        <CardCarousel data={mens_kurta} />
        <CardCarousel data={mens_kurta} />
        <CardCarousel data={mens_kurta} />
        <CardCarousel data={mens_kurta} />
        <CardCarousel data={mens_kurta} />
      </div>
    </div>
  )
}
export default Home
