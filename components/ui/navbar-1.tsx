"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Bell, Menu, X } from "lucide-react"


const navItems = [
  {
    name: "About",
    href: '/about,'
  },
  {
    name: 'Case Studies',
    href: '/case-studies'
  },
  {
    name: 'Portfolio',
    href: '/portfolio'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-4 absolute fixed z-50">
      <div className="flex items-center justify-between md:mx-[6rem] mx-6 px-4 py-3 w-full relative z-10 bg-neutral-800 text-white rounded-full">
        <div className="flex items-center gap-8">

        <div className="flex items-center">
          <motion.div
            className="w-8 h-8 mr-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <a href="#" className="text-sm text-neutral-200 hover:text-white transition-colors font-medium">
                  {item.name}
                </a>
              </motion.div>
            ))}
          </nav>
                  </div>


        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-neutral-200 border-[1px] border-neutral-200 rounded-full hover:bg-neutral-200 hover:text-neutral-800 transition-colors"
          >
            Get Started
          </a>
            <Bell className="bg-neutral-200 text-neutral-800 rounded-full p-2 size-9 hover:cursor-pointer hover:border-[1px] hover:bg-neutral-800 hover:text-neutral-200 transition-colors"/>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          {isOpen ? <X className="h-6 w-6 text-neutral-200" /> : <Menu className="h-6 w-6 text-neutral-200" />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-800 border-neutral-300 border-[1px] rounded-2xl z-50 mt-20 mx-6 py-6 px-6 md:hidden h-fit"
            initial={{ opacity: 0, y: "0%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "0%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a href="#" className="text-base text-neutral-200 font-medium" onClick={toggleMenu}>
                    {item.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-neutral-800 bg-neutral-200 rounded-full hover:bg-gray-800 transition-colors "
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export { Navbar1 }