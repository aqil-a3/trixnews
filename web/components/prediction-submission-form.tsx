"use client"

import * as React from "react"
import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitPrediction } from "@/app/actions/prediction" // Import the server action
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available
import { CheckCircle2 } from "lucide-react" // Import a checkmark icon for success message

export default function PredictionSubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitPrediction, null)
  const { toast } = useToast()
  const formRef = React.useRef<HTMLFormElement>(null)
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false) // State for in-form success message

  React.useEffect(() => {
    if (state?.success) {
      toast({
        title: "Submission Successful!",
        description: "Your new prediction has been received and is awaiting admin review.",
        variant: "default",
      })
      formRef.current?.reset() // Reset form fields on success
      setShowSuccessMessage(true) // Show in-form success message
      const timer = setTimeout(() => {
        setShowSuccessMessage(false) // Hide it after 3 seconds
      }, 3000)
      return () => clearTimeout(timer) // Cleanup the timer
    } else if (state?.success === false) {
      toast({
        title: "Submission Failed",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Prediction</h2>
      <p className="text-gray-700 mb-6">
        Share your analysis and predictions about the crypto market or Web3 trends. Submissions will be reviewed by our
        admins.
      </p>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="authorName">Author Name (or Anonymous)</Label>
          <Input id="authorName" name="authorName" type="text" placeholder="Ex: John Doe" />
        </div>
        <div>
          <Label htmlFor="contactEmail">Contact Email (Will not be published)</Label>
          <Input id="contactEmail" name="contactEmail" type="email" required placeholder="name@email.com" />
        </div>
        <div>
          <Label htmlFor="title">Prediction Title</Label>
          <Input id="title" name="title" type="text" required placeholder="Ex: Bitcoin Will Reach $100K" />
        </div>
        <div>
          <Label htmlFor="summary">Short Summary</Label>
          <Textarea id="summary" name="summary" required rows={2} placeholder="A brief summary of your prediction..." />
        </div>
        <div>
          <Label htmlFor="predictionContent">Full Prediction Content</Label>
          <Textarea
            id="predictionContent"
            name="predictionContent"
            required
            rows={8}
            placeholder="Write your full analysis and arguments here..."
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Prediction"}
        </Button>
        {showSuccessMessage && (
          <div className="mt-4 flex items-center justify-center text-green-600 font-medium">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            <span>Submission successful!</span>
          </div>
        )}
      </form>
    </div>
  )
}
