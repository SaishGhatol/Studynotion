import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="p-[40px] bg-richblack-800 min-h-screen flex items-center justify-center">
      <div>
        <div>
          <div>
            <div className="text-center">
              <div className="h-[400px] bg-center  bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] w-[600px] mx-auto bg-no-repeat bg-cover rounded-lg ">
                <h1 className="text-center text-6xl font-extrabold text-black">404</h1>
              </div>

              <div className="-mt-12 ">
                <h3 className="text-4xl mb-1 ">
                  Look like you're lost
                </h3>

                <p className='text-2xl text-white'>The page you are looking for not available!</p>

                <Link to='/'
                  className=" py-[13px] px-10 text-lg bg-caribbeangreen-200 hover:bg-caribbeangreen-400 my-5 inline-block rounded-full font-semibold duration-300"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound