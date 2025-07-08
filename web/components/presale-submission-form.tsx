"use client"

import * as React from "react"
import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitPresale } from "@/app/actions/presale" // Import the server action
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available

export default function PresaleSubmissionForm() {
  const [state, formAction, isPending] = useActionState(submitPresale, null)
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Presale</h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below to submit your token presale. Submissions will be reviewed by our admins.
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
              As part of Trixnews.com's commitment to building a secure, transparent, and fraud-free Web3 ecosystem, all
              token presale projects wishing to be recommended to our community must undergo a strict Identity
              Verification (KYC) process. This step ensures that every token we feature has passed due diligence and
              integrity checks, providing greater confidence to potential investors. We are dedicated to creating a
              clean and trustworthy environment for all users.
            </p>
          </div>
        </div>
      </div>
      <form ref={formRef} action={formAction} className="space-y-4">
        <div>
          <Label htmlFor="businessEmail">Business Email</Label>
          <Input id="businessEmail" name="businessEmail" type="email" required placeholder="name@company.com" />
        </div>
        <div>
          <Label htmlFor="tokenName">Token Name</Label>
          <Input id="tokenName" name="tokenName" type="text" required placeholder="Ex: Ethereum, Solana" />
        </div>
        <div>
          <Label htmlFor="description">Short Token/Project Description</Label>
          <Textarea
            id="description"
            name="description"
            required
            rows={3}
            placeholder="Describe your project and presale goals..."
          />
        </div>
        <div>
          <Label htmlFor="tokenSupply">Total Token Supply</Label>
          <Input id="tokenSupply" name="tokenSupply" type="number" required min="1" placeholder="Ex: 100000000" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="presaleStartDate">Presale Start Date</Label>
            <Input id="presaleStartDate" name="presaleStartDate" type="date" required />
          </div>
          <div>
            <Label htmlFor="presaleEndDate">Presale End Date</Label>
            <Input id="presaleEndDate" name="presaleEndDate" type="date" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="softCap">Soft Cap (USD)</Label>
            <Input id="softCap" name="softCap" type="number" required min="0" placeholder="Ex: 500000" />
          </div>
          <div>
            <Label htmlFor="hardCap">Hard Cap (USD)</Label>
            <Input id="hardCap" name="hardCap" type="number" required min="0" placeholder="Ex: 1500000" />
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Presale"}
        </Button>
      </form>
    </div>
  )
}
