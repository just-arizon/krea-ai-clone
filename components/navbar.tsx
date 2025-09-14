import { Button } from "@/components/ui/button";
import {
  Bell,
  User,
  Home,
  Bookmark,
  Settings,
  ImageIcon,
  Video,
  Wand2,
  Edit3,
} from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full fixed z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                K
              </span>
            </div>
          </div>
        </div>

        <nav
          className="hidden md:flex items-center gap-1 py-2 px-4 rounded-2xl
  border border-border 
 dark:bg-black
 
 "
        >
          <Button variant="ghost" size="sm" className="gap-2">
            <Home className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Video className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit3 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Wand2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ImageIcon className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <span>Gallery</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <span>Support</span>
          </Button>
          <Bell className="w-5 h-5 text-muted-foreground" />
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
