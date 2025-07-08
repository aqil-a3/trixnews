"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available for notifications

interface SocialShareButtonsProps {
  title: string
  url: string
}

export default function SocialShareButtons({ title, url }: SocialShareButtonsProps) {
  const { toast } = useToast()

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${title} #Web3News #Crypto`)
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const shareOnLinkedin = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  const copyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        })
      })
      .catch(() => {
        toast({
          title: "Failed to copy link.",
          description: "An error occurred while copying the link.",
          variant: "destructive",
        })
      })
  }

  return (
    <div className="flex flex-wrap gap-3 mt-8 items-center">
      <span className="text-gray-700 font-medium mr-2">Share:</span>
      <Button variant="outline" size="icon" onClick={shareOnTwitter} aria-label="Share on Twitter">
        <Twitter className="h-5 w-5 text-blue-500" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnFacebook} aria-label="Share on Facebook">
        <Facebook className="h-5 w-5 text-blue-600" />
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedin} aria-label="Share on LinkedIn">
        <Linkedin className="h-5 w-5 text-blue-700" />
      </Button>
      <Button variant="outline" size="icon" onClick={copyLink} aria-label="Copy Link">
        <LinkIcon className="h-5 w-5 text-gray-600" />
      </Button>
    </div>
  )
}
