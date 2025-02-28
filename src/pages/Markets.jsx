import styled from "styled-components";
import Tokens from "../features/markets/Tokens.jsx";

const StyledMarkets = styled.div`
	grid-area: main;
`;

function Markets() {
	return (
		<StyledMarkets>
			<Tokens />
		</StyledMarkets>
	);
}

export default Markets;
