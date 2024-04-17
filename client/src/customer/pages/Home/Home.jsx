import CardCarousel from "../../components/carousel/CardCarousel"
import MainCarousel from "../../components/carousel/MainCarousel"

const Home = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 flex flex-col py-20 p-5 lg:px-10">
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
        <CardCarousel />
      </div>
    </div>
  )
}
export default Home
