import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In <span className="text-pink-600 dark:text-pink-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-white text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out through any of these channels
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <FaEnvelope className="mx-auto text-pink-600 dark:text-pink-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
              >
                giannacsr.02@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <FaMapMarkerAlt className="mx-auto text-pink-600 dark:text-pink-400 mb-4" size={32} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Philippines</p>
            </motion.div>

            
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;