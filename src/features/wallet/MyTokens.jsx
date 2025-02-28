import Box from "../../ui/Box.jsx";
import Table from "../../ui/Table.jsx";

// const TOKENS = [
// 	{ name: "bitcoin", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "ethereum", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "xrp", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "kaspa", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "link", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "dogecoin", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "solana", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "stellar", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "stellar", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// 	{ name: "cardano", price: 755122, volume: 4545454545, market_cap: 7875431231 },
// ];

function MyTokens() {
	return (
		<Box>
			<h2>Tokens</h2>

			<Table columns="2fr 2.4fr 1.4fr 1fr">
				<Table.Header>
					<div>Name</div>
					<div>Price</div>
					<div>Market CAP</div>
					<div>Volume</div>
				</Table.Header>

				{/* <Table.Body data={TOKENS} render={(token) => <TokenRow key={token.rank} token={token} />} /> */}
			</Table>
		</Box>
	);
}

export default MyTokens;
