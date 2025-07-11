import Web3ToolsTemplate from "@/components/templates/admin/Web3ToolsTemplate";
import { getAllWeb3Tools } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web 3 Tools",
};

export default async function TagsPage() {
  const web3Tools = await getAllWeb3Tools();

  return <Web3ToolsTemplate web3Tools={web3Tools} />;
}
