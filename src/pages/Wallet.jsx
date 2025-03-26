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
						<Balance.Title>Best Token of the day</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>$85145</Balance.CurrentBalance>
						<Balance.Evolution>+3.8% today</Balance.Evolution>
					</Balance.Content>
				</Balance>

				<Balance>
					<Balance.Header>
						<Balance.Title>Worst Token of the day</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>$0.156</Balance.CurrentBalance>
						<Balance.Evolution> -1.8% today</Balance.Evolution>
					</Balance.Content>
				</Balance>

				<Balance>
					<Balance.Header>
						<Balance.Title>Total profit/loss</Balance.Title>
						<Balance.Icon icon={FaDollarSign} />
					</Balance.Header>
					<Balance.Content>
						<Balance.CurrentBalance>+190$</Balance.CurrentBalance>
					</Balance.Content>
				</Balance>
			</GridContainer>

			<GraphBalance />

			<MyTokens />
		</>
	);
}

export default Wallet;
