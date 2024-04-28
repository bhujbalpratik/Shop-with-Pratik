import Bag from "./customer/components/Bag/Bag"
import Footer from "./customer/components/Footer/Footer"
import Navigation from "./customer/components/navigation/Navigation"
import Product from "./customer/components/Product/Product"
import ProductDetails from "./customer/components/ProductDetails/ProductDetails"
import Home from "./customer/pages/Home/Home"

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="">
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        <Bag />
      </div>
      <Footer />
    </div>
  )
}
export default App
