import { useEffect, useState } from "react"
import { RiEditBoxLine, RiUser3Line, RiMailLine, RiPhoneLine, RiCalendarLine, RiVipCrownLine, RiGenderlessLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconBtn"
import Img from './../../common/Img';

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading and scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoading(false), 300);
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header with gradient background */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1">
        <div className="bg-richblack-900 rounded-3xl p-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-boogaloo text-center mb-2">
            My Profile
          </h1>
          <p className="text-richblack-300 text-center text-lg">Manage your personal information and preferences</p>
        </div>
      </div>

      {/* Profile Header Card */}
      <div className="group relative overflow-hidden rounded-3xl border border-richblack-700 bg-gradient-to-br from-richblack-800 to-richblack-900 p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <Img
                src={user?.image}
                alt={`profile-${user?.firstName}`}
                className="relative aspect-square w-20 h-20 rounded-full object-cover border-4 border-richblack-800 shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-richblack-800"></div>
            </div>
            
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-2xl font-bold text-richblack-5 capitalize">
                {user?.firstName} {user?.lastName}
              </h2>
              <div className="flex items-center gap-2 text-richblack-300">
                <RiMailLine className="w-4 h-4" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <RiVipCrownLine className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400 capitalize">
                  {user?.accountType} Account
                </span>
              </div>
            </div>
          </div>

          <IconBtn
            text="Edit Profile"
            onclick={() => navigate("/dashboard/settings")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
      </div>

      {/* About Section */}
      <div className="group relative overflow-hidden rounded-3xl border border-richblack-700 bg-gradient-to-br from-richblack-800 to-richblack-900 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <RiUser3Line className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-richblack-5">About Me</h3>
            </div>
            
            <IconBtn
              text="Edit"
              onclick={() => navigate("/dashboard/settings")}
              className="hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-200"
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>

          <div className="bg-richblack-700/50 rounded-2xl p-6 border border-richblack-600">
            <p className={`${
              user?.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400 italic"
            } text-base leading-relaxed`}>
              {user?.additionalDetails?.about ?? "Tell the world about yourself! Share your interests, goals, and what makes you unique."}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="group relative overflow-hidden rounded-3xl border border-richblack-700 bg-gradient-to-br from-richblack-800 to-richblack-900 transition-all duration-300 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <RiUser3Line className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-richblack-5">Personal Details</h3>
            </div>
            
            <IconBtn
              text="Edit"
              onclick={() => navigate("/dashboard/settings")}
              className="hover:bg-green-500/20 hover:text-green-400 transition-all duration-200"
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-6">
              <DetailCard
                icon={<RiUser3Line className="w-4 h-4" />}
                label="First Name"
                value={user?.firstName}
                isCapitalized
              />
              <DetailCard
                icon={<RiVipCrownLine className="w-4 h-4" />}
                label="Account Type"
                value={user?.accountType}
                isCapitalized
              />
              <DetailCard
                icon={<RiMailLine className="w-4 h-4" />}
                label="Email Address"
                value={user?.email}
              />
              <DetailCard
                icon={<RiGenderlessLine className="w-4 h-4" />}
                label="Gender"
                value={user?.additionalDetails?.gender}
                placeholder="Add Gender"
              />
            </div>

            {/* Second Column */}
            <div className="space-y-6">
              <DetailCard
                icon={<RiUser3Line className="w-4 h-4" />}
                label="Last Name"
                value={user?.lastName}
                isCapitalized
              />
              <DetailCard
                icon={<RiPhoneLine className="w-4 h-4" />}
                label="Phone Number"
                value={user?.additionalDetails?.contactNumber}
                placeholder="Add Contact Number"
              />
              <DetailCard
                icon={<RiCalendarLine className="w-4 h-4" />}
                label="Date of Birth"
                value={formattedDate(user?.additionalDetails?.dateOfBirth)}
                placeholder="Add Date of Birth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Reusable DetailCard component
function DetailCard({ icon, label, value, placeholder, isCapitalized = false }) {
  return (
    <div className="bg-richblack-700/30 rounded-xl p-4 border border-richblack-600/50 hover:bg-richblack-700/50 hover:border-richblack-500 transition-all duration-200">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-400">{icon}</span>
        <span className="text-sm font-medium text-richblack-400">{label}</span>
      </div>
      <p className={`text-sm font-semibold ${
        value 
          ? "text-richblack-5" 
          : "text-richblack-400 italic"
      } ${isCapitalized ? "capitalize" : ""}`}>
        {value || placeholder}
      </p>
    </div>
  );
}