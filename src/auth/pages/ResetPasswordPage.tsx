import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/lib/validations";
import { Eye, EyeOff, Lock, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { ToastMessage } from "@/components";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    try {
      // In a real app, you would call your password reset API here
      // For demo purposes, we'll simulate updating the password
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      toast.success(
        <ToastMessage
          title="Password updated successfully"
          description="Your password has been reset. You can now sign in with your new password."
        />
      );

      // Redirect to login after a delay
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);
    } catch (error) {
      toast.error(
        <ToastMessage
          title="Failed to reset password"
          description="An error occurred. Please try again."
        />
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="flex flex-col gap-6">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Password reset successful</h1>
                <FieldDescription>
                  Your password has been updated successfully
                </FieldDescription>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-gray-600">
                  Redirecting you to the login page...
                </p>
                <Field>
                  <Link to="/auth/login">
                    <Button className="w-full">Go to login</Button>
                  </Link>
                </Field>
              </div>
            </FieldGroup>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Reset your password</h1>
                <FieldDescription>
                  Enter your new password below
                </FieldDescription>
              </div>

              <Field>
                <FieldLabel htmlFor="password">New Password</FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    className="pl-10 pr-10"
                    {...register("password")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm New Password
                </FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    className="pl-10 pr-10"
                    {...register("confirmPassword")}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </Field>

              <Field>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update password"}
                </Button>
              </Field>

              <div className="text-center">
                <Link
                  to="/auth/login"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  Back to login
                </Link>
              </div>
            </FieldGroup>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
