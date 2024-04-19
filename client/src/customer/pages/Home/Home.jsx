import CardCarousel from "../../components/carousel/CardCarousel"
import MainCarousel from "../../components/carousel/MainCarousel"
import { mens_kurta } from "../../../Data/mens_kurta"
const Home = () => {
  return (
    <div className="">
      <MainCarousel />
      <div className="space-y-10 flex flex-col py-20 px-5 lg:px-10">
        <CardCarousel data={mens_kurta} sectionName={`Men's Kurta`} />
        <CardCarousel data={mens_kurta} sectionName={`Men's Shoes`} />
        <CardCarousel data={mens_kurta} sectionName={`Men's Shirt`} />
        <CardCarousel data={mens_kurta} sectionName={`Women's Saree`} />
        <CardCarousel data={mens_kurta} sectionName={`Women's Dress`} />
      </div>
    </div>
  )
}
export default Home
