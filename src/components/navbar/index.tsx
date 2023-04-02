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
import { RxTwitterLogo } from 'react-icons/rx'
import { VscGithub } from 'react-icons/vsc'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { navbarItemVariant, navbarSocialItemVarient, navbarVariant } from '../../helpers/animations'

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
      <nav className='px-6 py-10'>
        {/** --------- profile section ----------- */}
        <Link to={'/about'} className="profile">
          <div className="flex gap-3 items-center">
            <img
              src="/favicon.png"
              className='w-10 h-10' alt="Suneeth"
            />
            <div className='flex flex-col'>
              <h4 className='text-[16px] font-medium text-stone-700'>
                Suneeth. S
              </h4>
              <div className='overflow-hidden'>
                <motion.h5
                  key={roleIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  ref={(element) => (element = element)}
                  className='text-[14px] leading-4 opacity-50 text-stone-700'>
                  {roles[roleIndex]}
                </motion.h5>
              </div>
            </div>
          </div>
        </Link>
        {/** -------------- nav links -------------- */}
        <motion.div
          variants={navbarVariant}
          initial={'hidden'}
          animate={'show'}
          className="nav-links mt-10">

          {/** ----- explore nav ------ */}
          <motion.div
            variants={navbarItemVariant}
            onClick={() => handleTabChange('explore')}
            className={`explore w-full p-2 pl-3 rounded-md ${activeTab === 'explore' && ' bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-md'}`}>
            <Link to="/">
              <button className={`w-full duration-300 flex items-center gap-2 hover:opacity-100 ${activeTab === 'explore' ? 'opacity-100' : 'opacity-60'}`}>
                <MdOutlineExplore size={18} className={`${activeTab === 'explore' ? 'text-white' : 'text-stone-800'}`} />
                <span className={`text-[14px] font-medium ${activeTab === 'explore' ? 'text-white' : 'text-stone-800'}`}>Explore</span>
              </button>
            </Link>
          </motion.div>

          {/** ----- about me ----- */}
          <motion.div
            variants={navbarItemVariant}
            onClick={() => handleTabChange('about')}
            className={`about w-full p-2 pl-3 rounded-md ${activeTab === 'about' && ' bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-md'}`}>
            <Link to="/about">
              <button className={`w-full duration-300 flex items-center gap-2 hover:opacity-100 ${activeTab === 'about' ? 'opacity-100' : 'opacity-60'}`}>
                <HiOutlineUserCircle size={18} className={`${activeTab === 'about' ? 'text-white' : 'text-stone-800'}`} />
                <span className={`text-[14px] font-medium ${activeTab === 'about' ? 'text-white' : 'text-stone-800'}`}>About</span>
              </button>
            </Link>
          </motion.div>

          {/** ----- projects ----- */}
          <motion.div
            variants={navbarItemVariant}
            onClick={() => handleTabChange('projects')}
            className={`projects w-full p-2 pl-3 rounded-md ${activeTab === 'projects' && ' bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-md'}`}>
            <Link to="/">
              <button className={`w-full duration-300 flex items-center gap-2 hover:opacity-100 ${activeTab === 'projects' ? 'opacity-100' : 'opacity-60'}`}>
                <AiOutlineProject size={18} className={`${activeTab === 'projects' ? 'text-white' : 'text-stone-800'}`} />
                <span className={`text-[14px] font-medium ${activeTab === 'projects' ? 'text-white' : 'text-stone-800'}`}>Projects</span>
              </button>
            </Link>
          </motion.div>

          {/** ----- stack ----- */}
          <motion.div
            variants={navbarItemVariant}
            onClick={() => handleTabChange('stack')}
            className={`stack w-full p-2 pl-3 rounded-md ${activeTab === 'stack' && ' bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-md'}`}>
            <Link to="/">
              <button className={`w-full duration-300 flex items-center gap-2 hover:opacity-100 ${activeTab === 'stack' ? 'opacity-100' : 'opacity-60'}`}>
                <ImStack size={18} className={`${activeTab === 'stack' ? 'text-white' : 'text-stone-800'}`} />
                <span className={`text-[14px] font-medium ${activeTab === 'stack' ? 'text-white' : 'text-stone-800'}`}>Stack</span>
              </button>
            </Link>
          </motion.div>

          {/** ----- hire me ----- */}
          <motion.div
            variants={navbarItemVariant}
            onClick={() => handleTabChange('hire')}
            className={`hire w-full p-2 pl-3 rounded-md ${activeTab === 'hire' && ' bg-gradient-to-r from-stone-800 to-stone-700 drop-shadow-md'}`}>
            <Link to="/">
              <button className={`w-full duration-300 flex items-center gap-2 hover:opacity-100 ${activeTab === 'hire' ? 'opacity-100' : 'opacity-60'}`}>
                <RiSendPlaneLine size={18} className={`${activeTab === 'hire' ? 'text-white' : 'text-stone-800'}`} />
                <span className={`text-[14px] font-medium ${activeTab === 'hire' ? 'text-white' : 'text-stone-800'}`}>Hire me</span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/** ----------------- social links ----------------- */}
        <motion.div
          variants={navbarVariant}
          initial={'hidden'}
          animate={'show'}
          className="social-links mt-10 pr-4 opacity-60">
          <h4 className='pl-3 mb-2 uppercase text-xs text-stone-700'>social</h4>

          {/** ----- github ----- */}
          <motion.a
            variants={navbarSocialItemVarient}
            href='#'
            className={`p-2 pl-3 rounded-md w-full duration-300 flex items-center gap-2 opacity-60 hover:opacity-80`}>
            <VscGithub size={18} className={'text-stone-800'} />
            <span className='text-[14px] font-medium text-stone-800'>Github</span>
          </motion.a>

          {/** ----- linked in ----- */}
          <motion.a
            variants={navbarSocialItemVarient}
            href='#'
            className={`p-2 pl-3 rounded-md w-full duration-300 flex items-center gap-2 opacity-60 hover:opacity-80`}>
            <CiLinkedin size={18} className={'text-stone-800'} />
            <span className='text-[14px] font-medium text-stone-800'>Linkedin</span>
          </motion.a>

          {/** ----- gmail ----- */}
          <motion.a
            variants={navbarSocialItemVarient}
            href='#'
            className={`p-2 pl-3 rounded-md w-full duration-300 flex items-center gap-2 opacity-60 hover:opacity-80`}>
            <RxTwitterLogo size={18} className={'text-stone-800'} />
            <span className='text-[14px] font-medium text-stone-800'>Twitter</span>
          </motion.a>

          {/** ----- instagram ----- */}
          <motion.a
            variants={navbarSocialItemVarient}
            href='#'
            className={`p-2 pl-3 rounded-md w-full duration-300 flex items-center gap-2 opacity-60 hover:opacity-80`}>
            <AiOutlineInstagram size={18} className={'text-stone-800'} />
            <span className='text-[14px] font-medium text-stone-800'>Instagram</span>
          </motion.a>
        </motion.div>
      </nav>
    </>
  )
}