"use client";

import MainContainer from "@/components/layouts/MainContainer";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";
import { web3ToolColumns } from "@/components/organisms/columnTable/web3toolColumns";
import { Web3Tool } from "@/@types/Posts";

const Header = () => {
  return (
    <EntityTableHeader
      description="Manage and organize your content Tools."
      title="Web 3 Tools"
      newLink="/studio/desk/web3Tool"
    />
  );
};

export default function Web3ToolsTemplate({ web3Tools }: { web3Tools: Web3Tool[] }) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={web3ToolColumns}
        data={web3Tools}
      />
    </MainContainer>
  );
}
