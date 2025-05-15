"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Globe, Wallet, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [language, setLanguage] = useState("zh")

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mock wallet connection
  const handleConnectWallet = () => {
    setIsConnected(true)
    setWalletAddress("0x1a2b...3c4d")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="NarrFlow Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold font-serif">NarrFlow</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/stories" className="text-sm font-medium hover:text-primary transition-colors">
              探索故事
            </Link>
            <Link href="/create" className="text-sm font-medium hover:text-primary transition-colors">
              创建故事
            </Link>
            <Link href="/vote" className="text-sm font-medium hover:text-primary transition-colors">
              参与投票
            </Link>
            <Link href="/rewards" className="text-sm font-medium hover:text-primary transition-colors">
              代币奖励
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>{language === "zh" ? "中文" : "English"}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("zh")}>中文</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ModeToggle />

            {isConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Wallet className="h-4 w-4 mr-1" />
                    {walletAddress}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>我的提案</DropdownMenuItem>
                  <DropdownMenuItem>我的奖励</DropdownMenuItem>
                  <DropdownMenuItem>断开连接</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={handleConnectWallet} size="sm" className="glow">
                <Wallet className="h-4 w-4 mr-2" />
                连接钱包
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/stories"
                className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                探索故事
              </Link>
              <Link
                href="/create"
                className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                创建故事
              </Link>
              <Link
                href="/vote"
                className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                参与投票
              </Link>
              <Link
                href="/rewards"
                className="text-sm font-medium p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                代币奖励
              </Link>

              <div className="flex items-center justify-between pt-2 border-t">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Globe className="h-4 w-4 mr-1" />
                  中文
                </Button>

                <ModeToggle />

                {isConnected ? (
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Wallet className="h-4 w-4 mr-1" />
                    {walletAddress}
                  </Button>
                ) : (
                  <Button onClick={handleConnectWallet} size="sm">
                    <Wallet className="h-4 w-4 mr-2" />
                    连接钱包
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
