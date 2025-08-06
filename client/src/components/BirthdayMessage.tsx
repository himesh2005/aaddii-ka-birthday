import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BirthdayMessageProps {
  onBackToGreeting: () => void;
}

export default function BirthdayMessage({ onBackToGreeting }: BirthdayMessageProps) {
  return (
    <div className="min-h-screen p-4 flex items-center relative z-10"
         style={{
           background: "linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(255, 182, 193, 0.2) 50%, rgba(135, 206, 235, 0.2) 100%)"
         }}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border border-pink-300/30">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="font-apricot text-3xl md:text-4xl lg:text-5xl mb-4 text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(to right, var(--rose-red), var(--pink-hot))"
                    }}>
                  A Special Message 💕
                </h1>
                <div className="w-24 h-1 mx-auto rounded-full"
                     style={{
                       background: "linear-gradient(to right, var(--pink-hot), var(--blue-royal))"
                     }}></div>
              </div>

              <motion.div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-lg md:text-xl font-medium text-center mb-8"
                   style={{ color: "var(--pink-hot)" }}>
                  Dear Aaddii,
                </p>

                <div className="space-y-6 text-base md:text-lg">
                  <p>
                    Hey aaddii it's your birthday man, happy birthday! 🎉 You told me we will celebrate together with the 2005 batch — Shreya, you and me — but the things are not right so I just made this website for you.
                  </p>

                  <p>
                    Have a good day and I will always support you. Before we were strangers and now also we are strangers, I miss you at that place sometimes but I know you need the time to heal so yes you enjoy your freedom and stay in touch.
                  </p>

                  <p>
                    I'm leaving soon, but I will try to come back again as a stranger maybe in another universe. Till then see you in your or my dream.
                  </p>

                  <p className="text-center text-xl font-semibold"
                     style={{ color: "var(--pink-hot)" }}>
                    Again wishing you a very big happy birthday! 🎂
                  </p>

                  <p className="text-center text-lg"
                     style={{ color: "var(--blue-royal)" }}>
                    Stay happy and take care. ✨
                  </p>
                </div>

                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="inline-flex items-center space-x-2 text-2xl">
                    <span>🌹</span>
                    <span>💝</span>
                    <span>🎈</span>
                    <span>✨</span>
                    <span>🦋</span>
                  </div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              onClick={onBackToGreeting}
              className="px-6 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(to right, var(--pink-custom), var(--rose-red))"
              }}
            >
              Back to Birthday Page 🎉
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
