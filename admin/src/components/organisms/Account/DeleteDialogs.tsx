"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

interface DeleteDialogProps {
  email: string;
}

export function DeleteDialog({ email }: DeleteDialogProps) {
  const session = useSession();
  const user = session.data?.user;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleConfirm() {
    try {
      setLoading(true);
      const { data: resData } = await axios.delete("/api/account", {
        data: { email },
      });
      toast.success(resData.message);
      setOpen(false);
      router.refresh();
    } catch (error) {
      if (isAxiosError(error)) {
        const data = error.response?.data;
        const status = error.status;

        if (status === 400) {
          toast.error(data.message);
          return;
        }
      }
      console.error(error);
      toast.error("Failed to delete user");
    } finally {
      setLoading(false);
    }
  }

  if (!user) return <Skeleton className="h-8 w-8 rounded-md gap-1.5 px-3" />;
  const isHidden = user.email === email || (user.role?.toLocaleLowerCase() !== "admin" && user.role?.toLowerCase() !== "developer");
  if (isHidden) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="destructive"
          className="active:scale-95 duration-150"
        >
          <Trash className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action will permanently delete{" "}
            <strong>{email || "this user"}</strong>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
