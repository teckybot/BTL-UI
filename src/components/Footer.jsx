// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="p-6 bg-[#04091E] text-center">
      <p className="text-gray-500 mb-4">
        &copy; {new Date().getFullYear()} Bharat Tech. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-4">
        <a className="text-gray-500 hover:text-blue-500 transition" href="#">
          Twitter
        </a>
        <a className="text-gray-500 hover:text-blue-500 transition" href="#">
          LinkedIn
        </a>
        <a className="text-gray-500 hover:text-blue-500 transition" href="#">
          GitHub
        </a>
      </div>
    </footer>
  )
}
