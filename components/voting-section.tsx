"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, Clock, Award, AlertCircle } from "lucide-react"

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

export function VotingSection() {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Calculate progress percentage
  const progressPercentage = ((300 - timeLeft) / 300) * 100

  // Handle vote
  const handleVote = () => {
    if (selectedProposal !== null && !hasVoted) {
      setHasVoted(true)
      // Here you would normally send the vote to the backend
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">当前投票</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">参与社区投票，决定故事的下一个发展方向</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 overflow-hidden">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">第三章：下一段落投票</CardTitle>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
                </div>
              </div>
            </CardHeader>
            <div
              className="h-2 w-full progress-bar"
              style={{ "--progress": `${progressPercentage}%` } as React.CSSProperties}
            ></div>
            <CardContent className="p-6">
              <div className="prose dark:prose-invert max-w-none mb-6">
                <h3 className="text-lg font-medium mb-2">当前故事内容：</h3>
                <p>
                  在一个遥远的王国，年轻的冒险家艾伦发现了一张古老的地图。地图上标记着一个被遗忘的神庙，据说里面藏有强大的魔法宝物。艾伦决定踏上寻宝之旅，但他不知道的是，这个神庙已经被诅咒了数百年...
                </p>
                <p>
                  艾伦准备了充足的补给，带上了他父亲留给他的宝剑，踏上了旅程。经过三天的跋涉，他终于来到了地图上标记的山脉。在密林深处，他看到了神庙的入口，古老的石柱上刻满了神秘的符文。
                </p>
              </div>

              <h3 className="text-lg font-medium mb-4">请为下一段落投票：</h3>

              <div className="space-y-4">
                {proposals.map((proposal) => (
                  <motion.div
                    key={proposal.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedProposal === proposal.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6 bg-muted/30">
              {hasVoted ? (
                <div className="flex items-center text-green-600 dark:text-green-500">
                  <Award className="h-5 w-5 mr-2" />
                  <span>投票成功！结果将在倒计时结束后公布</span>
                </div>
              ) : (
                <div className="flex items-center text-muted-foreground">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <span>投票前请先连接钱包</span>
                </div>
              )}
              <Button
                onClick={handleVote}
                disabled={selectedProposal === null || hasVoted}
                className={hasVoted ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {hasVoted ? "已投票" : "确认投票"}
              </Button>
            </CardFooter>
          </Card>

          <div className="text-center">
            <Button variant="outline" className="mr-4">
              查看历史投票
            </Button>
            <Button variant="default">提交新提案</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
