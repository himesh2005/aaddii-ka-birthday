import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingElements from "@/components/FloatingElements";
import PasswordEntry from "@/components/PasswordEntry";
import BirthdayGreeting from "@/components/BirthdayGreeting";
import PhotoGallery from "@/components/PhotoGallery";
import BirthdayMessage from "@/components/BirthdayMessage";

export default function BirthdayPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage(1);
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, 3));
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      
      <AnimatePresence mode="wait">
        {!isAuthenticated && (
          <motion.div
            key="password"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <PasswordEntry onSuccess={handlePasswordSuccess} />
          </motion.div>
        )}

        {isAuthenticated && currentPage === 1 && (
          <motion.div
            key="greeting"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <BirthdayGreeting onNext={nextPage} />
          </motion.div>
        )}

        {isAuthenticated && currentPage === 2 && (
          <motion.div
            key="gallery"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <PhotoGallery onNext={nextPage} />
          </motion.div>
        )}

        {isAuthenticated && currentPage === 3 && (
          <motion.div
            key="message"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <BirthdayMessage onBackToGreeting={() => goToPage(1)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
