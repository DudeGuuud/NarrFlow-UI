"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, Clock, Award, AlertCircle, CheckCircle2 } from "lucide-react"

// Mock data
const proposals = [
  {
    id: 1,
    content: "主角决定前往神秘的山洞探险，寻找传说中的宝藏。",
    author: "0x1a2b...3c4d",
    votes: 24,
    authorName: "创作者A",
  },
  {
    id: 2,
    content: "主角遇到了一位神秘的老者，他告诉主角关于古老的预言。",
    author: "0x4e5f...6g7h",
    votes: 18,
    authorName: "创作者B",
  },
  {
    id: 3,
    content: "主角发现了一本古老的魔法书，书中记载着强大的咒语。",
    author: "0x8i9j...0k1l",
    votes: 32,
    authorName: "创作者C",
  },
]

interface EnhancedVotingSectionProps {
  language?: "zh" | "en"
}

export function EnhancedVotingSection({ language = "zh" }: EnhancedVotingSectionProps) {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const progressControls = useAnimation()
  const countdownRef = useRef<HTMLDivElement>(null)

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  // Update progress bar
  useEffect(() => {
    const progressPercentage = ((300 - timeLeft) / 300) * 100
    progressControls.start({ width: `${progressPercentage}%` })
  }, [timeLeft, progressControls])

  // Pulse effect for last 60 seconds
  useEffect(() => {
    if (countdownRef.current) {
      if (timeLeft <= 60) {
        countdownRef.current.classList.add("countdown-pulse")
        countdownRef.current.classList.add("text-red-500")
      } else {
        countdownRef.current.classList.remove("countdown-pulse")
        countdownRef.current.classList.remove("text-red-500")
      }
    }
  }, [timeLeft])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Handle vote
  const handleVote = () => {
    if (selectedProposal !== null && !hasVoted) {
      setHasVoted(true)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
      // Here you would normally send the vote to the backend
    }
  }

  const texts = {
    title: language === "zh" ? "当前投票" : "Current Voting",
    subtitle:
      language === "zh"
        ? "参与社区投票，决定故事的下一个发展方向"
        : "Participate in community voting to decide the next direction of the story",
    chapterTitle: language === "zh" ? "第三章：下一段落投票" : "Chapter 3: Next Paragraph Voting",
    currentStory: language === "zh" ? "当前故事内容：" : "Current Story Content:",
    voteForNext: language === "zh" ? "请为下一段落投票：" : "Please vote for the next paragraph:",
    storyContent1:
      language === "zh"
        ? "在一个遥远的王国，年轻的冒险家艾伦发现了一张古老的地图。地图上标记着一个被遗忘的神庙，据说里面藏有强大的魔法宝物。艾伦决定踏上寻宝之旅，但他不知道的是，这个神庙已经被诅咒了数百年..."
        : "In a distant kingdom, young adventurer Alan discovered an ancient map. The map marked a forgotten temple said to contain powerful magical artifacts. Alan decided to embark on a treasure hunt, but what he didn't know was that this temple had been cursed for hundreds of years...",
    storyContent2:
      language === "zh"
        ? "艾伦准备了充足的补给，带上了他父亲留给他的宝剑，踏上了旅程。经过三天的跋涉，他终于来到了地图上标记的山脉。在密林深处，他看到了神庙的入口，古老的石柱上刻满了神秘的符文。"
        : "Alan prepared ample supplies, took the sword his father left him, and set off on his journey. After three days of trekking, he finally arrived at the mountains marked on the map. Deep in the dense forest, he saw the entrance to the temple, with ancient pillars covered in mysterious runes.",
    connectWallet: language === "zh" ? "投票前请先连接钱包" : "Please connect wallet before voting",
    voteSuccess:
      language === "zh"
        ? "投票成功！结果将在倒计时结束后公布"
        : "Vote successful! Results will be announced after the countdown ends",
    confirmVote: language === "zh" ? "确认投票" : "Confirm Vote",
    voted: language === "zh" ? "已投票" : "Voted",
    viewHistory: language === "zh" ? "查看历史投票" : "View Voting History",
    submitNew: language === "zh" ? "提交新提案" : "Submit New Proposal",
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl" />
      </div>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              initial={{
                top: "0%",
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              }}
              animate={{
                top: "100%",
                left: `${Math.random() * 100}%`,
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-shimmer">{texts.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{texts.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="mb-8 overflow-hidden shadow-lg border-primary/20">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{texts.chapterTitle}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium" ref={countdownRef}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            </CardHeader>

            <div className="h-2 w-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ width: "0%" }}
                animate={progressControls}
                transition={{ duration: 0.5 }}
              />
            </div>

            <CardContent className="p-6">
              <div className="prose dark:prose-invert max-w-none mb-6">
                <h3 className="text-lg font-medium mb-2">{texts.currentStory}</h3>
                <p>{texts.storyContent1}</p>
                <p>{texts.storyContent2}</p>
              </div>

              <h3 className="text-lg font-medium mb-4">{texts.voteForNext}</h3>

              <div className="space-y-4">
                <AnimatePresence>
                  {proposals.map((proposal) => (
                    <motion.div
                      key={proposal.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedProposal === proposal.id
                          ? "border-primary bg-primary/5"
                          : hasVoted
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:bg-muted/50"
                      }`}
                      onClick={() => !hasVoted && setSelectedProposal(proposal.id)}
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`https://api.dicebear.com/7.x/shapes/svg?seed=${proposal.author}`} />
                          <AvatarFallback>{proposal.authorName.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{proposal.authorName}</span>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{proposal.votes}</span>
                            </div>
                          </div>
                          <p className="text-sm">{proposal.content}</p>
                        </div>
                        {hasVoted && selectedProposal === proposal.id && (
                          <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between border-t p-6 bg-muted/30">
              {hasVoted ? (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center text-green-600 dark:text-green-500"
                >
                  <Award className="h-5 w-5 mr-2" />
                  <span>{texts.voteSuccess}</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center text-muted-foreground"
                >
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>{texts.connectWallet}</span>
                </motion.div>
              )}
              <Button
                onClick={handleVote}
                disabled={selectedProposal === null || hasVoted}
                className={`ripple ${hasVoted ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                {hasVoted ? texts.voted : texts.confirmVote}
              </Button>
            </CardFooter>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <Button variant="outline" className="mr-4 hover-scale">
              {texts.viewHistory}
            </Button>
            <Button variant="default" className="hover-scale">
              {texts.submitNew}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
