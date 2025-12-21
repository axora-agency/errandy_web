import { useState } from "react";
import { Link } from "react-router-dom";
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
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/validations";
import { Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { ToastMessage } from "@/components";
import { Logo } from "@/assets";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      // In a real app, you would call your password reset API here
      // For demo purposes, we'll simulate sending an email
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsEmailSent(true);
      toast.success(
        <ToastMessage
          title="Reset link sent"
          description="Check your email for a password reset link."
        />
      );
    } catch (error) {
      toast.error(
        <ToastMessage
          title="Failed to send reset link"
          description="An error occurred. Please try again."
        />
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
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
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <img src={Logo} alt="Errandy" className="size-12" />
                  <span className="sr-only">Errandy</span>
                </a>
                <h1 className="text-xl font-bold">Check your email</h1>
                <FieldDescription>
                  We've sent a password reset link to your email address
                </FieldDescription>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-gray-600">
                  If you don't see the email, check your spam folder or try
                  again.
                </p>
                <Field>
                  <Button
                    onClick={() => setIsEmailSent(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Try again
                  </Button>
                </Field>
                <Field>
                  <Link to="/auth/login">
                    <Button variant="ghost" className="w-full">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to login
                    </Button>
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
                <a
                  href="#"
                  className="flex flex-col items-center gap-2 font-medium"
                >
                  <img src={Logo} alt="Errandy" className="size-12" />
                  <span className="sr-only">Errandy</span>
                </a>
                <h1 className="text-xl font-bold">Forgot your password?</h1>
                <FieldDescription>
                  Enter your email address and we'll send you a link to reset
                  your password
                </FieldDescription>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </Field>

              <Field>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>
              </Field>

              <div className="text-center">
                <Link
                  to="/auth/login"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <ArrowLeft className="h-4 w-4 inline mr-1" />
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
