import Footer from "./customer/components/Footer/Footer"
import Navigation from "./customer/components/navigation/Navigation"
import Product from "./customer/components/Product/Product"
import Home from "./customer/pages/Home/Home"

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="">
        {/* <Home /> */}
        <Product />
      </div>
      <Footer />
    </div>
  )
}
export default App
