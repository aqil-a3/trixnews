"use server"

import type { Airdrop } from "@/lib/airdrops"

export async function submitAirdrop(prevState: any, formData: FormData) {
  const contactEmail = formData.get("contactEmail") as string
  const airdropName = formData.get("airdropName") as string
  const description = formData.get("description") as string
  const rewardAmount = formData.get("rewardAmount") as string
  const officialLink = formData.get("officialLink") as string
  const airdropStartDate = formData.get("airdropStartDate") as string
  const airdropEndDate = formData.get("airdropEndDate") as string

  // Basic validation
  if (
    !contactEmail ||
    !airdropName ||
    !description ||
    !rewardAmount ||
    !officialLink ||
    !airdropStartDate ||
    !airdropEndDate
  ) {
    return { success: false, message: "All fields are required." }
  }

  // Simulate saving to a pending list (in a real app, this would go to a DB)
  const newAirdropSubmission: Airdrop = {
    id: `pending-airdrop-${Date.now()}`, // Simple unique ID
    name: airdropName,
    description: description,
    startDate: airdropStartDate,
    endDate: airdropEndDate,
    rewardAmount: rewardAmount,
    status: "pending", // Always pending for admin approval
    officialLink: officialLink,
    contactEmail: contactEmail,
    slug: airdropName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, ""), // Basic slug generation
  }

  console.log("New Airdrop Submission for Admin Approval:", newAirdropSubmission)

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    message: "Your airdrop submission has been received and is awaiting admin approval.",
  }
}
