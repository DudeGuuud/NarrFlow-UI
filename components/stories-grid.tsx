"use client"

import { useState } from "react"
import { StoryCard } from "@/components/story-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

// Mock data
const stories = [
  {
    id: 1,
    title: "星际迷航：未知的边界",
    excerpt: "在浩瀚的宇宙中，人类探索舰队发现了一个神秘的星系，那里蕴藏着改变人类命运的秘密...",
    author: "0x1a2b...3c4d",
    authorName: "星际作家",
    views: 1245,
    likes: 89,
    comments: 32,
    chapters: 7,
    tags: ["科幻", "冒险", "太空"],
    isCompleted: false,
  },
  {
    id: 2,
    title: "魔法学院的日常",
    excerpt: "年轻的魔法学徒莉莉在古老的魔法学院中学习，却意外发现了学院隐藏的黑暗秘密...",
    author: "0x4e5f...6g7h",
    authorName: "魔法师",
    views: 2367,
    likes: 156,
    comments: 47,
    chapters: 12,
    tags: ["奇幻", "魔法", "校园"],
    isCompleted: true,
  },
  {
    id: 3,
    title: "荒野求生：末日之后",
    excerpt: "全球灾难后，幸存者杰克必须在荒野中求生，同时寻找失散的家人，面对各种危险和挑战...",
    author: "0x8i9j...0k1l",
    authorName: "末日生存者",
    views: 1876,
    likes: 124,
    comments: 38,
    chapters: 9,
    tags: ["末日", "生存", "冒险"],
    isCompleted: true,
  },
  {
    id: 4,
    title: "古董店的奇妙故事",
    excerpt: "城市角落的一家古董店里，每件古董都有自己的故事，店主老李见证了无数奇妙的缘分...",
    author: "0xm2n3...o4p5",
    authorName: "古董收藏家",
    views: 1532,
    likes: 103,
    comments: 29,
    chapters: 15,
    tags: ["奇幻", "日常", "悬疑"],
    isCompleted: true,
  },
  {
    id: 5,
    title: "数字侦探",
    excerpt: "网络安全专家林小雨利用自己的技术能力，在数字世界中追踪犯罪，解决各种网络谜题...",
    author: "0xq6r7...s8t9",
    authorName: "代码猎人",
    views: 1987,
    likes: 145,
    comments: 42,
    chapters: 6,
    tags: ["科技", "悬疑", "犯罪"],
    isCompleted: true,
  },
  {
    id: 6,
    title: "时间旅行者的笔记",
    excerpt: "一本神秘的笔记本记录了时间旅行者的经历，穿越不同的历史时期，见证人类文明的变迁...",
    author: "0xu0v1...w2x3",
    authorName: "时间守护者",
    views: 2198,
    likes: 178,
    comments: 53,
    chapters: 11,
    tags: ["科幻", "历史", "冒险"],
    isCompleted: true,
  },
]

export function StoriesGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [filterStatus, setFilterStatus] = useState("all")

  // Filter and sort stories
  const filteredStories = stories
    .filter((story) => {
      // Filter by search term
      const matchesSearch =
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      // Filter by status
      const matchesStatus =
        filterStatus === "all" ||
        (filterStatus === "completed" && story.isCompleted) ||
        (filterStatus === "ongoing" && !story.isCompleted)

      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      // Sort stories
      switch (sortBy) {
        case "newest":
          return b.id - a.id
        case "popular":
          return b.views - a.views
        case "mostLiked":
          return b.likes - a.likes
        case "mostComments":
          return b.comments - a.comments
        default:
          return 0
      }
    })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif mb-6">探索故事</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索故事标题、内容或标签..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">最新发布</SelectItem>
                <SelectItem value="popular">最多浏览</SelectItem>
                <SelectItem value="mostLiked">最多点赞</SelectItem>
                <SelectItem value="mostComments">最多评论</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="筛选状态" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部故事</SelectItem>
                <SelectItem value="completed">已完结</SelectItem>
                <SelectItem value="ongoing">连载中</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            excerpt={story.excerpt}
            author={story.author}
            authorName={story.authorName}
            views={story.views}
            likes={story.likes}
            comments={story.comments}
            chapters={story.chapters}
            tags={story.tags}
            isCompleted={story.isCompleted}
          />
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">没有找到匹配的故事</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setFilterStatus("all")
            }}
          >
            清除筛选条件
          </Button>
        </div>
      )}

      {filteredStories.length > 0 && (
        <div className="mt-8 text-center">
          <Button variant="outline">加载更多</Button>
        </div>
      )}
    </div>
  )
}
