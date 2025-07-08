"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface Comment {
  id: string
  author: string
  avatarUrl: string
  date: string
  content: string
}

interface CommentListProps {
  comments: Comment[]
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
  }

  return (
    <div className="space-y-6">
      {comments.map((comment, index) => (
        <Card key={comment.id} className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatarUrl || "/placeholder.svg"} alt={comment.author} />
                <AvatarFallback>{comment.author.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-900">{comment.author}</p>
                  <p className="text-xs text-gray-500">{comment.date}</p>
                </div>
                <p className="text-gray-700 text-sm">{comment.content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
