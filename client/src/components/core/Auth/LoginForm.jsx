import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaUser, FaUserTie, FaUserGraduate } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false)
  const [showDemoCredentials, setShowDemoCredentials] = useState(false)

  const { email, password } = formData;

  // Demo credentials - replace with your actual demo accounts
  const demoCredentials = [
    {
      role: "Student",
      email: "saishghatol@dev.com",
      password: "123123",
      icon: <FaUserGraduate className="text-blue-400" />,
      description: "Access student dashboard and courses"
    },
    {
      role: "Instructor",
      email: "anuj@dev.com", 
      password: "123123",
      icon: <FaUserTie className="text-green-400" />,
      description: "Access instructor dashboard and course management"
    },
  ];

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate))
  }

  const handleDemoLogin = (demoEmail, demoPassword) => {
    setFormData({
      email: demoEmail,
      password: demoPassword
    });
    // Auto-submit after setting demo credentials
    setTimeout(() => {
      dispatch(login(demoEmail, demoPassword, navigate));
    }, 100);
  }

  const fillDemoCredentials = (demoEmail, demoPassword) => {
    setFormData({
      email: demoEmail,
      password: demoPassword
    });
  }

  return (
    <div className="w-full">
      {/* Demo Credentials Section */}
      <div className="mb-6 rounded-lg bg-richblack-800 p-4 border border-richblack-700 mt-7">
        <button
          type="button"
          onClick={() => setShowDemoCredentials(!showDemoCredentials)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-2">
            <span className="text-yellow-50 font-medium">🎯 Try Demo Accounts</span>
            <span className="text-xs bg-yellow-50 text-richblack-900 px-2 py-1 rounded-full">
              No signup needed
            </span>
          </div>
          <span className={`text-richblack-300 transform transition-transform ${showDemoCredentials ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {showDemoCredentials && (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-richblack-300 mb-3">
              Click any demo account to try the platform instantly:
            </p>
            
            {demoCredentials.map((demo, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-richblack-700 rounded-lg hover:bg-richblack-600 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="text-xl">{demo.icon}</div>
                  <div>
                    <p className="text-richblack-5 font-medium">{demo.role}</p>
                    <p className="text-xs text-richblack-300">{demo.description}</p>
                    <p className="text-xs text-richblack-400 mt-1">
                      {demo.email} | {demo.password}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fillDemoCredentials(demo.email, demo.password)}
                    className="px-3 py-1 text-xs bg-richblack-600 text-richblack-100 rounded hover:bg-richblack-500 transition-colors"
                  >
                    Fill Form
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin(demo.email, demo.password)}
                    className="px-3 py-1 text-xs bg-yellow-50 text-richblack-900 rounded hover:bg-yellow-25 transition-colors font-medium"
                  >
                    Quick Login
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Regular Login Form */}
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-none"
          />
        </label>

        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
              Forgot Password
            </p>
          </Link>
        </label>

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900 hover:bg-yellow-25 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm