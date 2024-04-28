import { Divider } from "@mui/material"
import BagItem from "./BagItem"

const Bag = () => {
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          <BagItem />
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Bag
