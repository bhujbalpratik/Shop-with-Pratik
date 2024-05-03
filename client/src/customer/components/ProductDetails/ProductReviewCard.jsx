import { Avatar, Box, Grid, Rating } from "@mui/material"

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container className="space-x-1">
        <div className="flex space-x-10">
          <Grid item xs={2}>
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
              >
                P
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-lg">Pratik</p>
                <p className="opacity-70">April 5 ,2024</p>
              </div>
            </div>
            <Rating value={4.5} name={"Half-Rating"} readOnly precision={0.5} />
            <p>Nice Product i love this shirt</p>
          </Grid>
        </div>
      </Grid>
    </div>
  )
}
export default ProductReviewCard
