"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ToastNotification({
  message,
  result,
}: {
  message: string;
  result: string;
}) {
  if (result === "error") {
    toast.error(message);
  } else if (result === "success") {
    toast.success(message);
  } else {
    toast.info(message);
  }
}
//   toast.success(message);
