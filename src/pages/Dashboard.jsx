import styled from "styled-components";
import Transactions from "../features/dashboard/Transactions.jsx";
import Graph from "../components/Graph.jsx";
import MarketsOverview from "../components/MarketsOverview.jsx";
import WatchList from "../components/WatchList.jsx";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(545px, 1fr));
	gap: 1.5rem;
	width: 100%;
	margin-bottom: 1.5rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	@media (max-width: 1545px) {
		& > div:nth-child(1) {
			order: 1;

			& > div {
				margin-top: 1.5rem;
				margin-bottom: 0;
			}
		}

		& > div:nth-child(2) {
			order: 0;
		}
	}
`;

function Dashboard() {
	return (
		<Wrapper>
			<div>
				<GridContainer>
					<MarketsOverview />
					<Transactions />
					<WatchList />
				</GridContainer>
			</div>

			<Graph />
		</Wrapper>
	);
}

export default Dashboard;
