"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PenTool, ThumbsUp, Trophy, TrendingUp } from "lucide-react"

export function RewardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">代币奖励</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">参与 NarrFlow 平台，获得丰厚的代币奖励</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>创作奖励</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">提交提案并被社区采纳，获得代币奖励</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    标题提案：50 代币
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    段落提案：30 代币
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    提案被采纳：额外 20 代币
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>投票奖励</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">参与投票，为社区贡献价值判断</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    每次投票：5 代币
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    投票给获胜提案：额外 3 代币
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    连续参与投票：额外奖励
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>排行榜奖励</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">在创作者排行榜上获得高名次</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    周榜第一名：200 代币
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    周榜前十名：100 代币
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    月榜前三名：500 代币
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full card-hover">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>代币用途</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">平台代币的多种用途</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    创建专属故事集
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    提高投票权重
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    兑换平台特权和NFT
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
