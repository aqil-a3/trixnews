import AddAirdropTemplate from "@/components/templates/admin/AirdropsAddTemplate";
import { Metadata } from "next";

export const metadata:Metadata ={
title:"Add Airdrop"
}

export default function AddAirdropPpage(){
    return <AddAirdropTemplate />
}