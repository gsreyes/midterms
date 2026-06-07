import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'


const skillsData = {
  Frontend: {
    icon: <FaCode className="text-pink-600 dark:text-pink-400" size={24} />,
    skills: [
      { name: 'HTML/CSS', level: 75 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 75 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  Backend: {
    icon: <FaServer className="text-pink-600 dark:text-pink-400" size={24} />,
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'Laravel', level: 70 },
      { name: 'MySQL', level: 80 }, 
    ]
  },
  Tools: {
    icon: <FaTools className="text-pink-600 dark:text-pink-400" size={24} />,
    skills: [
      { name: 'GitHub', level: 90 },
      { name: 'Git', level: 80 },
      { name: 'Jira', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 85 },
      { name: 'XAMPP', level: 90 },
      { name: 'WAMP', level: 90 },
    ]
  }
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const categories = ['Frontend', 'Backend', 'Tools']

  const currentSkills = skillsData[activeCategory].skills

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pb-8 text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-pink-600 dark:text-pink-400">Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-200 dark:shadow-pink-900/30'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:border-pink-400 dark:hover:border-pink-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-pink-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-2 mb-3">
                  {skillsData[activeCategory].icon}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="flex justify-self-end items-center mb-1">
                    <span className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-pink-400 to-pink-600 dark:from-pink-500 dark:to-pink-700 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills;