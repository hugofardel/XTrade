import styled from "styled-components";
import Box from "../../ui/Box.jsx";
import { useTransactions } from "./useTransactions.js";
import BoxSkeleton from "../../ui/BoxSkeleton.jsx";

const List = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
`;

const TransactionItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	padding: 0.5rem 0;

	&:not(:last-child) {
		border-bottom: 1px solid #232732;
	}
`;

const Crypto = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;

	img {
		width: 2.5rem;
	}
`;

const CryptoInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const CryptoName = styled.span`
	font-style: italic;
	font-size: var(--fs-sm);
`;

const Result = styled.div``;

const Transactions = () => {
	const { data, isLoading, error } = useTransactions();

	if (isLoading) return <BoxSkeleton />;
	if (error) return <div>Une erreur est survenue</div>;

	return (
		<Box>
			<h2>Recent transactions</h2>

			<List>
				{data.slice(0, 4).map((transaction, index) => (
					<TransactionItem key={"transaction_" + index}>
						<Crypto>
							<img src={transaction.imageSrc} alt={transaction.symbol} />
							<CryptoInfo>
								<span>{transaction.symbol}</span>
								<CryptoName>{transaction.action}</CryptoName>
							</CryptoInfo>
						</Crypto>
						<Result>{transaction.profit}%</Result>
					</TransactionItem>
				))}
			</List>
		</Box>
	);
};

export default Transactions;
