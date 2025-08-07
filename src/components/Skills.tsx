import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 70 },
      ],
    },
    {
      category: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'Postman', level: 85 },
      ],
    },
  ]

  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'Python', 'C', 'C++',
    'MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub',
    'Express.js', 'Node.js', 'Postman', 'Tailwind CSS',
    'Bootstrap', 'PHP', 'Laravel', 'Neon DB'
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools to build robust software solutions. 
            Here's my technical expertise and skills.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-white dark:bg-dark-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1,
                        }}
                        className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
                      <h3 className="text-3xl font-bold mb-8">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-dark-100 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-300"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16 text-center"
        >
                      <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90">
                I'm constantly exploring new technologies and best practices to stay current 
                with the ever-evolving world of software development and engineering.
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 