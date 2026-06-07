import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import project1 from '../images/sahub.jpg'
import project2 from '../images/awak.jpg'
import project3 from '../images/anapana.png'

const projects = [
  {
    id: 1,
    title: 'SA Hub',
    description: 'An automated recordkeeping and criteria-based task assignment web-based system for student assistants',
    image: project1,
    tags: ['Bootstrap', 'PHP', 'Laravel'],
  },
  {
    id: 2,
    title: 'Anomalous Web Application Keylogger Detection Model',
    description: 'A machine learning model using SVM for detecting anomalous web application keylogger activities',
    image: project2,
    tags: ['Python', 'SVM', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  },
  {
    id: 3,
    title: 'ANAPANA',
    description: 'A research portal containing a collection of local literature and studies for Filipino researchers and students',
    image: project3,
    tags: ['HTML/CSS', 'PHP', 'MySQL'],
  },
]

const Projects = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-pink-600 dark:text-pink-400">Projects</span>
          </h2>
          <p className="text-white dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects;