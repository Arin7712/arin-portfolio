"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "About", href: "about" },
  { name: "Features", href: "features" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Contact", href: "contact" },
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll and screen width
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 100);
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // run initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 pt-4">
      <motion.div
        animate={
          isDesktop ? { width: scrolled ? "60%" : "87.5%" } : { width: "100%" }
        }
        transition={{ duration: 0.4 }}
        className={`flex items-center justify-between px-4 py-3 relative z-10 bg-neutral-800 text-white rounded-full transition-all duration-300 ${
          isDesktop ? "" : "mx-6"
        }`}
      >
        <div className="flex items-center gap-8">
          {/* Logo */}
          <motion.div
            className="mr-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Image src='/logo2.png' alt="Logo" width={32} height={32} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <ScrollLink
                to={item.href}
                key={index}
                smooth={true}
                duration={1000}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <a
                    href={item.href}
                    className="text-sm text-neutral-200 hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                </motion.div>
              </ScrollLink>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link
            href="https://calendly.com/aringawande7712/30min"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-neutral-200 border-[1px] border-neutral-200 rounded-full hover:bg-neutral-200 hover:text-neutral-800 transition-colors"
          >
            Get Started
          </Link>
          <Bell className="bg-orange-500 text-neutral-100 rounded-full p-2 size-9 hover:cursor-pointer hover:border-[1px] hover:bg-neutral-800 hover:text-neutral-200 transition-colors" />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-neutral-200" />
          ) : (
            <Menu className="h-6 w-6 text-neutral-200" />
          )}
        </motion.button>
      </motion.div>

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
                <ScrollLink
                  to={item.href}
                  key={i}
                  smooth={true}
                  duration={1000}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <a
                      href={item.href}
                      className="text-base text-neutral-200 font-medium"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                </ScrollLink>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <Link
                  href="https://calendly.com/aringawande7712/30min"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-neutral-800 bg-neutral-200 rounded-full hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { Navbar1 };
