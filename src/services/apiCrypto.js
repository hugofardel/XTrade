import transactionsData from "../data/transactions.json";

const defaultHeaders = {
	"Content-Type": "application/json",
	Authorization: `Apikey ${import.meta.env.VITE_API_KEY}`,
};

const fetchData = async (url, options = {}) => {
	const mergedOptions = {
		headers: defaultHeaders,
		...options,
	};

	const res = await fetch(url, mergedOptions);
	if (!res.ok) {
		throw new Error(`Erreur HTTP! Statut: ${res.status}`);
	}
	return res.json();
};

export async function getTopList() {
	return fetchData("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USD");
}

export async function getHistorySymbolDaily(symbol) {
	return fetchData(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=300`);
}

export async function getTransactions() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(transactionsData);
		}, 500);
	});
}

export async function getWatchList(symbols) {
	const symbolsString = symbols.join(",");
	return fetchData(
		`https://data-api.coindesk.com/asset/v2/metadata?assets=${symbolsString}&asset_lookup_priority=SYMBOL&quote_asset=USD&groups=PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK,BASIC,ID`
	);
}
