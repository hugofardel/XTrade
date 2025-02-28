import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import Box from "../../ui/Box.jsx";
import styled from "styled-components";
import FlexSpaceBetween from "../../ui/FlexSpaceBetween.jsx";

const StyledBox = styled(Box)`
	flex: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	margin: 1.5rem 0;
`;

const chart_options = {
	grid: {
		horzLines: { color: "#232732" },
		vertLines: { color: "#232732" },
	},
	layout: { textColor: "#a5a8b1", background: { type: "solid", color: "#171b26" } },
};

const data = [
	{ time: "2018-12-15", value: 28.65 },
	{ time: "2018-12-16", value: 29.35 },
	{ time: "2018-12-17", value: 28.75 },
	{ time: "2018-12-18", value: 30.23 },
	{ time: "2018-12-19", value: 31.35 },
	{ time: "2018-12-20", value: 31.87 },
	{ time: "2018-12-21", value: 33.48 },
	{ time: "2018-12-22", value: 32.51 },
	{ time: "2018-12-23", value: 31.11 },
	{ time: "2018-12-24", value: 27.02 },
	{ time: "2018-12-25", value: 27.32 },
	{ time: "2018-12-26", value: 25.17 },
	{ time: "2018-12-27", value: 28.89 },
	{ time: "2018-12-28", value: 25.46 },
	{ time: "2018-12-29", value: 23.92 },
	{ time: "2018-12-30", value: 22.68 },
	{ time: "2018-12-31", value: 22.67 },
	{ time: "2019-01-01", value: 20.67 },
	{ time: "2019-01-02", value: 21.67 },
	{ time: "2019-01-03", value: 22.67 },
	{ time: "2019-01-04", value: 24.67 },
];

// const textColor = "#a5a8b1";
// const backgroundColor = "transparent";
const lineColor = "#7E66F5";
const areaTopColor = "#7E66F5";
const areaBottomColor = "#362d72";

function GraphBalance() {
	const chartContainerRef = useRef();

	useEffect(() => {
		function handleResize() {
			chart.applyOptions({
				width: chartContainerRef.current.clientWidth,
				height: chartContainerRef.current.clientHeight,
			});
		}

		const chart = createChart(chartContainerRef.current, chart_options);

		const newSeries = chart.addAreaSeries({
			lineColor,
			topColor: areaTopColor,
			bottomColor: areaBottomColor,
			lineWidth: 3,
		});
		newSeries.setData(data);
		chart.timeScale().fitContent();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			chart.remove();
		};
	}, []);

	return (
		<StyledBox>
			<FlexSpaceBetween style={{ marginBottom: "1rem" }}>
				<h2>My portfolio (table quantity token)</h2>
			</FlexSpaceBetween>
			<div ref={chartContainerRef} style={{ width: "100%", height: "100%" }} />
		</StyledBox>
	);
}

export default GraphBalance;
