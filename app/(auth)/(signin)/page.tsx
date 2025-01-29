"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  aadharNumber: z.string().min(10, { message: 'Aadhar must be at least 10 characters long' })
});

type UserFormValue = z.infer<typeof formSchema>;

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isToast, setToast] = useState(false);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [type, setType] = useState<any>(null);
  const defaultValues = {
    aadharNumber: '',
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: UserFormValue) => {
    setLoading(true)
    const obj = {
      aadharNumber: data.aadharNumber
    }
    router.push('/aadharotp');
    // const result = await login(obj);
    // if (result.status === 200) {
    //   router.push('/dashboard');
    //   setToast(true);
    //   setType('success')
    //   setMessage('Login successfully!')
    // } else {
    //   setToast(true);
    //   setType('error')
    //   setMessage(result?.data?.message)
    // }
    setLoading(false)
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
                {/* <FormLabel>Aadhaar Number</FormLabel> */}
                <FormControl>
                  <Input
                    type="number"
                    className="bg-card hover:border hover:border-slate-400 border-slate-300 w-full"
                    placeholder="Enter your Aadhaar Number..."
                    disabled={loading}
                    {...field}
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
          >
            Proceed
          </Button>
        </form>
      </Form>
    </div>
  );
}