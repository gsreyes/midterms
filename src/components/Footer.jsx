import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-50 text-sm">
            © {new Date().getFullYear()} Gianna Cristina Reyes. WEBPROG.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;