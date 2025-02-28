import styled from "styled-components";
import Box from "../../ui/Box.jsx";
import { createElement } from "react";

const CurrentBalance = styled.div`
	font-size: var(--fs-2xl);
	font-weight: 500;
	text-align: left;
`;

const HeaderBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	padding-bottom: 0.5rem;

	& svg {
		height: 1.25rem;
		width: 1.25rem;
		color: hsl(240 5% 64.9%);
	}
`;

const Title = styled.div`
	letter-spacing: -0.025em;
	font-size: 1.25rem;
	line-height: 1.25rem;
	font-weight: 500;
`;

const Content = styled.div`
	padding: 1rem;
	padding-top: 0.5rem;
	text-align: left;
	color: white;
`;

const Evo = styled.p`
	font-size: 0.9rem;
	line-height: 1rem;
	margin: 0;
	color: hsl(240 5% 64.9%);
`;

function Balance({ children }) {
	return <Box>{children}</Box>;
}

function IconHeader({ icon }) {
	return createElement(icon);
}

Balance.Header = HeaderBox;
Balance.Title = Title;
Balance.Icon = IconHeader;
Balance.Content = Content;
Balance.CurrentBalance = CurrentBalance;
Balance.Evolution = Evo;

export default Balance;
