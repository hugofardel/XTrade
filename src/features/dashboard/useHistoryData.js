import { useQuery } from "@tanstack/react-query";
import { getHistorySymbolDaily } from "../../services/apiCrypto.js";

export function useHistoryData(symbol) {
	const { isLoading, data, error } = useQuery({
		queryKey: ["historyBySymbol", symbol],
		queryFn: () => getHistorySymbolDaily(symbol),
	});

	return { isLoading, error, data: data?.Data?.Data ?? [] };
}
