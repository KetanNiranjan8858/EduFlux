import React from 'react';
// REMOVED: import './Footer.css'; (No longer needed)

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! It has been submitted.");
    e.target.reset(); 
  };

  const currentYear = new Date().getFullYear();

  return (
    // Main Footer Container
    <footer className="w-full bg-gray-900 text-white font-sans pt-12">
      
      {/* Footer Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-gray-700">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1. About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-blue-400 mb-4">EduFlux</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart tools for smarter learning. We are dedicated to providing personalized, AI-driven education solutions to students worldwide.
            </p>
          </div>

          {/* 2. Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">Features</a>
              </li>
              <li>
                <a href="#rewards" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">Rewards</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">Contact</a>
              </li>
            </ul>
          </div>

          {/* 3. Legal Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">Terms of Service</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">FAQ</a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-blue-400 transition duration-200 text-sm">Support</a>
              </li>
            </ul>
          </div>
          
          {/* 4. Feedback Form Section (Takes up more space on mobile/tablet) */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Leave Your Feedback</h3>
            <p className="text-gray-400 text-sm mb-4">Help us improve EduFlux. We value your honest opinion!</p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your Email (Optional)" 
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 text-sm" 
              />
              <textarea 
                placeholder="Tell us what you think..." 
                className="w-full p-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 h-24 text-sm" 
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200 text-sm shadow-md"
              >
                Submit Feedback
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Footer Bottom (Copyright and Socials) */}
      <div className="bg-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center space-y-3 md:space-y-0">
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {currentYear} EduFlux. All Rights Reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {/* Using a simple icon placeholer for clarity */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-6h2v6zm4-6h-2V7h2v4z"></path></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm2-11h-3v11h3V8zm6 11h-3v-4c0-2.21-1.79-4-4-4s-4 1.79-4 4v4H6V8h3v11zm2-11h-3V8h3v11zm2-11h-3V8h3v11z"></path></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.794-1.574 2.16-2.723-.951.554-2.005.959-3.127 1.184C18.42 1.348 16.837.5 15.014.5c-3.64 0-6.59 3.018-6.59 6.726 0 .528.06 1.042.176 1.534-5.474-.275-10.32-2.895-13.57-6.848-.567.97-.894 2.09-.894 3.328 0 2.327 1.168 4.38 2.94 5.586-.547-.015-1.066-.17-1.52-.416v.085c0 3.26 2.308 5.96 5.378 6.57-.56.155-1.155.19-1.767.067.854 2.71 3.33 4.685 6.275 4.74C13.56 21.576 11.2 22.5 8.67 22.5c-.56 0-1.107-.033-1.64-.092 2.96 1.95 6.47 3.09 10.27 3.09 12.32 0 19.01-10.428 19.01-19.467 0-.3-.008-.6-.017-.898.948-.69 1.776-1.554 2.433-2.535z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;