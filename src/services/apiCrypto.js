import transactionsData from "../data/transactions.json";

export async function getTopList() {
	const res = await fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USD", {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Apikey ${import.meta.env.VITE_API_KEY}`,
		},
	});

	return res.json();
}

export async function getHistorySymbolDaily(symbol) {
	const res = await fetch(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=300`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Apikey ${import.meta.env.VITE_API_KEY}`,
		},
	});

	return res.json();
}

export async function getTransactions() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(transactionsData);
		}, 500); // Simule un délai réseau
	});
}

export async function getWatchList(symbols) {
	const symbolsString = symbols.join(",");

	const res = await fetch(
		`https://data-api.coindesk.com/asset/v2/metadata?assets=${symbolsString}&asset_lookup_priority=SYMBOL&quote_asset=USD&groups=PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK,BASIC,ID`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Apikey ${import.meta.env.VITE_API_KEY}`,
			},
		}
	);
	return res.json();
}
