import { Sparkles, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const EditPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="bg-secondary border-border/50 shadow-lg">
        <CardContent className="p-8 text-center space-y-8">

          {/* Main Content */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-foreground">Hello✨</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Welcome to the Edits section of our Krea AI clone.
            </p>
          </div>

          {/* Link */}
          <div className="pt-1 text-sm">
  
              <span className="">This is a clone version. Visit</span>
              <a
                href="https://krea.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mx-1 inline-flex items-center gap-1 font-medium"
              >
                krea.ai
                <ExternalLink className="h-3 w-3" />
              </a>
              <span className="ml-1">for the original site.</span>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditPage
