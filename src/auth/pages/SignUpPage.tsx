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
  FieldSeparator,
} from "@/components/ui/field";
import { signUpSchema, type SignUpFormData } from "@/lib/validations";
import { auth } from "@/lib/auth";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User2,
  Contact,
} from "lucide-react";
import { toast } from "sonner";
import { ToastMessage } from "@/components";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      await auth.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        username: data.username,
      });

      toast.success(
        <ToastMessage
          title="Welcome to Errandy!"
          description="Please check your email to verify your account."
        />
      );

      // Redirect to login page
      navigate("/auth/login");
    } catch (error) {
      toast.error(
        <ToastMessage
          title="An Error occurred during sign-up"
          description="An error occurred while creating your account. Please try again."
        />
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (
    provider: "google" | "facebook" | "apple"
  ) => {
    try {
      await auth.signIn.social({
        provider,
      });
    } catch (error) {
      toast.error(
        <ToastMessage
          title="Social sign up failed"
          description={`Unable to sign up with ${provider}. Please try again.`}
        />
      );
    }
  };

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
                <h1 className="text-xl font-bold">
                  Create your Errandy account
                </h1>
                <FieldDescription>
                  Already have an account? <Link to="/auth/login">Sign in</Link>
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
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <div className="relative">
                  <Contact className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <div className="relative">
                  <User2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10"
                    {...register("username")}
                  />
                </div>
                {errors.username && (
                  <p className="text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </Field>

              <FieldSeparator>Or</FieldSeparator>

              <Field className="grid gap-4 sm:grid-cols-2">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleSocialLogin("apple")}
                  disabled={isLoading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Continue with Apple
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  disabled={isLoading}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </FieldDescription>
        </div>
      </motion.div>
    </div>
  );
}
