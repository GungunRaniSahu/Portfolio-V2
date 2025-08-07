import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/GungunRaniSahu',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gungun-rani-300667258',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Email',
      href: 'mailto:gungunsahu1976@gmail.com',
      icon: <Mail size={20} />,
    },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-300 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-6">
              Creating digital experiences that make a difference. 
              Passionate about clean code and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 dark:bg-dark-100 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>gungunsahu1976@gmail.com</p>
              <p>+91 7061842085</p>
              <p>India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-300">
            © {currentYear} Portfolio. Made with{' '}
            <Heart className="inline-block w-4 h-4 text-red-500" />{' '}
            using React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 