import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null,
  loading: false,
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
      localStorage.setItem("currentUser", JSON.stringify(action.payload))
      const expirationTime = new Date().getTime() + 12 * 24 * 60 * 60 * 1000
      localStorage.setItem("expirationTime", expirationTime)
      state.loading = false
    },
    loginFailure: (state) => {
      state.loading = false
    },
    logout: (state) => {
      state.currentUser = null
      localStorage.clear()
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions
export default userSlice.reducer
