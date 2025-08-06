import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface PasswordEntryProps {
  onSuccess: () => void;
}

export default function PasswordEntry({ onSuccess }: PasswordEntryProps) {
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [showHint, setShowHint] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const answer = password.toLowerCase().trim();
    const correctAnswer = "achha";

    if (answer === correctAnswer) {
      onSuccess();
    } else {
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);

      if (newAttempts <= 0) {
        setShowHint(true);
      } else {
        setErrorMessage(`Incorrect answer. ${newAttempts} attempt(s) remaining.`);
        setTimeout(() => setErrorMessage(""), 3000);
      }
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-20"
         style={{
           background: "linear-gradient(135deg, rgba(255, 182, 193, 0.2) 0%, rgba(135, 206, 235, 0.2) 50%, rgba(255, 105, 180, 0.2) 100%)"
         }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border border-pink-300/30 shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="font-apricot text-4xl mb-4" style={{ color: "var(--pink-hot)" }}>
                🎉 Special Access 🎉
              </h1>
              <p className="text-gray-600 text-lg">Answer this question to continue:</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-3 text-center">
                  "What's the one word you always used to irritate me?"
                </label>
                <Input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center text-lg border-2 border-pink-300 focus:border-pink-500 rounded-xl bg-white"
                  placeholder="Enter your answer..."
                  maxLength={20}
                  autoComplete="off"
                  autoFocus
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "linear-gradient(to right, var(--pink-hot), var(--blue-royal))"
                }}
              >
                Enter 💕
              </Button>
            </form>

            {!showHint && (
              <div className="text-center text-sm text-gray-500 mt-4">
                Attempts remaining: <span>{attempts}</span>
              </div>
            )}

            {showHint && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
              >
                <p className="text-yellow-800 text-sm text-center">
                  <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                  Hint: The answer is <strong>"achha"</strong>
                </p>
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-sm"
                style={{ color: "var(--rose-red)" }}
              >
                {errorMessage}
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
