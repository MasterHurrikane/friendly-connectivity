import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-200">
      {/* Top Navigation */}
      <nav className="p-6">
        <ul className="flex justify-center space-x-8 text-gray-600">
          <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">App</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Testimonials</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Friendly.app
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Where Connections Aren't Just Posts, They're Real.
            </p>
            
            <div className="space-y-4">
              {["Reach.", "Relate.", "Reconnect.", "Remember."].map((text, index) => (
                <motion.h2 
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-3xl md:text-4xl font-semibold text-gray-800"
                >
                  {text}
                </motion.h2>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-black text-white rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            >
              Download App
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 transform -rotate-6">
              <img 
                src="/lovable-uploads/4a624693-6359-4048-98fd-b42b4243e3b5.png" 
                alt="Friendly App Interface" 
                className="w-full max-w-[300px] mx-auto rounded-[2.5rem] shadow-xl"
              />
            </div>
            <div className="absolute top-20 right-0 z-0 transform rotate-6">
              <div className="w-full max-w-[300px] h-[600px] bg-pink-100 rounded-[2.5rem] shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;