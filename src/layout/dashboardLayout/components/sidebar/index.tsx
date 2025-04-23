import { useMutation } from "@tanstack/react-query";
import { LogoutIcon } from "../../../../assets/svgAssets";
import { Button } from "../../../../generalComponents";
import { Links } from "./components";
import { LogoLink } from "./components/logo";
import { cancelSubscription } from "../../../../api/subscription";
import { showErrorToast } from "../../../../lib/toastUtils";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../constants/routes";
import { logout } from "../../../../api/auth";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { mutate: subscriptionCancel, isPending } = useMutation({
    mutationFn: cancelSubscription,
    onSuccess: (res) => {
      if (res?.response?.data?.status === "fail") {
        return showErrorToast(res.response.data.message);
      }
      navigate(ROUTES.PRICING, { replace: true });
    },
  });

  const { mutate: logoutMutate, isPending: isLoggingOut } = useMutation({
    mutationFn: logout,
    onSuccess: (res) => {
      if (res?.response?.data?.status === "fail") {
        return showErrorToast(res.response.data.message);
      }
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      navigate(ROUTES.LOGIN, { replace: true });
    },
  });

  const handleCancelSubscription = () => {
    subscriptionCancel();
  };

  const handleLogout = () => {
    logoutMutate();
  };
  return (
    <aside className="max-w-[272px] min-w-[272px] w-full h-dvh py-3 px-4 bg-surface-2 border-neutral-200 flex flex-col gap-4 border-r dark:border-neutral-800">
      <div className="py-3 px-4">
        <LogoLink />
      </div>

      <Links />
      <div className="flex flex-col gap-4">
        <Button
          variant="outlined"
          label={isPending ? "Cancelling..." : "Cancel Subscription"}
          className="w-full"
          onClick={handleCancelSubscription}
        />
        <Button
          variant="outlined"
          label={isLoggingOut ? "Logging out" : "Logout"}
          className="w-full h-[42px]"
          preIcon={<LogoutIcon />}
          onClick={handleLogout}
        />
      </div>
    </aside>
  );
};
