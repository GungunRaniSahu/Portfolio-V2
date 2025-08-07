import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Palette, Zap, Atom, Circle, Rocket, Flame, Database, GitBranch, Github, GitFork, Mail, Code, FileText, Server } from 'lucide-react'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Bootstrap', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'Flask', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 75 },
      ],
    },
    {
      category: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
      ],
    },
  ]

  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap',
    'Node.js', 'Express', 'Python', 'Flask', 'PHP', 'Laravel',
    'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Fork', 'Postman'
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
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1,
                        }}
                        className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full animate-gradient-shift"
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
          <h3 className="text-3xl font-bold mb-12">Technologies & Tools</h3>
          
                    {/* Fixed Grid Tech Stack */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-dark-100 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-300 text-center"
                >
                  <div className="text-primary-500 mb-3 flex justify-center">
                    {tech === 'HTML' && <Globe size={24} />}
                    {tech === 'CSS' && <Palette size={24} />}
                    {tech === 'JavaScript' && <Zap size={24} />}
                    {tech === 'React' && <Atom size={24} />}
                    {tech === 'Node.js' && <Circle size={24} />}
                    {tech === 'Express' && <Rocket size={24} />}
                    {tech === 'Python' && <Code size={24} />}
                    {tech === 'Flask' && <Flame size={24} />}
                    {tech === 'PHP' && <FileText size={24} />}
                    {tech === 'Laravel' && <Server size={24} />}
                    {tech === 'MySQL' && <Database size={24} />}
                    {tech === 'MongoDB' && <Database size={24} />}
                    {tech === 'PostgreSQL' && <Database size={24} />}
                    {tech === 'Git' && <GitBranch size={24} />}
                    {tech === 'GitHub' && <Github size={24} />}
                    {tech === 'Fork' && <GitFork size={24} />}
                    {tech === 'Postman' && <Mail size={24} />}
                    {!['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Python', 'Flask', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Fork', 'Postman'].includes(tech) && <Code size={24} />}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
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