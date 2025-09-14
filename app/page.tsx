import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bell,
  User,
  Home,
  Bookmark,
  Settings,
  ImageIcon,
  Video,
  Zap,
  Wand2,
  Edit3,
  ArrowUp,
  Move,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function AIGallery() {
  return (
    <div className="min-h-screen bg-background">


      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Featured Models */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* WAN 2.2 Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/20 dark:to-orange-950/20 border-0">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <img
                    src="/dramatic-portrait-woman-blonde-hair-cinematic-ligh.jpg"
                    alt="WAN 2.2 Model Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      AI MODEL
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-4xl font-bold text-white mb-2">WAN 2.2</h2>
                    <p className="text-white/90 mb-1 font-semibold">WAN 2.2 Image generation</p>
                    <p className="text-white/70 text-sm mb-4">
                      Generate countless images with the latest real and powerful WAN 2.2 model. Exceptional prompt
                      adherence and ultra-realistic textures.
                    </p>
                    <Button className="bg-white text-black hover:bg-white/90">Try WAN 2.2</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FLUX.1 Krea Card */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 border-0">
              <CardContent className="p-0">
                <div className="relative h-80">
                  <img
                    src="/wooden-gavel-hammer-justice-legal-dramatic-lightin.jpg"
                    alt="FLUX.1 Krea Model Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      AI MODEL
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-4xl font-bold text-white mb-2">Open Sour</h2>
                    <p className="text-white/90 mb-1 font-semibold">FLUX.1 Krea</p>
                    <p className="text-white/70 text-sm mb-4">
                      We are excited to unveil our FLUX.1 Krea model open source. Download and run our model weights,
                      read the technical report, or generate art in Krea Image.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-2 h-2 bg-muted rounded-full" />
          </div>
        </section>

        {/* Generate Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold">Generate</h3>
            <Button variant="ghost" className="text-primary">
              Show all
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Images */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      NEW
                    </Badge>
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Images</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate images with custom styles in Text and Instagram.
                </p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Video */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Video</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Generate videos with Haiper, Pika, Runway and all others.
                </p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Realtime */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Realtime</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Realtime AI rendering as a canvas. Instant feedback loops.
                </p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Enhancer */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-950/30 rounded-lg flex items-center justify-center">
                    <Wand2 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      NEW
                    </Badge>
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Enhancer</h4>
                <p className="text-sm text-muted-foreground mb-3">Upscale and enhance images and blend up to 2.5K.</p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Edit */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950/30 rounded-lg flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      NEW
                    </Badge>
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Edit</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Edit and change style of artwork photos and generations.
                </p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Video Upscale */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center">
                    <ArrowUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      NEW
                    </Badge>
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Video Upscale</h4>
                <p className="text-sm text-muted-foreground mb-3">Up-res any video to high quality.</p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Motion Transfer */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
                    <Move className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="text-xs">
                      NEW
                    </Badge>
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Motion Transfer</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Transfer motion from one video to animate characters.
                </p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>

            {/* Train */}
            <Card className="group hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-950/30 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <h4 className="font-semibold mb-1">Train</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Train Krea to replicate your style, products, or characters.
                </p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Open
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-semibold">Gallery</h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Large
              </Button>
              <Button variant="ghost" size="sm">
                Pricing
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">K</span>
              </div>
              <span className="font-semibold">Krea AI</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>curated by</span>
              <span className="font-semibold text-foreground">Mobbin</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
