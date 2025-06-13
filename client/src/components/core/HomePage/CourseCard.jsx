import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`group relative w-[360px] lg:w-[30%] h-[300px] box-border cursor-pointer transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 ${
        isActive
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50 z-10"
          : "bg-richblack-800 hover:bg-richblack-700 shadow-lg hover:shadow-2xl"
      } text-richblack-25 rounded-lg overflow-hidden`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Subtle background gradient overlay */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
        isActive 
          ? "bg-gradient-to-br from-white via-gray-50 to-yellow-50 opacity-100" 
          : "bg-gradient-to-br from-richblack-700 to-richblack-900 group-hover:opacity-50"
      }`} />
      
      {/* Floating decoration */}
      <div className={`absolute top-4 right-4 w-8 h-8 rounded-full transition-all duration-500 ${
        isActive 
          ? "bg-yellow-100 opacity-60 animate-pulse" 
          : "bg-richblack-600 opacity-30 group-hover:opacity-50 group-hover:scale-110"
      }`} />
      
      {/* Active state indicator line */}
      {isActive && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 animate-pulse" />
      )}

      <div className="relative z-10 border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        {/* Course Title */}
        <div 
          className={`font-semibold text-[20px] leading-tight transition-all duration-300 ${
            isActive 
              ? "text-richblack-800 transform scale-105" 
              : "text-richblack-25 group-hover:text-white"
          }`}
        >
          {cardData?.heading}
        </div>

        {/* Course Description */}
        <div className={`text-sm leading-relaxed flex-grow transition-colors duration-300 ${
          isActive 
            ? "text-richblack-600" 
            : "text-richblack-400 group-hover:text-richblack-300"
        }`}>
          {cardData?.description}
        </div>
        
        {/* Progress indicator for active card */}
        {isActive && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-1.5 rounded-full animate-pulse" style={{ width: '70%' }} />
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div
        className={`relative z-10 flex justify-between px-6 py-3 font-medium transition-all duration-300 ${
          isActive 
            ? "text-blue-400 bg-gradient-to-r from-gray-50 to-yellow-50" 
            : "text-richblack-300 group-hover:text-richblack-200 group-hover:bg-richblack-750"
        }`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px] transition-all duration-300 hover:scale-110">
          <HiUsers className={`transition-colors duration-300 ${
            isActive ? "text-blue-500" : "text-richblack-400 group-hover:text-richblack-300"
          }`} />
          <p className="font-medium">{cardData?.level}</p>
        </div>

        {/* Lessons Count */}
        <div className="flex items-center gap-2 text-[16px] transition-all duration-300 hover:scale-110">
          <ImTree className={`transition-colors duration-300 ${
            isActive ? "text-blue-500" : "text-richblack-400 group-hover:text-richblack-300"
          }`} />
          <p className="font-medium">{cardData?.lessionNumber} Lesson</p>
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className={`absolute inset-0 border-2 border-transparent transition-all duration-300 rounded-lg ${
        isActive 
          ? "border-yellow-300 shadow-yellow-200/50" 
          : "group-hover:border-richblack-600 group-hover:shadow-richblack-900/50"
      }`} />
      
      {/* Subtle inner glow */}
      <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
        isActive 
          ? "shadow-inner shadow-yellow-100/30" 
          : "group-hover:shadow-inner group-hover:shadow-richblack-900/30"
      }`} />
    </div>
  );
};

export default CourseCard;