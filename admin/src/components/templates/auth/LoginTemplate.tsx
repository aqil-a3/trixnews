import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/lib/utils";

export default function LoginTemplate() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        action={async () => {
          "use server";
          const { signIn } = await import("@/auth");
          await signIn("google");
        }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center space-y-6"
      >
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <Button
          variant="outline"
          className={cn("w-full flex items-center justify-center gap-2 cursor-pointer")}
          type="submit"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </Button>
      </form>
    </div>
  );
}
