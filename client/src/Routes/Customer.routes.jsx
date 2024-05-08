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
import Signup from "../customer/pages/Signup/Signup"
import Login from "../customer/pages/Login/Login"
import { Toaster } from "react-hot-toast"
import Profile from "../customer/pages/Profile/Profile"
import PrivateRoute from "./PrivateRoute"
const CustomerRoutes = () => {
  return (
    <div>
      <Toaster />
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
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
