import { signOut } from "next-auth/react";

export function useAdminSidebarFooterLogics() {
  const signoutHandler = () => {
    signOut({
      redirectTo: "/",
    });
  };

  return { signoutHandler };
}
