"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg p-6 bg-white rounded-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Create an Account</h2>
          <p className="text-gray-500 text-sm">Sign up to get started</p>
        </div>

        <CardContent className="mt-4 space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl"
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-xl"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
            Sign Up
          </Button>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
