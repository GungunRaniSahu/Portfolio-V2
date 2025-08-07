import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'ChatBot',
      description: 'An intelligent chatbot application built with Python Flask and deployed on Vercel. Features natural language processing and responsive web interface.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'Flask', 'HTML', 'JavaScript', 'Vercel'],
      liveUrl: 'https://chat-bot-steel-theta.vercel.app',
      githubUrl: 'https://github.com/GungunRaniSahu/ChatBot',
      featured: true,
    },
    {
      title: 'Firebase Task Manager',
      description: 'A task management application built with Firebase for real-time data synchronization, user authentication, and cloud storage.',
      image: '/api/placeholder/400/250',
      technologies: ['Firebase', 'JavaScript', 'HTML', 'CSS', 'Real-time DB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GungunRaniSahu/Firebase-Task-Manager',
      featured: false,
    },
    {
      title: 'Job Board Platform',
      description: 'A full-stack job board application with separate frontend and backend. Features job posting, application management, and user authentication.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML', 'JavaScript', 'CSS', 'Node.js', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GungunRaniSahu/Job-Board',
      featured: true,
    },
    {
      title: 'SEO Analyzer Chrome Extension',
      description: 'A powerful Chrome extension that analyzes webpage SEO metrics including title, meta description, word count, headings, and internal links.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Chrome Extension API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GungunRaniSahu/SEO',
      featured: false,
    },
    {
      title: 'TrustAI',
      description: 'An AI-powered application focused on building trust and transparency in AI systems. Features modern UI and advanced AI integration.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'AI/ML', 'JavaScript', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GungunRaniSahu/TrustAi',
      featured: false,
    },
    {
      title: 'Token Tap',
      description: 'A cryptocurrency and token management application with real-time data tracking and portfolio management features.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'React', 'Node.js', 'API Integration'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GungunRaniSahu/Token-Tap',
      featured: false,
    },
    {
      title: 'Cricket Crunch',
      description: 'A cricket statistics and analysis application providing detailed insights into cricket matches, players, and team performance.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Sports API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/GungunRaniSahu/Cricket-Crunch',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and an opportunity to learn and grow as a software developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`bg-white dark:bg-dark-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-300 hover-lift ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary-600 dark:text-primary-400 opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Eye size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/GungunRaniSahu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 