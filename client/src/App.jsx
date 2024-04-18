import Navigation from "./customer/components/navigation/Navigation"
import Home from "./customer/pages/Home/Home"

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="">
        <Home />
      </div>
    </div>
  )
}
export default App
