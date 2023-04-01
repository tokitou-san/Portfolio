import React from 'react'
import { VscGithub } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { Footer } from '../components/common/Footer'

export const About = () => {
  return (
    <>
      <div className="about-container lg:px-52 lg:pt-28">
        <div>
          <h2 className='bg-gradient-to-r bg-clip-text from-stone-100 to-stone-500 text-transparent text-5xl font-semibold'>About Suneeth.</h2>
          <p className='mt-3 font-medium text-stone-100'>
            Full Stack web developer having specialization in both backend & frontend.
          </p>
        </div>

        <div className='mt-5'>
          <p className='opacity-50'>
            Suneeth is a Full Stack web developer based in India with the experience of 2+ years. He is obsessed with creating user-centered, responsive interfaces and powerful, fast backends and user experiences that meet business objectives.
            <br /> <br />
            I'm currently working on my side projects and also available for your nice ideas. I always try to come with user engaging websites with latest technologies.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-5 rounded-md border border-stone-800 p-5 bg-[#1C1C1C]'>
            <p className='font-medium'>
              I belive my works will tell more than words.
            </p>
            <span className='text-sm opacity-50'>Checkout my latest works.</span>
            <div className="flex gap-4 mt-3">
              <button className='bg-stone-800 text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md'>
                Projects
              </button>
              <button className='bg-stone-900 text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md flex items-center gap-2'>
                <VscGithub size={17} style={{ opacity: 0.8 }} />
                Github
              </button>
            </div>
          </motion.div>
          <p className='opacity-50 mt-5'>
            I'm always looking to collaborate on interesting projects with great people. Need a hand? I have two – Nice to meet you!
          </p>
          <div className="flex gap-4 mt-3 mb-10">
            <button className='bg-stone-800 text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md'>
              Hire me
            </button>
            <button className='bg-stone-900 text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md flex items-center gap-2'>
              <HiOutlineMail size={17} style={{ opacity: 0.8 }} />
              Email
            </button>
          </div>
        </div>

        {/** ------ footer ------ */}
        <Footer />
      </div>
    </>
  )
}
