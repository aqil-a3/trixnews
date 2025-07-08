"use client"

import * as React from "react"
import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitAirdrop } from "@/app/actions/airdrop" // Import the server action
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available

export default function AirdropSubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitAirdrop, null)
  const { toast } = useToast()
  const formRef = React.useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (state?.success) {
      toast({
        title: "Submission Successful!",
        description: state.message,
        variant: "default",
      })
      formRef.current?.reset() // Reset form fields on success
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Airdrop</h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below to submit your token airdrop. Submissions will be reviewed by our admins.
      </p>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6" role="alert">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.534 2.745-1.534 3.51 0l.757 1.519a4.5 4.5 0 01.086.112l.924 1.848c.243.487.196 1.08-.11 1.498l-.757 1.519c-.765 1.534-2.745 1.534-3.51 0l-.757-1.519a4.5 4.5 0 01-.11-.112l-.924-1.848c-.243-.487-.196-1.08.11-1.498l.757-1.519zM12 9a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              As part of our commitment to maintaining neutrality and integrity, and ensuring security for the Web3
              community, every token airdrop submission to be recommended by Trixnews.com must undergo a strict
              verification process. This is our step to build a trusted and fraud-free ecosystem.
            </p>
          </div>
        </div>
      </div>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="contactEmail">Contact Email</Label>
          <Input id="contactEmail" name="contactEmail" type="email" required placeholder="name@project.com" />
        </div>
        <div>
          <Label htmlFor="airdropName">Airdrop / Token Name</Label>
          <Input id="airdropName" name="airdropName" type="text" required placeholder="Ex: XYZ Token Airdrop" />
        </div>
        <div>
          <Label htmlFor="description">Short Airdrop Description</Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={3}
            placeholder="Describe the airdrop and its requirements..."
          />
        </div>
        <div>
          <Label htmlFor="rewardAmount">Reward Amount (Ex: 100 ABC, 0.5 ETH)</Label>
          <Input id="rewardAmount" name="rewardAmount" type="text" required placeholder="Ex: 1000 ABC" />
        </div>
        <div>
          <Label htmlFor="officialLink">Official Airdrop Link</Label>
          <Input
            id="officialLink"
            name="officialLink"
            type="url"
            required
            placeholder="https://officialsite.com/airdrop"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="airdropStartDate">Airdrop Start Date</Label>
            <Input id="airdropStartDate" name="airdropStartDate" type="date" required />
          </div>
          <div>
            <Label htmlFor="airdropEndDate">Airdrop End Date</Label>
            <Input id="airdropEndDate" name="airdropEndDate" type="date" required />
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Airdrop"}
        </Button>
      </form>
    </div>
  )
}
