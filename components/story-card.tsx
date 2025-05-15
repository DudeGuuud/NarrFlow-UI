"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, ThumbsUp, MessageSquare, BookOpen } from "lucide-react"

interface StoryCardProps {
  title: string
  excerpt: string
  author: string
  authorName: string
  views: number
  likes: number
  comments: number
  chapters: number
  tags: string[]
  isCompleted: boolean
  language?: "zh" | "en"
}

export function StoryCard({
  title,
  excerpt,
  author,
  authorName,
  views,
  likes,
  comments,
  chapters,
  tags,
  isCompleted,
  language = "zh",
}: StoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden transition-shadow duration-300 shadow-sm hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-2">
            <Badge variant={isCompleted ? "default" : "outline"} className="mb-2">
              {isCompleted ? "已完结" : "连载中"}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{chapters} 章节</span>
            </div>
          </div>
          <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={`https://api.dicebear.com/7.x/shapes/svg?seed=${author}`} />
              <AvatarFallback>{authorName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{authorName}</span>
          </div>
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Eye className="h-3.5 w-3.5 mr-1" />
              <span>{views}</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-3.5 w-3.5 mr-1" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span>{comments}</span>
            </div>
          </div>
        </CardFooter>

        <motion.div
          className="absolute inset-0 bg-primary/90 flex items-center justify-center p-6 opacity-0"
          animate={{ opacity: isHovered ? 0.95 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-center text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm mb-4">{excerpt}</p>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary ripple"
              onClick={() => (window.location.href = `/stories/${title.replace(/\s+/g, "-").toLowerCase()}`)}
            >
              {language === "zh" ? "阅读故事" : "Read Story"}
            </Button>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  )
}
