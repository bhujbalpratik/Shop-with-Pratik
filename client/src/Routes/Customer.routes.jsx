import { Routes, Route } from "react-router-dom"
import Home from "../customer/pages/Home/Home"
import Footer from "../customer/components/Footer/Footer"
import Bag from "../customer/components/Bag/Bag"
import Product from "../customer/components/Product/Product"
import Navigation from "../customer/components/navigation/Navigation"
import ProductDetails from "../customer/components/ProductDetails/ProductDetails"
import Checkout from "../customer/components/checkout/Checkout"
import Order from "../customer/components/Order/Order"
import OrderDetails from "../customer/components/Order/OrderDetails"
const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default CustomerRoutes
