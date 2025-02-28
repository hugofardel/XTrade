import styled from "styled-components";
import BTCIcon from "../assets/coins/btc.svg";

const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;
	border-radius: 999px;
	background-color: var(--color-grey);
	border: 1px solid var(--color-black);
	padding: 8px 16px 8px 12px;
	width: 280px;
`;

const ContainerTitleValue = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2px;
	font-size: var(--fs-md);
	flex: 1;
`;

const Unit = styled.span`
	font-size: var(--fs-md);
	margin-left: 3px;
`;

const Value = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	width: 100%;
`;

const Logo = styled.div`
	display: flex;
	& img {
		width: 36px;
	}
`;

const Evolution = styled.span`
	font-style: italic;
	font-size: var(--fs-xs);

	color: ${(props) => (props.$isPositive ? "#9ff7d2" : "red")};
`;

function CoinCard({ crypto = "btc" }) {
	console.log("crypto", crypto);

	return (
		<Card>
			<Logo>
				<img src={BTCIcon} alt="logo" />
			</Logo>

			<ContainerTitleValue>
				<span>Bitcoin</span>
				<Value>
					<span>
						104 483,97<Unit>USD</Unit>
					</span>
					<Evolution $isPositive={true}> -0,8%</Evolution>
				</Value>
			</ContainerTitleValue>
		</Card>
	);
}

export default CoinCard;
