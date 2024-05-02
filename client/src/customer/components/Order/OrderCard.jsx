import { Grid } from "@mui/material"
import AdjustIcon from "@mui/icons-material/Adjust"
const OrderCard = () => {
  return (
    <div className="p-5 shadow-md hover:shadow-2xl">
      <Grid container spacing={2} justifyContent={"space-between"}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/i/l/0/-original-imagzhdnczq6gfrg.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>Men Slim Mid Rise Black Jeans </p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>&#8377; 1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ height: "15px", width: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs opacity-50">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Delivered On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
export default OrderCard
