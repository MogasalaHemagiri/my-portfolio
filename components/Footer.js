// components/Footer.js
const Footer = () => {
  return (
    <footer id="contact" className="py-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
        <div className="space-x-4">
          <a href="mailto:hemagiri1394.in@gmail.com.com" className="hover:text-blue-500">Email</a>
          <a href="https://linkedin.com/in/mr-hemagiri" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
