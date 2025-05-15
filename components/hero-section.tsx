"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, PenTool, Vote, Award } from "lucide-react"

// Add language prop to the component
interface HeroSectionProps {
  language?: "zh" | "en"
}

export function HeroSection({ language = "zh" }: HeroSectionProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 1024 ? prev + 1 : prev))
    }, 10)

    return () => clearInterval(interval)
  }, [])

  const texts = {
    platform: language === "zh" ? "去中心化协作创作平台" : "Decentralized Collaborative Creation Platform",
    title: language === "zh" ? "共同创造，共同收获" : "Create Together, Harvest Together",
    description:
      language === "zh"
        ? "NarrFlow 让创作不再孤独，通过区块链技术实现协作叙事、社区投票和代币奖励"
        : "NarrFlow makes creation no longer lonely, enabling collaborative storytelling, community voting, and token rewards through blockchain technology",
    startCreating: language === "zh" ? "开始创作" : "Start Creating",
    learnMore: language === "zh" ? "了解更多" : "Learn More",
    storiesCreated: language === "zh" ? "故事已创建" : "Stories Created",
    paragraphsSubmitted: language === "zh" ? "段落已提交" : "Paragraphs Submitted",
    votesCompleted: language === "zh" ? "投票已完成" : "Votes Completed",
    tokensDistributed: language === "zh" ? "代币已发放" : "Tokens Distributed",
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              {texts.platform}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 gradient-text">{texts.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{texts.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="animated-gradient text-white ripple">
              {texts.startCreating}
            </Button>
            <Button size="lg" variant="outline" className="ripple">
              {texts.learnMore}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">{count}+</h3>
              <p className="text-sm text-muted-foreground">{texts.storiesCreated}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <PenTool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">{Math.floor(count * 5.7)}+</h3>
              <p className="text-sm text-muted-foreground">{texts.paragraphsSubmitted}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Vote className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">{Math.floor(count * 12.3)}+</h3>
              <p className="text-sm text-muted-foreground">{texts.votesCompleted}</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">{Math.floor(count * 8.5)}+</h3>
              <p className="text-sm text-muted-foreground">{texts.tokensDistributed}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
