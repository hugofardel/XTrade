import styled from "styled-components";
import { useTopListCrypto } from "../features/dashboard/useTopListCrypto.js";
import Box from "../ui/Box.jsx";
import BoxSkeleton from "../ui/BoxSkeleton.jsx";

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

const Price = styled.div`
	flex: 1;
	text-align: left;
`;

const Evolution = styled.div`
	color: var(--color-green);
	font-size: var(--fs-md);
	width: 120px;
`;

const BASE_URL = "https://www.cryptocompare.com";

function MarketsOverview() {
	const { isLoading, data = data.slice(0, 4), error } = useTopListCrypto();
	const topData = data.slice(0, 4);

	if (isLoading) return <BoxSkeleton />;
	else if (error)
		return (
			<Box>
				<h2>Oups ! An error occurred</h2>
			</Box>
		);

	return (
		<Box>
			<h2>Markets Overview</h2>

			<List>
				{topData.map((coin, index) => (
					<Crypto key={index + "_" + coin.CoinInfo.id}>
						<NameCrypto>
							<img src={BASE_URL + coin.CoinInfo.ImageUrl} alt={coin.CoinInfo.Name} />
							{coin.CoinInfo.Name}
						</NameCrypto>
						<Price>{coin["DISPLAY"]["USD"]["PRICE"]}</Price>
						<Evolution> {coin["DISPLAY"]["USD"]["CHANGEPCTDAY"]}%</Evolution>
					</Crypto>
				))}
			</List>
		</Box>
	);
}

export default MarketsOverview;
