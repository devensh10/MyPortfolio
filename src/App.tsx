import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import TasksSection from './components/sections/TasksSection';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';

const MainPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div 
      className="min-h-screen relative overflow-hidden transition-colors duration-1000"
      style={{
        background: isHovering 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          : 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Global Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: isHovering ? [1, 1.2, 1] : [1, 1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 blur-xl"
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              opacity: isHovering ? 0.1 : 0.05,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Animated Background Color Overlay */}
        <motion.div
          animate={{
            opacity: isHovering ? 0.3 : 0,
            background: isHovering 
              ? 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)' 
              : 'transparent'
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: isHovering ? [0, 20, 0] : [0, 0, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}

        {/* Animated Waves */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent opacity-10"
          style={{
            clipPath: "polygon(0 50%, 100% 0%, 100% 100%, 0% 100%)"
          }}
        />

        <motion.div
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-800 to-transparent opacity-8"
          style={{
            clipPath: "polygon(0 70%, 100% 20%, 100% 100%, 0% 100%)"
          }}
        />

        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 rounded-full blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 2) * 30}%`,
            }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-300 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              top: `${40 + i * 10}%`,
              width: '200px',
            }}
          />
        ))}

        {/* Enhanced Mouse Follow Effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            mass: 0.1,
          }}
          className="absolute w-12 h-12 bg-gradient-to-r from-blue-400/40 to-purple-400/40 dark:from-blue-300/40 dark:to-purple-300/40 rounded-full blur-xl z-50"
        />

        {/* Enhanced Interactive Ripple Effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
            scale: [0, 1.2, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute w-24 h-24 border-2 border-blue-400/50 dark:border-blue-300/50 rounded-full z-40"
        />

        {/* Second Ripple Effect */}
        <motion.div
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            scale: [0, 1.5, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="absolute w-32 h-32 border border-purple-400/30 dark:border-purple-300/30 rounded-full z-30"
        />

        {/* Cursor Trail Effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            animate={{
              x: mousePosition.x - 15 + (i * 5),
              y: mousePosition.y - 15 + (i * 5),
              scale: [0, 1, 0],
              opacity: [0, 0.3 - (i * 0.1), 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.1,
            }}
            className="absolute w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full z-20"
          />
        ))}
      </div>

      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="pt-16 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TasksSection />
        <ContactSection />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;