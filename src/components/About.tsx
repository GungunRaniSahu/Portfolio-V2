import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Code, Palette, Zap } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, PHP, and Laravel.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with HTML5, CSS3, JavaScript, and modern frameworks.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Database Management',
      description: 'Working with MySQL, MongoDB, Firebase, and Neon DB for data storage and management.',
    },
    {
      icon: <User className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Analyzing complex technical problems and implementing efficient, scalable solutions.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate software developer with experience in both web development and software development internships. 
              With expertise in modern technologies and software engineering principles, I create efficient solutions that solve real-world problems.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate software developer with a strong foundation in both frontend and backend development. 
              My journey started with web development fundamentals and has evolved into full-stack software development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My approach combines solid software engineering principles with modern development practices. I believe in writing 
              clean, maintainable code and building systems that are both efficient and scalable. I'm always eager to learn 
              new technologies and solve complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Continuous Learner
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">What I Do</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Software Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Frontend Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Backend Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Database Management
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
              className="text-center p-6 bg-white dark:bg-dark-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600 dark:text-primary-400">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 