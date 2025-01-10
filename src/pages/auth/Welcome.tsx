import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="max-w-md w-full space-y-8 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Friendly</h1>
        <p className="text-lg text-gray-600">
          Your personal relationship manager for meaningful connections
        </p>
        
        <div className="pt-8 space-y-4">
          <Button 
            onClick={() => navigate("/auth/login")}
            className="w-full"
          >
            Login
            <ArrowRight className="ml-2" />
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => navigate("/auth/signup")}
            className="w-full"
          >
            Create Account
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}