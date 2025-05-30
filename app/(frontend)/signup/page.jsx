"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mob_number: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email address";
    if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (form.mob_number.length < 10) errs.mob_number = "Mobile number is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the form errors.");
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("https://e-shop-api-hhqx.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.detail || "Something went wrong");

      toast.success("Account created successfully! You can now log in.");
      setForm({ name: "", email: "", password: "", mob_number: "" });
    } catch (error) {
      toast.error(error.message || "Signup failed. Please try again.");
      setErrors({ root: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-gray-200">
        <CardContent className="px-6 py-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600 text-sm">Join us by filling in your details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              {["name", "email", "password", "mob_number"].map((field) => (
                <div key={field}>
                  <Label htmlFor={field}>
                    {field === "mob_number" ? "Mobile Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                  </Label>
                  <Input
                    id={field}
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    placeholder={`Enter your ${field}`}
                    value={form[field]}
                    onChange={handleChange}
                  />
                  {errors[field] && <p className="text-red-600 text-xs mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <ReloadIcon className="h-4 w-4 animate-spin" />
                  <span>Creating account...</span>
                </>
              ) : "Sign up"}
            </Button>
          </form>

          <div className="text-center text-sm pt-4">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/login" className="text-blue-600 hover:underline">Sign in</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
