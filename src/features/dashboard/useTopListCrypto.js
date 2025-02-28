import { useQuery } from "@tanstack/react-query";
import { getTopList } from "../../services/apiCrypto.js";

export function useTopListCrypto() {
	const { isLoading, data, error } = useQuery({
		queryKey: ["popular"],
		queryFn: () => getTopList(),
	});

	return { isLoading, data: data?.Data ?? [], error };
}
