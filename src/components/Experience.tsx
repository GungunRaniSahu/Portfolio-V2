import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, Code, Globe } from 'lucide-react'

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'OMX Digital',
      position: 'Software Developer Intern',
      duration: 'July 2025 - Present',
      location: 'India',
      type: 'Current Internship',
      description: 'Working on full-stack development projects, building scalable software solutions and robust applications. Contributing to system architecture and database management.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'PHP', 'Laravel', 'React', 'Express', 'Node.js', 'Fork', 'Postman', 'GitHub'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
    },
    {
      company: 'Blueminch',
      position: 'Web Developer',
      duration: 'April 2025 - June 2025',
      location: 'India',
      type: 'Internship',
      description: 'Developed responsive web applications and user interfaces. Worked on frontend development, creating intuitive and engaging user experiences.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'GitHub'],
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-600',
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development, from internships to current role. 
            Each experience has contributed to my growth as a developer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-dark-100 rounded-full border-4 border-primary-500 z-10"></div>

                {/* Experience Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mt-8 md:mt-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-gradient-to-r ${experience.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        {experience.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{experience.position}</h3>
                        <p className="text-lg opacity-90">{experience.company}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Calendar size={16} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Building size={16} />
                        <span>{experience.type}</span>
                      </div>
                    </div>

                    <p className="text-white/90 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Growth</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm opacity-90">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">13+</div>
                <div className="text-sm opacity-90">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Present</div>
                <div className="text-sm opacity-90">Currently Working</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 