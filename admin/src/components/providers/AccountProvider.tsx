import { AdminUser } from "@/@types/Auth";
import React, { createContext } from "react";

interface AccountContextState {
  users: AdminUser[];
}

const AccountContext = createContext<AccountContextState>(
  {} as AccountContextState
);

interface AccountProviderProps {
  users: AdminUser[];
  children: React.ReactNode;
}

export default function AccountProvider({
  children,
  users,
}: AccountProviderProps) {
  const value: AccountContextState = {
    users,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}
