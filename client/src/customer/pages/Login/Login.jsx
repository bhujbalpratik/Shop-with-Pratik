import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../app/user/userSlice"

export default function Login() {
  const { loading } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formaData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formaData, [e.target.name]: e.target.value })
  }
  console.log(formaData)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(loginStart())
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formaData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(loginFailure())
        toast.error(data.message, {
          duration: 3000,
          style: { borderRadius: "10px", background: "#fff", color: "#333" },
        })
        return
      }
      dispatch(loginSuccess(data))
      if (data) {
        toast.success(`Welcome ,${data.name}`, {
          duration: 3000,
          style: { borderRadius: "10px", background: "#fff", color: "#333" },
        })
      }
      navigate("/")
      console.log(data)
    } catch (error) {
      dispatch(loginFailure())
      toast.error(error.message, {
        duration: 3000,
        style: { borderRadius: "10px", background: "#fff", color: "#333" },
      })
      console.log(error)
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-3 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto lg:h-20"
            src="LogoE-commerce.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            LOGIN
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  placeholder="Email address"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset "
                />
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase disabled:bg-indigo-400"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
