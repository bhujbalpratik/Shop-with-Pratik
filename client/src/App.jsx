import { Route, Routes } from "react-router-dom"
import CustomerRoutes from "./Routes/Customer.routes"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </div>
  )
}
export default App
