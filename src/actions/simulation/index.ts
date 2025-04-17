import apiClient from "@/lib/api-client";
import { ChemicalReactionOutput } from "@/schema/chemical-reaction";

export const chemicalReaction = async (chemicals: string) => {
  const data = {
    "reacsmiles": chemicals,
  }

  const res = await apiClient.post<ChemicalReactionOutput>(
    "/predict",
    data, // Add the FormData object here
  );

  console.log(res.data)

  return res.data;
};
