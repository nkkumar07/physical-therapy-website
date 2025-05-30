"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"; // ✅ Toast import

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://e-shop-api-hhqx.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.detail || "Login failed"); // ✅ Show error toast
        throw new Error(errorData.detail || "Login failed");
      }

      const result = await response.json();
      localStorage.setItem("token", result.access_token);
      setToken(result.access_token);

      toast.success("Login successful!"); // ✅ Show success toast
      router.push("/products"); // ✅ Redirect to dashboard/products
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message || "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-gray-200">
        <CardContent className="px-6 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 text-sm">Please sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1" aria-live="polite">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  aria-invalid={!!errors.password}
                />
                {errors.password && (
                  <p className="text-red-600 text-xs mt-1" aria-live="polite">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <Button type="submit" className="w-full flex justify-center items-center gap-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <ReloadIcon className="h-4 w-4 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : "Sign in"}
            </Button>
          </form>

          <div className="text-center text-sm space-y-2 pt-4">
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
            <div className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
