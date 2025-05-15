"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-full animated-gradient opacity-20"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 gradient-text">
            加入 NarrFlow，开启协作创作之旅
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            连接钱包，立即参与故事创作和投票，获得代币奖励，成为去中心化叙事的一部分
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="animated-gradient text-white">
              立即开始
            </Button>
            <Button size="lg" variant="outline">
              查看故事库
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
