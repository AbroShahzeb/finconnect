// toastUtils.ts
import { toast } from "sonner";

// Success Toast
export const showSuccessToast = (message: string) => {
  toast.custom((t) => (
    <div
      className="min-w-sm w-full max-w-lg bg-green-500 text-neutral-0 rounded-lg  px-4 py-3 flex flex-col  font-primary"
      onClick={() => toast.dismiss(t)}
    >
      <span className="font-semibold text-preset-3">Success</span>
      <span className="text-sm text-preset-4 text-neutral-100">{message}</span>
    </div>
  ));
};

// Info Toast
export const showInfoToast = (message: string) => {
  toast.custom((t) => (
    <div
      className="min-w-sm w-full max-w-lg bg-blue-500 text-neutral-0 rounded-lg  px-4 py-3 flex flex-col font-primary"
      onClick={() => toast.dismiss(t)}
    >
      <span className="font-semibold text-preset-3">Info</span>
      <span className="text-sm text-preset-4 text-neutral-100">{message}</span>
    </div>
  ));
};

// Error Toast
export const showErrorToast = (message: string) => {
  toast.custom((t) => (
    <div
      className="min-w-sm w-full max-w-lg  bg-red-500 text-neutral-0 rounded-lg  px-4 py-3 flex flex-col  font-primary"
      onClick={() => toast.dismiss(t)}
    >
      <span className="font-semibold text-preset-3">Error</span>
      <span className="text-sm text-preset-4 text-neutral-100">{message}</span>
    </div>
  ));
};
