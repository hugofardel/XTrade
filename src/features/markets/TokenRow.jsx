import styled from "styled-components";
import Table from "../../ui/Table.jsx";
import { RxStar } from "react-icons/rx";
import { RxStarFilled } from "react-icons/rx";

const Column = styled.div`
	font-size: 1.2rem;
	font-weight: 600;
	color: var(--color-grey-400);
`;

const Button = styled.button`
	width: 3rem;
	height: 3rem;
	padding: 0.5rem;
	border-radius: 999px;
	border: none;
	color: var(--color-grey-400);
	background-color: var(--color-black);
	font-size: 1.5rem;
`;

const StarFilled = styled(RxStarFilled)`
	color: var(--color-orange);
	filter: drop-shadow(0 0 0.75rem var(--color-orange));
`;

function TokenRow({ token, rank, isInclude, toggleToWatch }) {
	return (
		<Table.Row>
			<Column>
				<Button onClick={() => toggleToWatch(token.CoinInfo.Name)}>{isInclude ? <StarFilled /> : <RxStar />}</Button>
			</Column>
			<Column>{rank}.</Column>
			<Column>{token.CoinInfo.FullName}</Column>
			<Column>{token.DISPLAY?.USD.PRICE ?? "-"}</Column>
			<Column>{token.DISPLAY?.USD.MKTCAP ?? "-"}</Column>
			<Column>{token.DISPLAY?.USD.VOLUMEDAY ?? "-"}</Column>
		</Table.Row>
	);
}
export default TokenRow;
