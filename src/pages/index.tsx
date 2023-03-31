import React from 'react'
import Typewriter from 'typewriter-effect'
import { HiOutlineMail } from 'react-icons/hi'
import { Footer } from '../components/common/Footer'
import { motion } from 'framer-motion'
import { selectedProjects, stack } from '../constants'
import { Link } from 'react-router-dom'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { VscGithub } from 'react-icons/vsc'

export const Home = () => {
  return (
    <>
      <div className="home-container lg:px-52 lg:pt-28">
        {/** -------------- hero section ------------- */}
        <div className="hero-section">
          <div className="header text-stone-100">
            {/** ------- hero text with effect -------- */}
            <h2 className='text-5xl font-semibold'>Hey, I'm Suneeth</h2>
            <div className='flex items-center gap-3 mt-2'>
              <h2 className='text-5xl font-semibold'>I develop</h2>
              <Typewriter
                options={{
                  strings: [
                    'web apps.',
                    'ui/ux designs.',
                    'websites.',
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'bg-gradient-to-r bg-clip-text from-white to-stone-500 text-transparent text-5xl font-semibold',
                  cursorClassName: 'text-5xl text-stone-500',
                }}
              />
            </div>
            {/** ------- breif about ------- */}
            <p className='mt-5 text-md font-medium bg-gradient-to-r bg-clip-text from-stone-100 to-stone-300 text-transparent'>
              Suneeth is a self-motivated fullstack web developer based in India. Obsessed with developing <span className='underline decoration-stone-400 underline-offset-8 bg-stone-800 text-stone-100'>responsive</span>, <span className='underline decoration-stone-400 underline-offset-8 bg-stone-800 text-stone-100'>user-centered</span> and <span className='underline decoration-stone-400 underline-offset-8 bg-stone-800 text-stone-100'>fast</span> websites.
            </p>
            {/** ------ hero buttons ------ */}
            <div className="flex gap-4 mt-7">
              <button className='bg-[#1C1C1C] text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md'>About</button>
              <button className='bg-transparent text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md flex items-center gap-2'>
                <HiOutlineMail size={17} style={{ opacity: 0.8 }} />
                E-Mail
              </button>
            </div>
          </div>
        </div>

        {/** ---------------- selected projects -------------- */}
        {/* <SelectedProjects /> */}
        <div className='mt-16'>
          <h4 className='text-lg font-medium text-transparent bg-gradient-to-r from-stone-100
         to-stone-500 bg-clip-text'>Selected / Featured <br />Projects.</h4>
        </div>
        {/** -------- projects -------- */}
        <motion.div
          className="projects mb-10">
          {
            selectedProjects.map((project) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className='flex gap-7 mt-9'>
                <Link to={`/projects/${project.slug}`} className='w-1/3'>
                  <img className='rounded drop-shadow-xl' src={project.imageUrl} alt={project.title} />
                </Link>
                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='leading-none text-lg font-medium text-transparent bg-gradient-to-r from-stone-100
                               to-stone-300 bg-clip-text'>
                      {project.title}
                    </h3>
                    <h4 className='text-md text-transparent bg-gradient-to-r from-stone-400
                                 to-stone-500 bg-clip-text mt-1'>
                      {project.description}
                    </h4>
                    <span className='mt-3 text-sm opacity-50 flex items-center gap-1'>
                      <GrStatusGoodSmall size={10} />
                      {
                        project.status === 'dev' ? 'In Development' : 'Public'
                      }
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a target={'_blank'} href={project.status !== 'dev' ? project.links.site : ''}>
                      <button disabled={project.status === 'dev'} className='bg-[#1C1C1C] text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md disabled:cursor-auto'>
                        View site
                      </button>
                    </a>
                    <a target={'_blank'} href={project.links.github}>
                      <button className='bg-transparent text-[15px] p-2 px-6 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md flex items-center gap-2'>
                        <VscGithub size={17} style={{ opacity: 0.8 }} />
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
        {/** ---------------- stack --------------- */}
        {/* <Stack /> */}
        <div className='mb-10 border border-stone-800 p-5 rounded-md'>
          <div>
            <h4 className='text-lg font-medium text-transparent bg-gradient-to-r from-stone-100
         to-stone-500 bg-clip-text'>
              Stack.
            </h4>
            <h4 className='opacity-50 text-sm'>Framework and software I regularly use.</h4>
          </div>
          {/** ------- stacks -------- */}
          {
            stack.map(stack => (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                key={stack.id}
                className='mt-5'>
                <a href={stack.link}>
                  <div className='flex items-center gap-5'>
                    <img src={stack.iconUrl} alt={stack.name} className='w-10 h-10 object-cover rounded-full' />
                    <div>
                      <h4 className='text-md font-medium text-transparent bg-gradient-to-r from-stone-100
                                    to-stone-500 bg-clip-text'>{stack.name}</h4>
                      <span className='text-sm opacity-50'>{stack.use}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))
          }
          <button className='bg-[#1C1C1C] text-[15px] p-2 w-full mt-5 font-medium text-stone-100 border border-stone-800 hover:border-stone-700 duration-300 rounded-md'>
            <span className='text-transparent bg-gradient-to-r from-stone-100
                            to-stone-300 bg-clip-text'>
              See all Tools
            </span>
          </button>
        </div>
        {/** ---------------- footer -------------- */}
        <Footer />
      </div>
    </>
  )
}
