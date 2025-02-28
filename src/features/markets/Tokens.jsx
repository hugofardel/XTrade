import Box from "../../ui/Box.jsx";
import Table from "../../ui/Table.jsx";
import BoxSkeleton from "../../ui/BoxSkeleton.jsx";
import TokenRow from "./TokenRow.jsx";
import { useTopListCrypto } from "../dashboard/useTopListCrypto.js";
import { useEffect, useState } from "react";

function Tokens() {
	const { isLoading, data, error } = useTopListCrypto();

	const [watchlist, setWatchlist] = useState(() => {
		const saved = localStorage.getItem("watchlist");
		const initialValue = JSON.parse(saved);
		return initialValue || [];
	});

	useEffect(() => {
		localStorage.setItem("watchlist", JSON.stringify(watchlist));
	}, [watchlist]);

	function toggleToWatch(tokenName) {
		if (!watchlist.includes(tokenName)) {
			setWatchlist((prev) => [...prev, tokenName]);
		} else {
			setWatchlist((prev) => prev.filter((item) => item !== tokenName));
		}
	}

	if (isLoading) return <BoxSkeleton />;
	else if (error) return <Box>Oups! An Error occured</Box>;

	return (
		<Box>
			<h2>Tokens</h2>

			<Table columns="0.3fr 0.3fr 2fr 2.4fr 1.4fr 1fr">
				<Table.Header>
					<div></div>
					<div>Rank</div>
					<div>Name</div>
					<div>Price</div>
					<div>Market CAP</div>
					<div>Volume</div>
				</Table.Header>

				<Table.Body
					data={data}
					render={(token, index) => (
						<TokenRow
							key={index + 1}
							rank={index + 1}
							token={token}
							toggleToWatch={toggleToWatch}
							isInclude={watchlist.includes(token.CoinInfo.Name)}
						/>
					)}
				/>
			</Table>
		</Box>
	);
}

export default Tokens;
