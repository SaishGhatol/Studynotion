import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"

import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import Img from "../components/common/Img"
import ReviewSlider from './../components/common/ReviewSlider';

import { motion } from 'framer-motion';
import { fadeIn } from "../components/common/motionFrameVarients"

const About = () => {
  return (
    <div className="overflow-hidden relative">
      {/* Fixed Hero Section with proper z-index management */}
      <section className="bg-richblack-700 relative min-h-screen flex items-center pt-20">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-richblack-700 via-richblack-800 to-richblack-900 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/30 to-pink-900/20 -z-10"></div>

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white z-20">
          <motion.header
            className="mx-auto py-16 lg:py-20 xl:py-24 lg:w-[85%] xl:w-[75%]"
          >
            <motion.h1
              variants={fadeIn('down', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-center mb-6"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            >
              Driving Innovation in Online Education for a{" "}
              <HighlightText text={"Brighter Future"} />
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="mx-auto mt-8 lg:mt-10 text-center text-lg sm:text-xl lg:text-2xl xl:text-2xl font-medium text-richblack-100 lg:w-[90%] xl:w-[85%] leading-relaxed lg:leading-[1.8] backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
              StudyNotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </motion.p>
          </motion.header>

          {/* Spacer for banner images */}
          <div className="sm:h-[100px] lg:h-[150px]"></div>
          
          {/* Banner images positioned at bottom */}
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[40%] grid-cols-3 gap-4 lg:gap-6 z-30">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={BannerImage1}
                alt="Promotional Banner 1"
                className="rounded-xl shadow-2xl hover:shadow-3xl hover:scale-[1.08] transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500/50 border border-white/20"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={BannerImage2}
                alt="Promotional Banner 2"
                className="rounded-xl shadow-2xl hover:shadow-3xl hover:scale-[1.08] transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500/50 border border-white/20"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Img
                src={BannerImage3}
                alt="Promotional Banner 3"
                className="rounded-xl shadow-2xl hover:shadow-3xl hover:scale-[1.08] transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-500/50 border border-white/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Quote Section */}
      <section className="border-b border-richblack-600 bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/5 to-transparent"></div>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500 relative z-10">
          <div className="h-[150px] lg:h-[180px]"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl"
          >
            <Quote />
          </motion.div>
          <div className="h-[50px]"></div>
        </div>
      </section>

      {/* Enhanced Main Content Section */}
      <section className="bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-900 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/10 to-pink-900/5"></div>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-20 text-richblack-500 relative z-10">
          {/* Enhanced Founding Story Section */}
          <div className="flex flex-col items-center gap-16 lg:gap-20 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="flex lg:w-[50%] flex-col gap-8 backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              <h2 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl lg:text-5xl font-bold text-transparent lg:w-[90%] leading-tight"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                Our Founding Story
              </h2>
              <div className="space-y-6">
                <p className="text-base lg:text-lg font-medium text-richblack-100 lg:w-[95%] leading-relaxed">
                  Our e-learning platform was born out of a shared vision and
                  passion for transforming education. It all began with a group of
                  educators, technologists, and lifelong learners who recognized
                  the need for accessible, flexible, and high-quality learning
                  opportunities in a rapidly evolving digital world.
                </p>
                <p className="text-base lg:text-lg font-medium text-richblack-100 lg:w-[95%] leading-relaxed">
                  As experienced educators ourselves, we witnessed firsthand the
                  limitations and challenges of traditional education systems. We
                  believed that education should not be confined to the walls of a
                  classroom or restricted by geographical boundaries. We
                  envisioned a platform that could bridge these gaps and empower
                  individuals from all walks of life to unlock their full
                  potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="group relative lg:w-[45%]"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-[#FC6767] via-[#FF8A80] to-[#FC6767] rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FC6767]/50 via-[#FF8A80]/50 to-[#FC6767]/50 rounded-2xl blur-md opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 8, rotateX: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative"
              >
                <Img
                  src={FoundingStory}
                  alt="FoundingStory"
                  className="shadow-[0_0_50px_0] shadow-[#FC6767]/50 rounded-2xl filter group-hover:brightness-110 transition-all duration-500 w-full"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Vision & Mission Section */}
          <div className="flex flex-col items-center lg:gap-20 lg:flex-row justify-between">
            <motion.div
              className="flex lg:w-[48%] flex-col gap-8 backdrop-blur-sm bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-3xl p-8 lg:p-12 border border-orange-500/20 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <h2 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl lg:text-5xl font-bold text-transparent lg:w-[80%] leading-tight"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                Our Vision
              </h2>
              <p className="text-base lg:text-lg font-medium text-richblack-100 lg:w-[95%] leading-relaxed">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 lg:mt-0 flex lg:w-[48%] flex-col gap-8 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-green-900/20 rounded-3xl p-8 lg:p-12 border border-blue-500/20 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <h2 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl lg:text-5xl font-bold lg:w-[80%] leading-tight"
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                Our Mission
              </h2>
              <p className="text-base lg:text-lg font-medium text-richblack-100 lg:w-[95%] leading-relaxed">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/20 to-pink-900/10"></div>
        <div className="relative z-10">
          <StatsComponenet />
        </div>
      </motion.div>

      {/* Enhanced Learning Grid & Contact Section */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-20 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.1 }}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative z-10"
        >
          <LearningGrid />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.1 }}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative z-10"
        >
          <ContactFormSection />
        </motion.div>
      </section>

      {/* Enhanced Reviews Section */}
      <motion.div
        className="my-20 px-5 text-white bg-gradient-to-b from-richblack-900 via-richblack-800 to-richblack-900 py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/20 to-pink-900/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <motion.h2
            className="text-center text-4xl lg:text-6xl font-bold mt-8 mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))'
            }}
          >
            Reviews from other learners
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.1 }}
            className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl"
          >
            <ReviewSlider />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-richblack-900 to-transparent"></div>
        <div className="relative z-10">
          <Footer />
        </div>
      </motion.div>
    </div>
  )
}

export default About