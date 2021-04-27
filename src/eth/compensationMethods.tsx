import React from "react";
import { ethers } from "ethers";
import AppToast from "components/AppToast/AppToast";
import { toast } from "react-toastify";
import { formatResult } from "helpers/utils";
import "react-toastify/dist/ReactToastify.css";

export async function getCompensationLimit(address: string, provider: any) {
  const contract = new ethers.Contract(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    require("./abi/compensation.json"),
    provider
  );
  return formatResult(await contract.compensationLimit(address), 18);
}
export async function getTotalPerRound(provider: any) {
  const contract = new ethers.Contract(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    require("./abi/compensation.json"),
    provider
  );
  return formatResult(await contract.compensationPerRound(), 18);
}

export async function getTotalCompensationAmount(provider: any) {
  const contract = new ethers.Contract(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    require("./abi/compensation.json"),
    provider
  );
  return formatResult(await contract.totalTokensCompensation(), 18);
}

export async function getTotalRounds(provider: any) {
  const contract = new ethers.Contract(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    require("./abi/compensation.json"),
    provider
  );
  return Number(await contract.totalRounds());
}
export async function getTokensClaimed(address: string, provider: any) {
  const contract = new ethers.Contract(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    require("./abi/compensation.json"),
    provider
  );
  return formatResult(await contract.tokensClaimed(address), 18);
}
export async function getClaimLimit(address: string, provider: any) {
  const contract = new ethers.Contract(
    "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    require("./abi/compensation.json"),
    provider
  );
  return formatResult(await contract.tokenClaimLimit(address), 18);
}
export async function getCurrentRound(provider: any) {
  const contract = new ethers.Contract(
    "0x345d2333B3A39d6D992f4DA785F0ac681835C2E9",
    require("./abi/compensation.json"),
    provider
  );
  return Number(await contract.currentRound());
}

export async function claimCompensation(signer: any) {
  toast(
    <AppToast
      spinnerCondition={true}
      txId={""}
      message="Pending compensation claim"
    />,
    {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      progress: undefined,
      closeOnClick: false,
    }
  );
  const stakeToast = "stakeToast";
  const contract = new ethers.Contract(
    "0x345d2333B3A39d6D992f4DA785F0ac681835C2E9",
    require("./abi/compensation.json"),
    signer
  );
  const tx = await contract.claimCompensation();
  toast(
    <AppToast
      spinnerCondition={true}
      txId={tx.hash}
      message="🔮 Compensating.."
    />,
    {
      position: "top-left",
      autoClose: false,
      hideProgressBar: false,
      progress: undefined,
      closeOnClick: false,
      toastId: stakeToast,
    }
  );
  await tx.wait();

  toast.dismiss(stakeToast);

  toast(
    <AppToast
      spinnerCondition={true}
      txId={tx.hash}
      message="Compensation complete."
    />,
    {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      progress: undefined,
      closeOnClick: false,
      toastId: stakeToast,
    }
  );
  return true;
}
