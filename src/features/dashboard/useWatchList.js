import { useQuery } from "@tanstack/react-query";
import { getWatchList } from "../../services/apiCrypto.js";

export function useWatchList(symbols) {
	const { isLoading, data, error } = useQuery({
		queryKey: ["historyBySymbol", symbols],
		queryFn: () => getWatchList(symbols),
	});

	return { isLoading, error, data: data?.Data ?? [] };
}
