import { Button, Divider } from "@mui/material"
import BagItem from "./BagItem"
import { useNavigate } from "react-router-dom"

const Bag = () => {
  const navigate = useNavigate()
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <BagItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="p-5 shadow-lg">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span className="text-green-600">&#8377;4697</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">&#8377;3419</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span className="text-green-600">&#8377;1278</span>
              </div>
            </div>
            <Button
              onClick={() => navigate("/checkout?step=2")}
              className="w-full"
              variant="contained"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bag
