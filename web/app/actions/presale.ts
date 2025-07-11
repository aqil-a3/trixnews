"use server"

import { Presale } from "@/@types/Posts"

// In a real application, this would save to a database
// For demonstration, we'll just log the submission
export async function submitPresale(prevState: any, formData: FormData) {
  const businessEmail = formData.get("businessEmail") as string
  const tokenName = formData.get("tokenName") as string
  const tokenSupply = Number.parseInt(formData.get("tokenSupply") as string)
  const presaleStartDate = formData.get("presaleStartDate") as string
  const presaleEndDate = formData.get("presaleEndDate") as string
  const softCap = Number.parseInt(formData.get("softCap") as string)
  const hardCap = Number.parseInt(formData.get("hardCap") as string)
  const description = formData.get("description") as string

  // Basic validation
  if (
    !businessEmail ||
    !tokenName ||
    isNaN(tokenSupply) ||
    !presaleStartDate ||
    !presaleEndDate ||
    isNaN(softCap) ||
    isNaN(hardCap) ||
    !description
  ) {
    return { success: false, message: "All fields are required." }
  }

  // Simulate saving to a pending list (in a real app, this would go to a DB)
  const newPresaleSubmission: Presale = {
    id: `pending-${Date.now()}`, // Simple unique ID
    name: tokenName,
    description: description,
    startDate: presaleStartDate,
    endDate: presaleEndDate,
    softCap: softCap,
    hardCap: hardCap,
    tokenSupply: tokenSupply,
    status: "pending", // Always pending for admin approval
    contactEmail: businessEmail,
  }

  console.log("New Presale Submission for Admin Approval:", newPresaleSubmission)

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    message: "Your presale submission has been received and is awaiting admin approval.",
  }
}
