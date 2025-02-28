import styled from "styled-components";
import Balance from "../features/wallet/Balance.jsx";
import GraphBalance from "../features/wallet/GraphBalance.jsx";
import { FaDollarSign } from "react-icons/fa";
import MyTokens from "../components/MyTokens.jsx";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	width: 100%;
`;

const GridTokens = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.5rem;
`;

function Wallet() {
	return (
		<>
			<GridContainer>
				<Balance>
					<Balance.Header>
						<Balance.Title>Balance</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>$45,231.89</Balance.CurrentBalance>
						<Balance.Evolution>+20.1% from last month</Balance.Evolution>
					</Balance.Content>
				</Balance>

				<Balance>
					<Balance.Header>
						<Balance.Title>Balance</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>$45,231.89</Balance.CurrentBalance>
						<Balance.Evolution>+20.1% from last month</Balance.Evolution>
					</Balance.Content>
				</Balance>

				<Balance>
					<Balance.Header>
						<Balance.Title>Balance</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>$45,231.89</Balance.CurrentBalance>
						<Balance.Evolution>+20.1% from last month</Balance.Evolution>
					</Balance.Content>
				</Balance>

				<Balance>
					<Balance.Header>
						<Balance.Title>Balance</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>$45,231.89</Balance.CurrentBalance>
						<Balance.Evolution>+20.1% from last month</Balance.Evolution>
					</Balance.Content>
				</Balance>
			</GridContainer>

			<GraphBalance />

			<GridTokens>
				<MyTokens />
			</GridTokens>
		</>
	);
}

export default Wallet;
