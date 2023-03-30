import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { roles } from '../../constants'
import { motion } from 'framer-motion'
import { MdOutlineExplore } from 'react-icons/md'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { AiOutlineProject } from 'react-icons/ai'
import { ImStack } from 'react-icons/im'
import { RiSendPlaneLine } from 'react-icons/ri'
import { CiLinkedin } from 'react-icons/ci'
import { AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { VscGithub } from 'react-icons/vsc'
import { HiOutlinePencilAlt } from 'react-icons/hi'

export const Navbar = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('explore')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    // change role content value on every 5 seconds
    const textChangeInterval = setInterval(() => {
      setRoleIndex((roleIndex + 1) % roles.length)
    }, 5000)

    return () => clearInterval(textChangeInterval)
  }, [roleIndex, roles.length])

  return (
    <>
      <nav className='pl-6 py-10'>
        {/** --------- profile section ----------- */}
        <Link to={'/about'} className="profile hover:opacity-80 duration-300">
          <div className="flex gap-3 items-center">
            <img
              src="/favicon.png"
              className='w-10 h-10' alt="Suneeth"
            />
            <div className='flex flex-col'>
              <h4 className='text-[15px] font-medium bg-gradient-to-r bg-clip-text from-white to-stone-400 text-transparent'>
                Suneeth. S
              </h4>
              <motion.h5
                key={roleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.5 }}
                ref={(element) => (element = element)}
                className='text-[14px] leading-4 opacity-50 bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>
                {roles[roleIndex]}
              </motion.h5>
            </div>
          </div>
        </Link>
        {/** -------------- nav links -------------- */}
        <div className="nav-links mt-10 pr-4">

          {/** ----- explore nav ------ */}
          <div
            onClick={() => handleTabChange('explore')}
            className={`explore w-full p-2 pl-4 rounded ${activeTab === 'explore' && ' bg-[#2B2B2B] ring-1 ring-stone-700 drop-shadow-md'}`}>
            <button className={`rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100 ${activeTab === 'explore' && 'opacity-100'}`}>
              <MdOutlineExplore size={18} style={{ opacity: 0.8 }} />
              <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Explore</span>
            </button>
          </div>

          {/** ----- about me ----- */}
          <div
            onClick={() => handleTabChange('aboutme')}
            className={`aboutme w-full p-2 pl-4 rounded ${activeTab === 'aboutme' && ' bg-[#2B2B2B] ring-1 ring-stone-700 drop-shadow-md'}`}>
            <button className={`rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100 ${activeTab === 'aboutme' && 'opacity-100'}`}>
              <HiOutlineUserCircle size={18} style={{ opacity: 0.8 }} />
              <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>About</span>
            </button>
          </div>

          {/** ----- projects ----- */}
          <div
            onClick={() => handleTabChange('projects')}
            className={`projects w-full p-2 pl-4 rounded ${activeTab === 'projects' && ' bg-[#2B2B2B] ring-1 ring-stone-700 drop-shadow-md'}`}>
            <button className={`rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100 ${activeTab === 'projects' && 'opacity-100'}`}>
              <AiOutlineProject size={18} style={{ opacity: 0.8 }} />
              <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Projects</span>
            </button>
          </div>

          {/** ----- stack ----- */}
          <div
            onClick={() => handleTabChange('stack')}
            className={`stack w-full p-2 pl-4 rounded ${activeTab === 'stack' && ' bg-[#2B2B2B] ring-1 ring-stone-700 drop-shadow-md'}`}>
            <button className={`rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100 ${activeTab === 'stack' && 'opacity-100'}`}>
              <ImStack size={18} style={{ opacity: 0.8 }} />
              <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Stack</span>
            </button>
          </div>

          {/** ----- hire me ----- */}
          <div
            onClick={() => handleTabChange('hireme')}
            className={`hireme w-full p-2 pl-4 rounded ${activeTab === 'hireme' && ' bg-[#2B2B2B] ring-1 ring-stone-700 drop-shadow-md'}`}>
            <button className={`rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100 ${activeTab === 'hireme' && 'opacity-100'}`}>
              <RiSendPlaneLine size={18} style={{ opacity: 0.8 }} />
              <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Hire me</span>
            </button>
          </div>
        </div>

        {/** ----------------- resourses ----------------- */}
        <div className="resourses mt-10 pr-4">
          <h4 className='pl-4 mb-2 uppercase opacity-50 text-xs bg-gradient-to-r bg-clip-text from-white to-black text-transparent'>resourses</h4>

          {/** ----- blog ----- */}
          <div
            onClick={() => handleTabChange('blog')}
            className={`blog w-full p-2 pl-4 rounded ${activeTab === 'blog' && ' bg-[#2B2B2B] ring-1 ring-stone-700 drop-shadow-md'}`}>
            <button className={`rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100 ${activeTab === 'blog' && 'opacity-100'}`}>
              <HiOutlinePencilAlt size={18} style={{ opacity: 0.8 }} />
              <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Blog</span>
            </button>
          </div>
        </div>

        {/** ----------------- social links ----------------- */}
        <div className="social-links mt-10 pr-4">
          <h4 className='pl-4 mb-2 uppercase opacity-50 text-xs bg-gradient-to-r bg-clip-text from-white to-black text-transparent'>social</h4>

          {/** ----- github ----- */}
          <a href='#' className={`p-2 pl-4 rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100`}>
            <VscGithub size={18} style={{ opacity: 0.8 }} />
            <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Github</span>
          </a>

          {/** ----- linked in ----- */}
          <a href='#' className={`p-2 pl-4 rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100`}>
            <CiLinkedin size={18} style={{ opacity: 0.8 }} />
            <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Linkedin</span>
          </a>

          {/** ----- instagram ----- */}
          <a href='#' className={`p-2 pl-4 rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100`}>
            <AiOutlineInstagram size={18} style={{ opacity: 0.8 }} />
            <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Instagram</span>
          </a>

          {/** ----- gmail ----- */}
          <a href='#' className={`p-2 pl-4 rounded-md w-full duration-300 flex items-center gap-2 opacity-50 hover:opacity-100`}>
            <HiOutlineMail size={18} style={{ opacity: 0.8 }} />
            <span className='text-[14px] bg-gradient-to-r bg-clip-text from-white to-stone-300 text-transparent'>Gmail</span>
          </a>
        </div>
      </nav>
    </>
  )
}
