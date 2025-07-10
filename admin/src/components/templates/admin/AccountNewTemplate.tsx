"use client";

import MainContainer from "@/components/layouts/MainContainer";
import FormNewAccount from "@/components/organisms/Account/NewAccount/Form";

export default function NewAccountTemplate() {
  return (
    <MainContainer>
      <h1 className="text-2xl font-bold mb-1">Create New Admin Account</h1>
      <p className="text-muted-foreground mb-6">
        Fill out the form to add a new admin user.
      </p>

      <FormNewAccount />
    </MainContainer>
  );
}
