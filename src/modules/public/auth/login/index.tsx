import { useEffect, useState } from "react";
import {
  EyeClose,
  EyeOpen,
  GoogleIcon,
  Logo,
} from "../../../../assets/svgAssets";
import { Input, Button } from "../../../../generalComponents";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../../../../schemas/loginSchema";
import ROUTES from "../../../../constants/routes";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../../api/auth";
import { showErrorToast, showSuccessToast } from "../../../../lib/toastUtils";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      if (res?.response?.data?.status === "fail") {
        return showErrorToast(res.response.data.message);
      }

      showSuccessToast(res.message);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate(ROUTES.PRICING);
    },
    onError: (err) => {
      console.log("login error", err);
    },
  });

  const onSubmit = (data: LoginSchema) => {
    loginUser(data);
  };

  useEffect(() => {
    document.title = "Login | FinConnect";
  }, []);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <main className="w-full bg-surface min-h-screen flex items-center justify-center py-16 px-4 sm:px-0">
      <div className="px-4 w-full p-12 sm:px-12 bg-neutral-0 dark:bg-neutral-950 dark:border-neutral-800 max-w-[540px]  flex flex-col gap-4 border border-neutral-200 rounded-xl shadow-lg dark:shadow-none">
        <div className="flex justify-center text-primary-text">
          <Logo />
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-preset-1 font-bold text-primary-text">
            Welcome to FinConnect
          </h2>
          <p className="text-preset-4 text-secondary-text">
            Please log in to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 pt-6"
        >
          <Input
            placeholder="email@example.com"
            label="Email Address"
            registerProps={register("email")}
            error={errors.email?.message}
          />
          <Input
            postIcon={
              <span
                className="text-primary-text"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
              >
                {isPasswordVisible ? (
                  <EyeOpen width={20} height={20} />
                ) : (
                  <EyeClose width={20} height={20} />
                )}
              </span>
            }
            label="Password"
            type={isPasswordVisible ? "text" : "password"}
            error={errors.password?.message}
            registerProps={register("password")}
          />
          <Button type="submit" label={isPending ? "Logging in..." : "Login"} />
        </form>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
          <p className="text-preset-4 text-secondary-text">Or Log in with:</p>
          <a
            href={import.meta.env.VITE_GOOGLE_AUTH_URL}
            className="py-4 px-5 flex items-center justify-center h-12 rounded-xl border border-neutral-300 dark:border-neutral-600 self-stretch"
          >
            <span className="text-primary-text">
              <GoogleIcon />
            </span>
            <span className="px-4 text-primary-text">Google</span>
          </a>
        </div>

        <div className="mt-4 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center gap-4">
          <p className="text-preset-4 text-secondary-text">
            No account yet?{" "}
            <span className="text-blue-500 underline">
              <Link to={ROUTES.REGISTER}>Register</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
