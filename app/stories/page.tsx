import { Navbar } from "@/components/navbar"
import { StoriesGrid } from "@/components/stories-grid"
import { Footer } from "@/components/footer"

export default function StoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <StoriesGrid />
      </main>
      <Footer />
    </div>
  )
}
