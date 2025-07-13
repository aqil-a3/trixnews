"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { airdropSchema } from "@/lib/schemas/airdropSchema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type AirdropFormValues = z.infer<typeof airdropSchema>;

export default function AirdropSubmissionForm() {
  const form = useForm<AirdropFormValues>({
    resolver: zodResolver(airdropSchema),
    defaultValues: {
      contactEmail: "",
      name: "",
      description: "",
      rewardAmount: "",
      officialLink: "",
      startDate: "",
      endDate: "",
    },
  });

  const onSubmit: SubmitHandler<AirdropFormValues> = async (
    values: AirdropFormValues
  ) => {
    try {
      const res = await fetch("/api/airdrop", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody?.message || "Submission failed.");
      }

      const data = await res.json();
      toast.success("Success Submit", {
        description: data.message,
      });
    } catch (error: any) {
      console.error(error);
      toast.error(error?.error ?? "Submission failed", {
        description: error.message ?? "Something went wrong.",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Submit Your Airdrop
      </h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below to submit your token airdrop. Submissions will
        be reviewed by our admins.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-sm text-yellow-700">
          As part of our commitment to maintaining neutrality and integrity, and
          ensuring security for the Web3 community, every token airdrop
          submission to be recommended by Trixnews.com must undergo a strict
          verification process.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@project.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Airdrop / Token Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: XYZ Token Airdrop" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Airdrop Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Describe the airdrop and its requirements..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rewardAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reward Amount</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 1000 ABC" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="officialLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Official Airdrop Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://officialsite.com/airdrop"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Airdrop Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Airdrop End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit Airdrop"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
