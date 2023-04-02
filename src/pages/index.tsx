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
          <div className="header text-stone-900">
            {/** ------- hero text with effect -------- */}
            <div className='overflow-hidden'>
              <motion.h2
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                }}
                className='text-5xl font-extrabold'>
                Hey, I'm Suneeth
              </motion.h2>
            </div>
            <div className='flex items-center gap-3 mt-2 overflow-hidden'>
              <motion.h2
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                }}
                className='text-5xl font-extrabold'>I develop</motion.h2>
              <Typewriter
                options={{
                  strings: [
                    'web apps.',
                    'ui/ux designs.',
                    'websites.',
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'bg-gradient-to-r bg-clip-text from-stone-900 to-stone-700 text-transparent text-5xl font-extrabold',
                  cursorClassName: 'text-5xl text-stone-500',
                }}
              />
            </div>
            {/** ------- breif about ------- */}
            <div className='overflow-hidden'>
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                }}
                className='mt-5 text-md font-medium text-stone-700'>
                Suneeth is a self-motivated fullstack web developer based in India. Obsessed with developing <span className='underline decoration-stone-400 decoration-2 underline-offset-8 bg-stone-200 text-stone-700'>responsive</span>, <span className='underline decoration-2 decoration-stone-400 underline-offset-8 bg-stone-200 text-stone-700  '>user-centered</span> and <span className='underline decoration-2 decoration-stone-400 underline-offset-8 bg-stone-200 text-stone-700'>fast</span> websites.
              </motion.p>
            </div>
            {/** ------ hero buttons ------ */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,

              }}
              className="flex gap-4 mt-7">
              <motion.button
                whileHover={{
                  y: -2,
                }}
                className='bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-xl text-[15px] p-2 px-10 font-medium text-stone-100 rounded-md'>
                About
              </motion.button>
              <button
                className='bg-stone-50 shadow-lg text-[15px] p-2 px-6 font-medium text-stone-800 rounded-md flex items-center gap-2'>
                <HiOutlineMail size={17} style={{ opacity: 0.8 }} />
                E-Mail
              </button>
            </motion.div>
          </div>
        </div>

        {/** ---------------- selected projects -------------- */}
        <div className='projects-box rounded-lg bg-slate-50 shadow-lg shadow-stone-200 px-5 py-7 mt-10 mb-10'>
          {/* <SelectedProjects /> */}
          <div className='overflow-hidden'>
            <motion.h3
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
              }}
              className='text-lg font-semibold text-stone-800'>Selected / Featured <br />Projects.</motion.h3>
          </div>
          {/** -------- projects -------- */}
          <motion.div
            className="">
            {
              selectedProjects.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  className={`flex gap-7 mt-9`}>
                  <Link to={`/projects/${project.slug}`} className='w-1/3'>
                    <img className='rounded' src={project.imageUrl} alt={project.title} />
                  </Link>
                  <div className='flex flex-col justify-between'>
                    <Link to={`/projects/${project.slug}`}>
                      <h3 className='leading-none text-lg font-medium text-stone-800'>
                        {project.title}
                      </h3>
                      <h4 className='text-md text-stone-500 mt-1'>
                        {project.description}
                      </h4>
                      <span className='mt-3 text-sm text-stone-600 flex items-center gap-1'>
                        <GrStatusGoodSmall size={10} />
                        {
                          project.status === 'dev' ? 'In Development' : 'Public'
                        }
                      </span>
                    </Link>
                    <div className="flex gap-4">
                      {
                        project.status !== 'dev' && <a target={'_blank'} href={project.status !== 'dev' ? project.links.site : ''}>
                          <button disabled={project.status === 'dev'} className='bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-lg text-[15px] p-2 px-6 font-medium text-stone-100 rounded-md'>
                            View site
                          </button>
                        </a>
                      }
                      <a target={'_blank'} href={project.links.github}>
                        <button className='text-[15px] px-0 py-2 font-medium text-stone-800 rounded-md flex items-center gap-2'>
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
          <div className='mt-10'>
            <div>
              <h4 className='text-lg font-semibold text-stone-800'>
                Stack.
              </h4>
              <h4 className='text-sm text-stone-600 font-medium'>Framework and software I regularly use.</h4>
            </div>
            {/** ------- stacks -------- */}
            <div className='grid grid-cols-12'>
              {
                stack.map(stack => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3 }}
                    key={stack.id}
                    className='mt-5 col-span-6'>
                    <a href={stack.link}>
                      <div className='flex items-center gap-5'>
                        <img src={stack.iconUrl} alt={stack.name} className='w-10 h-10 object-cover rounded-full' />
                        <div>
                          <h4 className='text-md font-medium text-stone-800'>{stack.name}</h4>
                          <span className='text-sm text-stone-600'>{stack.use}</span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))
              }
            </div>
            <motion.button
              whileHover={{
                y: -2,
              }}
              className='w-full mt-7 bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-lg text-[15px] p-2 px-6 font-medium text-stone-100 rounded-md'>
              See all Tools
            </motion.button>
          </div>
        </div>
        {/** ---------------- footer -------------- */}
        <Footer />
      </div>
    </>
  )
}
