"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  aadharNumber: z
    .string()
    .length(12, { message: "Aadhaar number must be exactly 12 digits" })
    .regex(/^\d+$/, { message: "Only numbers are allowed" }) // Ensures only numbers
});

type UserFormValue = z.infer<typeof formSchema>;

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const defaultValues = { aadharNumber: "" };

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: UserFormValue) => {
    setLoading(true);
    try {
      // Navigate to the OTP page
      router.push("/aadharotp");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex flex-col mt-40">
      <div className="text-center text-gray-600">
        To create a new store, complete your KYC by validating your Aadhaar number
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 mt-16 w-full"
        >
          {/* Aadhaar Number Input */}
          <FormField
            control={form.control}
            name="aadharNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    inputMode="numeric" // Mobile keyboard shows numbers
                    pattern="\d{12}" // Ensures only numbers and 12 digits
                    maxLength={12} // Prevents entering more than 12 digits
                    className="bg-card hover:border hover:border-slate-400 border-slate-300 w-full"
                    placeholder="Enter your Aadhaar Number..."
                    disabled={loading}
                    autoFocus
                    {...field}
                    onInput={(e) => {
                      // Filter out any non-digit characters
                      e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                      // Update the field value accordingly
                      field.onChange(e.currentTarget.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Proceed Button */}
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white hover:bg-blue-600"
            disabled={loading}
          >
            Proceed
          </Button>
        </form>
      </Form>
    </div>
  );
}
