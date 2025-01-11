import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth/welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E7] to-[#FFE6F3] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="text-center space-y-8"
      >
        <img
          src="/lovable-uploads/f5f0433b-454b-4240-8e58-f20d8836ec72.png"
          alt="Friendly Logo"
          className="w-64 h-auto mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default Index;