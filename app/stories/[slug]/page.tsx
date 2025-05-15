"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, ThumbsUp, MessageSquare, Share2 } from "lucide-react"

// Mock story data
const storyContent = {
  "xing-ji-mi-hang-wei-zhi-de-bian-jie": {
    title: "星际迷航：未知的边界",
    author: "星际作家",
    chapters: [
      {
        title: "第一章：神秘的信号",
        content: `在浩瀚的宇宙中，人类探索舰队"先锋号"正在进行例行巡航任务。舰长亚历克斯·陈站在舰桥上，望着前方无尽的星空，思绪万千。

        "舰长，我们接收到一个奇怪的信号。"通讯官玛丽亚突然报告道，"来源不明，但信号强度很高，似乎是从银河系边缘传来的。"
        
        亚历克斯皱起眉头，走到控制台前。屏幕上显示着一串复杂的数据流，闪烁的光点标记着信号的来源位置。
        
        "能解码吗？"他问道。
        
        玛丽亚摇摇头："信号模式与我们已知的所有通讯协议都不匹配。但有一点很奇怪，它似乎在以某种规律重复。"
        
        科学官李维走过来，仔细研究着数据。"这不像是自然现象，"他说，"更像是某种人工信号。舰长，我建议我们改变航向，前往信号源调查。"
        
        亚历克斯沉思片刻。探索未知正是"先锋号"的使命，但这也可能是一个陷阱。然而，好奇心最终战胜了谨慎。
        
        "导航，设定新航线，目标是信号源。"他下令道，"全体人员进入警戒状态。"
        
        "先锋号"调整航向，加速驶向那个神秘的坐标。没有人知道等待他们的将是什么，但每个船员的心中都燃起了探索的火焰。
        
        在接下来的三周里，"先锋号"穿越了几个鲜为人知的星系。随着他们接近目标，信号变得越来越清晰，但其含义仍然是个谜。
        
        终于，在第二十三天，导航员宣布："舰长，我们即将到达信号源所在的星系。"
        
        亚历克斯命令减速，舰船缓缓驶入一个被浓密星云包围的区域。当星云散开时，所有人都屏住了呼吸。
        
        在他们面前，漂浮着一个巨大的、明显是人工建造的结构。它呈环形，表面覆盖着复杂的图案和符号，中心是一个旋转的能量核心，发出脉动的蓝光。
        
        "天啊，"李维惊叹道，"这是一个星门。"`,
      },
      {
        title: "第二章：初次接触",
        content: `"先锋号"保持安全距离，谨慎地观察着这个巨大的星门结构。科学小组忙着收集数据，试图理解这个明显超越人类当前科技水平的建筑。

        "初步分析显示，这个结构至少有几千年的历史，"李维报告道，"但它仍然是活跃的，能量读数显示它处于某种待机状态。"
        
        亚历克斯凝视着主屏幕上的星门影像。"有任何关于建造者的线索吗？"
        
        "表面的符号可能是某种语言，但与我们数据库中的任何已知文明都不匹配，"语言学家索菲亚说，"我需要更多时间来分析。"
        
        就在这时，星门的能量核心突然变亮，蓝光转为明亮的紫色。整个结构开始以更快的速度旋转。
        
        "舰长，能量水平正在上升！"工程师汉森大声警告，"它似乎被激活了！"
        
        "红色警戒！准备撤离！"亚历克斯立即命令道。
        
        但还没等"先锋号"转向，一道光束从星门射出，扫描了整艘飞船。所有系统瞬间关闭，然后又恢复正常。
        
        "它...扫描了我们，"李维惊讶地说，"似乎是在评估我们。"
        
        主屏幕上突然出现了一系列闪烁的符号，然后变成了人类可以理解的文字："欢迎，探索者。准备接收。"
        
        还没等任何人反应过来，一个全息投影出现在舰桥中央。它呈现出一个高大的类人形生物，皮肤呈半透明的蓝色，有着细长的四肢和一个没有嘴的椭圆形头部。
        
        "我们是守护者，"一个平静的声音在所有人的脑海中响起，"这个星门已等待合适的文明到来已有百万年之久。你们通过了初步测试。"
        
        亚历克斯小心地向前一步："我是亚历克斯·陈，地球联合探索舰队'先锋号'的舰长。我们是和平的探索者。"
        
        "我们知道，"守护者回应道，"你们的好奇心和探索精神引导你们来到这里。星门是通往银河网络的入口，连接着数百个星系和文明。"
        
        舰桥上的每个人都惊讶地交换着眼神。这意味着人类不再孤独，宇宙中存在着一个完整的文明网络。
        
        "为什么选择我们？"亚历克斯问道。
        
        "每个星门都被设计为在特定文明达到必要的技术和文化发展水平时激活。你们的种族已经准备好了。"守护者解释道，"现在，你们面临一个选择：是否加入网络，与其他文明交流和学习。"
        
        亚历克斯深吸一口气。这个决定将改变人类的命运。"这个选择不仅仅是我一个人能做的，"他说，"我需要与我的政府商议。"
        
        守护者点头："理解。我们将等待。但要记住，一旦选择加入，就没有回头路。准备好接受知识，也准备好面对挑战。"
        
        随着这些话，全息投影消失了，只留下震惊的船员和一个巨大的问题：人类是否准备好迈出这一步？`,
      },
      {
        title: "第三章：星门的秘密",
        content: `在与守护者接触后的几天里，"先锋号"的船员们忙于分析收集到的数据，并通过量子通讯与地球总部保持联系。亚历克斯面临着巨大的压力，他知道自己的决定将影响整个人类的未来。

        科学小组发现星门表面的符号实际上是一种数学语言，包含着关于星门网络的信息。李维和他的团队日夜工作，试图解码这些信息。
        
        "根据我们的分析，"李维在一次简报会上说，"星门网络连接了至少500个恒星系统，分布在银河系的多个旋臂上。每个系统都有智能生命，技术水平各不相同。"
        
        "有任何威胁吗？"安全官罗德里格斯问道。
        
        "数据中没有明确提到战争或冲突，"李维回答，"但也没有保证和平。就像地球上的国家一样，不同文明之间可能有各种关系。"
        
        与此同时，工程团队研究着星门的能量机制。"这种技术至少比我们先进几千年，"首席工程师汉森说，"它似乎利用了亚空间能量，这是我们理论上知道但从未能够利用的能源。"
        
        在第五天，守护者再次出现。"你们的决定是什么？"它直接问道。
        
        亚历克斯站起身来："我们需要更多信息。加入网络对我们意味着什么？有什么规则或义务？"
        
        "网络基于知识和资源的自由交流，"守护者解释，"每个成员文明都贡献自己的发现和技术，同时也受益于其他文明的贡献。没有中央政府，但有共同遵守的协议。"
        
        "那么守护者是什么？"亚历克斯追问。
        
        "我们是网络的创建者和维护者，"守护者回答，"我们不干涉成员文明的内部事务，只确保网络的稳定运行。"
        
        亚历克斯思考着这些信息。地球总部已经给了他一定的决策权，但他仍然犹豫。
        
        "在我们做出最终决定之前，"他说，"我们能否先了解更多关于网络中其他文明的情况？"
        
        守护者沉默了一会儿，然后点头："合理的请求。我将提供关于最接近你们技术水平的三个文明的基本信息。"
        
        一系列全息影像出现在舰桥上，展示了三个截然不同的外星种族及其世界。第一个是水生文明，生活在完全被海洋覆盖的行星上；第二个是类昆虫的集体智能；第三个则与人类相似，但有着蓝色的皮肤和四只眼睛。
        
        "这些文明都在过去一千年内加入了网络，"守护者解释，"它们都经历了类似的技术发展路径，尽管文化和生物学特征各不相同。"
        
        亚历克斯和他的高级军官们仔细研究着这些信息。这是人类第一次确认宇宙中存在其他智能生命，而且不止一个。
        
        "如果我们决定加入，"亚历克斯问，"下一步是什么？"
        
        "星门将被完全激活，允许你们的飞船通过，"守护者回答，"你们将收到导航数据，可以访问网络中的任何开放系统。同时，其他文明也将知道你们的存在，可能会寻求接触。"
        
        亚历克斯深吸一口气，看着他的船员们。他们的眼中既有恐惧，也有期待。这是一个巨大的未知，但也是一个无与伦比的机会。
        
        "我们需要最后商议，"他对守护者说，"明天会给你答复。"
        
        当守护者的影像消失后，亚历克斯召集了所有部门主管。经过彻夜讨论，权衡利弊，他们终于达成了共识。
        
        第二天，面对再次出现的守护者，亚历克斯代表人类做出了历史性的宣告："我们接受邀请，加入星门网络。"`,
      },
    ],
  },
}

export default function StoryPage() {
  const { slug } = useParams()
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [language, setLanguage] = useState("zh")

  const story = storyContent[slug as string]

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{language === "zh" ? "故事未找到" : "Story Not Found"}</h1>
            <Button onClick={() => (window.location.href = "/stories")}>
              {language === "zh" ? "返回故事列表" : "Back to Stories"}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const nextChapter = () => {
    if (currentChapter < story.chapters.length - 1) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentChapter(currentChapter + 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentChapter(currentChapter - 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold font-serif">{story.title}</h1>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {language === "zh" ? "作者：" : "Author: "}
                  {story.author}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {language === "zh" ? "章节" : "Chapter"} {currentChapter + 1}/{story.chapters.length}
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="bg-primary/10 p-4 border-b">
                <h2 className="text-xl font-bold">{story.chapters[currentChapter].title}</h2>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentChapter}
                  initial={{ opacity: 0, rotateY: isFlipping ? -90 : 0 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 book-page-turn"
                >
                  <div className="prose dark:prose-invert max-w-none">
                    {story.chapters[currentChapter].content.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t p-4 flex justify-between">
                <Button
                  onClick={prevChapter}
                  disabled={currentChapter === 0}
                  variant="outline"
                  className="flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  {language === "zh" ? "上一章" : "Previous"}
                </Button>
                <Button
                  onClick={nextChapter}
                  disabled={currentChapter === story.chapters.length - 1}
                  variant="outline"
                  className="flex items-center"
                >
                  {language === "zh" ? "下一章" : "Next"}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
