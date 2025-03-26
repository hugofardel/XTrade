import Box from "../../ui/Box.jsx";
import Table from "../../ui/Table.jsx";
import BoxSkeleton from "../../ui/BoxSkeleton.jsx";
import TokenRow from "./TokenRow.jsx";
import { useTopListCrypto } from "../dashboard/useTopListCrypto.js";
import { useEffect, useState } from "react";
// import FlexSpaceBetween from "../../ui/FlexSpaceBetween.jsx";
// import { FaSearch } from "react-icons/fa";
// import styled from "styled-components";

// const SearchBar = styled.div`
// 	flex: 1;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

// const SearchInput = styled.input`
// 	width: 75%;
// 	padding: 0.8rem 1.25rem;
// 	/* border-radius: 20px; */
// 	border: none;
// 	outline: none;
// 	background-color: var(--background-color);
// 	color: white;
// 	font-size: 1rem;

// 	border-top-left-radius: 12px;
// 	border-bottom-left-radius: 12px;
// 	border-top-right-radius: 0;
// 	border-bottom-right-radius: 0;

// 	&::placeholder {
// 		color: #aaaaaa;
// 	}
// `;

// const ButtonSearch = styled.button`
// 	padding: 0.8rem 1.25rem;
// 	height: 100%;
// 	border-radius: 999px;
// 	background-color: var(--background-color);
// 	border: none;
// 	border: none;
// 	border-left: 1px solid var(--color-black);
// 	outline: 1px var(--background-color);
// 	border-top-right-radius: 12px;
// 	border-bottom-right-radius: 12px;
// 	border-top-left-radius: 0;
// 	border-bottom-left-radius: 0;
// 	/* box-shadow: 0 0 0 2px var(--background-color), 0 0 0 4px var(--color-black), 0 1px 2px 0 #0000000d; */
// `;

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
			{/* <FlexSpaceBetween>

				<SearchBar className="search">
					<SearchInput type="text" placeholder="Search a token..." />
					<ButtonSearch>
						<FaSearch />
					</ButtonSearch>
				</SearchBar>
			</FlexSpaceBetween> */}

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
