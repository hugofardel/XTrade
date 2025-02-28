import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../services/apiCrypto.js";

export function useTransactions() {
	const { isLoading, data, error } = useQuery({
		queryKey: ["transactions"],
		queryFn: () => getTransactions(),
	});

	return { isLoading, data: data ?? [], error };
}
