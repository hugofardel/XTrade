import { createChart } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import Box from "../ui/Box.jsx";
import RoundedSelect from "../ui/RoundedSelect.jsx";
import FlexSpaceBetween from "../ui/FlexSpaceBetween.jsx";
import { useHistoryData } from "../features/dashboard/useHistoryData.js";
import { COINS } from "../constants.js";
import styled from "styled-components";

const StyledBox = styled(Box)`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const chart_options = {
	grid: {
		horzLines: { color: "#232732" },
		vertLines: { color: "#232732" },
	},
	layout: { textColor: "#a5a8b1", background: { type: "solid", color: "#171b26" } },
};

function Graph() {
	const chartContainerRef = useRef();
	const [symbol, setSymbol] = useState("BTC");
	const { data } = useHistoryData(symbol);

	useEffect(() => {
		function handleResize() {
			chart.applyOptions({
				width: chartContainerRef.current.offsetWidth,
				height: chartContainerRef.current.offsetHeight,
			});
		}

		const chart = createChart(chartContainerRef.current, chart_options);
		const candlestickSeries = chart.addCandlestickSeries({
			upColor: "#26a69a",
			downColor: "#ef5350",
			borderVisible: false,
			wickUpColor: "#26a69a",
			wickDownColor: "#ef5350",
		});
		candlestickSeries.setData(data);
		chart.timeScale().fitContent();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			chart.remove();
		};
	}, [data]);

	function handleChangeSymbol(e) {
		setSymbol(e.target.value);
	}

	return (
		<StyledBox>
			<FlexSpaceBetween style={{ marginBottom: "1rem" }}>
				<h2>Price</h2>

				<RoundedSelect value={symbol} onChange={handleChangeSymbol}>
					{COINS.map((coin) => (
						<option key={coin.Id} value={coin.Symbol}>
							{coin.Symbol}-USD
						</option>
					))}
				</RoundedSelect>
			</FlexSpaceBetween>

			<div ref={chartContainerRef} style={{ width: "100%", flex: 1 }} />
		</StyledBox>
	);
}

export default Graph;
