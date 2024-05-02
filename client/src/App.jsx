import Bag from "./customer/components/Bag/Bag"
import Checkout from "./customer/components/checkout/Checkout"
import Footer from "./customer/components/Footer/Footer"
import Navigation from "./customer/components/navigation/Navigation"
import Order from "./customer/components/Order/Order"
import OrderDetails from "./customer/components/Order/OrderDetails"
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
        {/* <Bag /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        <OrderDetails />
      </div>
      <Footer />
    </div>
  )
}
export default App
