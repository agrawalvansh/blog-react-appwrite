import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../index';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <motion.footer 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative overflow-hidden py-10 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/">
                    <Logo width="100px" />
                  </Link>
                </motion.div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  &copy; Copyright {currentYear}. All Rights Reserved by Vansh Agrawal.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                Company
              </h3>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((text) => (
                  <motion.li key={text} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                    <Link
                      className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      to="/"
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                Support
              </h3>
              <ul className="space-y-4">
                {['Account', 'Help', 'Contact Us', 'Customer Support'].map((text) => (
                  <motion.li key={text} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                    <Link
                      className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      to="/"
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                Legals
              </h3>
              <ul className="space-y-4">
                {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((text) => (
                  <motion.li key={text} whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                    <Link
                      className="text-base font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      to="/"
                    >
                      {text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;