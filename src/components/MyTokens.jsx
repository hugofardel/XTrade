import styled from "styled-components";
import Box from "../ui/Box.jsx";
import { useWatchList } from "../features/dashboard/useWatchList.js";
import BoxSkeleton from "../ui/BoxSkeleton.jsx";
import { round, valueToCurrency } from "../helpers.js";

const List = styled.ul`
	list-style: none;
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	width: 100%;
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

const Evolution = styled.div`
	color: var(--color-green);
	font-size: var(--fs-md);
	width: 120px;
`;

const Price = styled.div`
	flex: 1;
	text-align: left;
`;

const TOKENS = [
	{ symbol: "BTC", amount: 0.522 },
	{ symbol: "KAS", amount: 18000 },
];

function MyTokens() {
	const symbols = TOKENS.map((token) => token.symbol);
	const { isLoading, data, error } = useWatchList(symbols);

	if (isLoading) return <BoxSkeleton />;
	else if (error)
		return (
			<Box>
				<h2>Oups ! An error occurred</h2>
			</Box>
		);

	return (
		<Box>
			<h2>My Tokens</h2>

			<List>
				{Object.values(data)?.map((symbol, index) => (
					<Crypto key={"symbol_" + index}>
						<NameCrypto>
							<img src={symbol.LOGO_URL} alt={symbol.NAME} />
							{symbol.NAME}
						</NameCrypto>
						<Price>1978 {symbol.SYMBOL}</Price>
						<Price>{valueToCurrency(round(symbol.PRICE_USD, 2))}</Price>
						<Evolution> 21.7%</Evolution>
					</Crypto>
				))}
			</List>
		</Box>
	);
}

export default MyTokens;
