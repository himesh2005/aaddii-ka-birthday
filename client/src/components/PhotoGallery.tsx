import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import all photos
import photo1 from "@assets/IMG-20250806-WA0010_1754482523997.jpg";
import photo2 from "@assets/IMG-20250806-WA0011_1754482523998.jpg";
import photo3 from "@assets/IMG-20250806-WA0012_1754482523998.jpg";
import photo4 from "@assets/IMG-20250806-WA0013_1754482523998.jpg";
import photo5 from "@assets/IMG-20250806-WA0014_1754482523999.jpg";
import photo6 from "@assets/WhatsApp Image 2025-08-06 at 17.31.41_94e69d0c_1754482523999.jpg";
// Additional photos
import photo7 from "@assets/IMG-20250806-WA0004_1754483080144.jpg";
import photo8 from "@assets/IMG-20250806-WA0006_1754483080145.jpg";
import photo9 from "@assets/IMG-20250806-WA0007_1754483080145.jpg";
import photo10 from "@assets/IMG-20250806-WA0008_1754483080145.jpg";
import photo11 from "@assets/IMG-20250806-WA0009_1754483080145.jpg";

interface PhotoGalleryProps {
  onNext: () => void;
}

export default function PhotoGallery({ onNext }: PhotoGalleryProps) {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11];

  return (
    <div className="min-h-screen p-4 relative z-10"
         style={{
           background: "linear-gradient(135deg, rgba(135, 206, 235, 0.2) 0%, white 50%, rgba(255, 182, 193, 0.2) 100%)"
         }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 pt-12 pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-script text-5xl md:text-6xl lg:text-7xl mb-4 text-transparent bg-clip-text leading-tight"
              style={{
                backgroundImage: "linear-gradient(to right, var(--blue-royal), var(--pink-hot))",
                lineHeight: "1.2",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem"
              }}>
            Your Memories With Me
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These moments captured our journey and the memories we created 📷✨
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer photo-memory"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              {/* Polaroid-style container */}
              <div 
                className="bg-white p-3 pb-6 rounded-lg shadow-xl transform rotate-1 group-hover:rotate-0 transition-all duration-300"
                style={{
                  boxShadow: '0 8px 25px rgba(255, 105, 180, 0.15), 0 3px 10px rgba(255, 105, 180, 0.1)'
                }}
              >
                <div 
                  className="border-2 rounded overflow-hidden"
                  style={{ borderColor: 'var(--pink-custom)' }}
                >
                  <img
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '300px' }}
                  />
                </div>
                {/* Memory caption */}
                <div className="mt-2 text-center">
                  <p className="text-gray-600 text-sm font-medium">
                    Memory #{index + 1}
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 opacity-60">
                <div 
                  className="w-full h-full rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--pink-hot)' }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-gray-600 italic text-lg max-w-3xl mx-auto">
            "Every picture tells a story, and these moments captured our journey together. Time may change many things, but memories like these remain forever precious." 💫
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Button
            onClick={onNext}
            className="px-8 py-4 rounded-full text-xl font-semibold text-white hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(to right, var(--blue-royal), var(--pink-hot))"
            }}
          >
            Read Birthday Message 💌
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
