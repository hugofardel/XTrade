import styled from "styled-components";
import Box from "../ui/Box.jsx";
import { useWatchList } from "../features/dashboard/useWatchList.js";
import BoxSkeleton from "../ui/BoxSkeleton.jsx";
import { useMemo } from "react";
import { round, valueToCurrency } from "../helpers.js";

const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
	padding: 1rem 0;
	list-style: none;
	overflow: auto;
	height: 260px;
`;

const Crypto = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: var(--fs-xl);
`;

const NameCrypto = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: #6b6c70;

	width: 500px;
	max-width: 50%;

	img {
		width: 2.5rem;
	}
`;

const Price = styled.div`
	flex: 1;
	text-align: left;
`;

const Evolution = styled.div`
	color: var(--color-green);
	font-size: var(--fs-md);
	width: 120px;
`;

// const WATCHLIST = ["KAS", "BTC", "ETH"];

function WatchList() {
	const watchlist = useMemo(() => {
		const saved = localStorage.getItem("watchlist");
		const initialValue = JSON.parse(saved);
		return initialValue || ["BTC", "ETH"];
	}, []);

	const { isLoading, data, error } = useWatchList(watchlist);

	const sortedData = Object.values(data)?.sort((a, b) => b.PRICE_USD - a.PRICE_USD) ?? [];

	if (isLoading) return <BoxSkeleton />;
	else if (error)
		return (
			<Box>
				<h2>Oups ! An error occurred</h2>
			</Box>
		);

	return (
		<Box>
			<h2>My Watchlist</h2>

			<List>
				{sortedData.map((symbol, index) => (
					<Crypto key={"symbol_" + index}>
						<NameCrypto>
							<img src={symbol.LOGO_URL} alt={symbol.NAME} />
							{symbol.NAME}
						</NameCrypto>
						<Price>{valueToCurrency(round(symbol.PRICE_USD))}</Price>
						<Evolution> 21.7%</Evolution>
					</Crypto>
				))}
			</List>
		</Box>
	);
}

export default WatchList;
