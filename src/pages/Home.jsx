import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
         
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 ">
            Hi, I'm{' '}
            <span className="text-pink-600 dark:text-pink-400 ">Gianna Cristina Reyes</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto">
           A Computer Science student exploring cybersecurity, machine learning, data analytics, and system development to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-full transition-colors animate-bounce"
            >
            View My Work
            </Link>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Home;