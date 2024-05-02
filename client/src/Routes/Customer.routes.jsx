import { Routes, Route } from "react-router-dom"
import Home from "../customer/pages/Home/Home"
const CustomerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
export default CustomerRoutes
