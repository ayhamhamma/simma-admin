"use client";

import { LoginForm } from "../../../src/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Welcome to Simma</h1>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>
      
      <LoginForm />
    </div>
  );
} 