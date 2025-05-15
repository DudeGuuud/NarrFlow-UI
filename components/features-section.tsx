"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Vote, Coins, Shield, Clock, Smartphone, Globe, BookOpen } from "lucide-react"

const features = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "协作创作",
    description: "多人参与故事创作，共同决定情节发展",
  },
  {
    icon: <Vote className="h-6 w-6" />,
    title: "投票机制",
    description: "社区投票选出最佳段落提案，确保高质量内容",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "代币奖励",
    description: "创作者和参与者可获得代币奖励",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "链上治理",
    description: "投票和决策透明，永久记录在区块链上",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "倒计时投票",
    description: "带有可视化进度条的倒计时投票机制",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "移动友好",
    description: "响应式设计，支持多端访问",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "多语言支持",
    description: "内置中英文界面切换",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "故事探索",
    description: "浏览和阅读社区创作的精彩故事",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">平台特色</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            NarrFlow 结合了创作自由与社区共识机制，打造全新的协作叙事体验
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
