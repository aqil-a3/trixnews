"use client"

import * as React from "react"
import CommentForm from "./comment-form"
import CommentList from "./comment-list"
import { Separator } from "@/components/ui/separator"

interface Comment {
  id: string
  author: string
  avatarUrl: string
  date: string
  content: string
}

export default function ArticleComments() {
  const [comments, setComments] = React.useState<Comment[]>([
    {
      id: "1",
      author: "Web3 Reader",
      avatarUrl: "/placeholder.svg?height=40&width=40&text=WR",
      date: "June 16, 2025",
      content: "Very informative article! I agree that Bitcoin ETFs are a game-changer.",
    },
    {
      id: "2",
      author: "Crypto Enthusiast",
      avatarUrl: "/placeholder.svg?height=40&width=40&text=CE",
      date: "June 16, 2025",
      content: "I wonder how regulations will affect adoption in developing countries.",
    },
  ])

  const handleAddComment = (newCommentText: string) => {
    const newComment: Comment = {
      id: String(comments.length + 1), // Simple ID generation
      author: "Anonymous User", // In a real app, this would be the logged-in user's name
      avatarUrl: "/placeholder.svg?height=40&width=40&text=AU",
      date: new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      content: newCommentText,
    }
    setComments((prevComments) => [...prevComments, newComment])
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h2>
      <CommentForm onSubmit={handleAddComment} />
      <Separator className="my-8" />
      <CommentList comments={comments} />
    </section>
  )
}
