import { useState } from 'react'
import { motion } from 'framer-motion'

const quizQuestions = [
  {
    question: "Which of these cats is the largest?",
    options: ["Lion", "Tiger", "Jaguar", "Leopard"],
    correctAnswer: 1 // Tiger (index 1)
  },
  {
    question: "What is a group of cats called?",
    options: ["A clowder", "A pride", "A pack", "A herd"],
    correctAnswer: 0 // clowder
  },
  {
    question: "How many hours a day does a cat typically sleep?",
    options: ["8-10 hours", "10-12 hours", "12-16 hours", "16-20 hours"],
    correctAnswer: 2 // 12-16 hours
  },
  {
    question: "What is the top speed a domestic cat can run?",
    options: ["20 mph", "30 mph", "40 mph", "50 mph"],
    correctAnswer: 1 // 30 mph
  },
  {
    question: "Which sense is a cat's strongest?",
    options: ["Sight", "Hearing", "Smell", "Touch"],
    correctAnswer: 1 // Hearing
  }
]

const Play = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [answered, setAnswered] = useState(false)

  const handleAnswerClick = (optionIndex) => {
    if (answered) return
    setSelectedOption(optionIndex)
    setAnswered(true)
    if (optionIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
      setSelectedOption(null)
      setAnswered(false)
    } else {
      setShowScore(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setSelectedOption(null)
    setAnswered(false)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Cat <span className="text-pink-600 dark:text-pink-400">Quiz</span>
          </h2>
          <p className="text-white dark:text-white text-center mb-8">
            Test your feline knowledge!
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            {showScore ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Quiz Complete!
                </h3>
                <p className="text-6xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                  {score}/{quizQuestions.length}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {score === quizQuestions.length
                    ? "Purrfect score! You're a cat expert!"
                    : score >= quizQuestions.length / 2
                    ? "Good job! You know your cats!"
                    : "Keep learning about our feline friends!"}
                </p>
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors"
                >
                  Play Again
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
                      Score: {score}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-pink-600 dark:bg-pink-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-3 mb-8">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={answered}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        answered && index === quizQuestions[currentQuestion].correctAnswer
                          ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-200'
                          : answered && index === selectedOption
                          ? 'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-200'
                          : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 hover:border-pink-400 dark:hover:border-pink-500 text-gray-900 dark:text-white'
                      } ${
                        answered ? 'cursor-default' : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {answered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-end"
                  >
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Play;