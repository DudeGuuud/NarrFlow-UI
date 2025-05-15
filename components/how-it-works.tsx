"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wallet, PenTool, Vote, Clock, Award, BookOpen } from "lucide-react"

const steps = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "连接钱包",
    description: "使用Sui钱包连接到平台，获得创作和投票权限",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "提交提案",
    description: "为故事创建标题或撰写下一段落内容",
  },
  {
    icon: <Vote className="h-6 w-6" />,
    title: "社区投票",
    description: "参与投票，选择你喜欢的提案",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "等待结果",
    description: "倒计时结束后，得票最高的提案将被采纳",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "获得奖励",
    description: "提案被采纳的创作者和参与投票的用户将获得代币奖励",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "故事延续",
    description: "故事继续发展，新的投票会话开始",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">如何运作</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">NarrFlow 通过简单的步骤，让每个人都能参与协作创作</p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <h3 className="text-xl font-bold mb-2 flex md:block items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 md:hidden">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="hidden md:flex items-center justify-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
