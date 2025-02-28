import styled from "styled-components";
import Box from "../../ui/Box.jsx";
import BTCIcon from "../../assets/coins/btc.svg";
import ETHIcon from "../../assets/coins/eth.svg";
import XRPIcon from "../../assets/coins/xrp.svg";

const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	margin: 3rem 0;
	overflow: auto;
	max-height: calc(100% - 10rem);
	padding-right: 10px;

	&::-webkit-scrollbar-track {
		border-radius: 15px;
		margin: 0 40px;
		padding: 0 50px;
	}

	&::-webkit-scrollbar {
		width: 14px;
	}

	&::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		border-radius: 9999px;
		background-color: #aaaaaa;
	}
`;

const Token = styled.div`
	display: flex;
	align-items: center;
`;

const WrapperImg = styled.span`
	position: relative;
	display: flex;
	border-radius: 9999px;
	overflow: hidden;
	height: 2.5rem;
	width: 2.5rem;

	img {
		width: 100%;
		height: 100%;
		aspect-ratio: 1 / 1;
		max-width: 100%;
	}
`;

const TokenName = styled.div`
	margin-left: 1rem;
	font-weight: 500;
	line-height: 1;
	font-size: 1.4rem;
`;

const Price = styled.div`
	font-weight: 500;
	margin-left: auto;
	font-size: 1.4rem;
`;

const TOKENS = [
	{
		imageSrc: BTCIcon,
		name: "Bitcoin",
		price: "12,889.00",
	},
	{
		imageSrc: ETHIcon,
		name: "Etherum",
		price: "10,666.00",
	},
	{
		imageSrc: XRPIcon,
		name: "XRP",
		price: "8,122.00",
	},
	{
		imageSrc: BTCIcon,
		name: "Kaspa",
		price: "4,298.00",
	},
	{
		imageSrc: ETHIcon,
		name: "Kaspa",
		price: "3,412.00",
	},
	{
		imageSrc: XRPIcon,
		name: "Kaspa",
		price: "1,999.00",
	},

	{
		imageSrc: BTCIcon,
		name: "Bitcoin",
		price: "12,889.00",
	},
	{
		imageSrc: ETHIcon,
		name: "Etherum",
		price: "10,666.00",
	},
	{
		imageSrc: XRPIcon,
		name: "XRP",
		price: "8,122.00",
	},
	{
		imageSrc: BTCIcon,
		name: "Kaspa",
		price: "4,298.00",
	},
	{
		imageSrc: ETHIcon,
		name: "Kaspa",
		price: "3,412.00",
	},
	{
		imageSrc: XRPIcon,
		name: "Kaspa",
		price: "1,999.00",
	},
];

function PersonalToken() {
	return (
		<Box>
			<h2>Personal Tokens</h2>

			<List>
				{TOKENS.map((token, index) => (
					<Token key={"token_" + index}>
						<WrapperImg>
							<img src={token.imageSrc} alt={token.name} />
						</WrapperImg>
						<TokenName>{token.name}</TokenName>
						<Price>{token.price}</Price>
					</Token>
				))}
			</List>
		</Box>
	);
}

export default PersonalToken;
