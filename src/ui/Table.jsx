import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
	font-size: var(--fs-lg);
	border-radius: 7px;
	overflow: hidden;
`;

const CommonRow = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	column-gap: 2.4rem;
	align-items: center;
	transition: none;
`;

const StyledHeader = styled(CommonRow)`
	padding: 1.4rem 2rem;

	background-color: #141319;
	border-bottom: 1px solid #232732;
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-weight: 600;
	color: var(--color-grey-300);
`;

const StyledRow = styled(CommonRow)`
	padding: 1rem 2rem;

	&:not(:last-child) {
		border-bottom: 1px solid #232732;
	}
`;

const StyledBody = styled.section`
	margin: 0.4rem 0;
`;

const Footer = styled.footer`
	background-color: var(--color-grey-50);
	display: flex;
	justify-content: center;
	padding: 1.2rem;

	&:not(:has(*)) {
		display: none;
	}
`;

const Empty = styled.p`
	font-size: var(--fs-lg);
	font-weight: 500;
	text-align: center;
	margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
	return (
		<TableContext.Provider value={{ columns }}>
			<StyledTable role="table">{children}</StyledTable>
		</TableContext.Provider>
	);
}

function Header({ children }) {
	const { columns } = useContext(TableContext);
	return (
		<StyledHeader role="row" columns={columns} as="header">
			{children}
		</StyledHeader>
	);
}
function Row({ children }) {
	const { columns } = useContext(TableContext);
	return (
		<StyledRow role="row" columns={columns}>
			{children}
		</StyledRow>
	);
}

function Body({ data, render }) {
	if (!data.length) return <Empty>No data to show at the moment</Empty>;

	return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
