"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { usePresaleFormLogics } from "./logics";

export default function PresaleSubmissionForm() {
  const { form, onSubmit } = usePresaleFormLogics();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Submit Your Presale
      </h2>
      <p className="text-gray-700 mb-6">
        Fill out the form below to submit your token presale. Submissions will
        be reviewed by our admins.
      </p>
      <div
        className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6"
        role="alert"
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.534 2.745-1.534 3.51 0l.757 1.519a4.5 4.5 0 01.086.112l.924 1.848c.243.487.196 1.08-.11 1.498l-.757 1.519c-.765 1.534-2.745 1.534-3.51 0l-.757-1.519a4.5 4.5 0 01-.11-.112l-.924-1.848c-.243-.487-.196-1.08.11-1.498l.757-1.519zM12 9a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              As part of Trixnews.com's commitment to building a secure,
              transparent, and fraud-free Web3 ecosystem, all token presale
              projects wishing to be recommended to our community must undergo a
              strict Identity Verification (KYC) process. This step ensures that
              every token we feature has passed due diligence and integrity
              checks, providing greater confidence to potential investors. We
              are dedicated to creating a clean and trustworthy environment for
              all users.
            </p>
          </div>
        </div>
      </div>

      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="businessEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@company.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokenName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Ethereum, Solana" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="presaleSite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Presale Site</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: https://your-presale-link.com"
                    {...field}
                  />
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
                <FormLabel>Short Token/Project Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Describe your project..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokenSupply"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Token Supply</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Ex: 100000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="presaleStartDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presale Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="presaleEndDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presale End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="softCap"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Soft Cap (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ex: 500000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hardCap"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hard Cap (USD)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Ex: 1500000" {...field} />
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
            {form.formState.isSubmitting ? "Submitting..." : "Submit Presale"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
