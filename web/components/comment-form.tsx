"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface CommentFormProps {
  onSubmit: (comment: string) => void
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [commentText, setCommentText] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (commentText.trim()) {
      onSubmit(commentText)
      setCommentText("") // Clear the textarea after submission
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="comment">Write Your Comment</Label>
        <Textarea
          id="comment"
          placeholder="Share your thoughts..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          rows={4}
          className="mt-1"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit Comment
      </Button>
    </form>
  )
}
