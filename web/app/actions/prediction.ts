"use server"

import { Prediction } from "@/@types/Posts"


export async function submitPrediction(prevState: any, formData: FormData) {
  const authorName = (formData.get("authorName") as string) || "Anonymous"
  const contactEmail = formData.get("contactEmail") as string
  const title = formData.get("title") as string
  const summary = formData.get("summary") as string
  const predictionContent = formData.get("predictionContent") as string

  // Basic validation
  if (!contactEmail || !title || !summary || !predictionContent) {
    return { success: false, message: "All fields are required." }
  }

  // Simulate saving to a pending list (in a real app, this would go to a DB)
  const newPredictionSubmission: Prediction = {
    id: `pending-pred-${Date.now()}`, // Simple unique ID
    title: title,
    summary: summary,
    date: new Date().toISOString().split("T")[0], // Current date
    slug: title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, ""), // Basic slug generation
    author: authorName,
    predictionContent: predictionContent,
    status: "pending", // Always pending for admin approval
    contactEmail: contactEmail,
    
  }

  console.log("New Prediction Submission for Admin Approval:", newPredictionSubmission)

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    message: "Your prediction submission has been received and is awaiting admin approval.",
  }
}
