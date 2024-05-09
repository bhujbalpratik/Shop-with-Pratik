import { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Divider, Grid, TextField } from "@mui/material"

export default function Profile() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  console.log(formData)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-1 py-8 lg:px-40">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto lg:h-20"
            src="LogoE-commerce.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Profile
          </h2>
        </div>
        <Grid container className="mt-5">
          <Grid item lg={4}></Grid>
          <Grid item xs={12} lg={4}>
            <Box className="rounded-md  p-5">
              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      name="name"
                      label="Account Holder"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      aria-readonly
                      id="address"
                      name="address"
                      label="Address"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} className="flex justify-between">
                    <Button
                      sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145 85 253)" }}
                      size="large"
                      variant="contained"
                      type="button"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      sx={{ py: 1.5, mt: 2, bgcolor: "rgb(255 10 0)" }}
                      size="large"
                      variant="contained"
                      type="button"
                    >
                      Delete Profile
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
          <Grid item lg={4}></Grid>
        </Grid>
      </div>
    </>
  )
}
