import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null,
  loading: false,
  error: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload
      localStorage.setItem("userInfo", JSON.stringify(action.payload))
      const expirationTime = new Date().getTime() + 12 * 24 * 60 * 60 * 1000
      localStorage.setItem("expirationTime", expirationTime)
      state.loading = false
      state.error = false
    },
    loginFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
