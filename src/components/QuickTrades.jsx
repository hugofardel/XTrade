import styled from "styled-components";
import Box from "../ui/Box.jsx";
import FlexSpaceBetween from "../ui/FlexSpaceBetween.jsx";
import SmallSelect from "../ui/SmallSelect.jsx";
import ToggleSwitch from "./ToggleSwitch.jsx";

const Operations = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 1rem 0 1.5rem 0;
`;

const OperationItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 5px;
	padding: 0.7rem 0.7rem 0 0.7rem;
	border-radius: 12px;
	background-color: #1b1a1f;
`;

const Button = styled.button`
	width: 100%;
	padding: 12px 20px;
	color: white;
	background-color: var(--color-orange);
	border: none;
	border-radius: 999px;
`;

const Input = styled.input`
	padding: 10px 20px 10px 0;
	width: 100%;
	border: none;
	font-size: var(--fs-lg);
	background: transparent;
`;

const QuickTrades = () => {
	return (
		<Box>
			<FlexSpaceBetween>
				<h2>Make quick trades</h2>
				<ToggleSwitch options={["Buy", "Sell"]} />
			</FlexSpaceBetween>

			<Operations>
				<OperationItem>
					<label htmlFor="">Pay</label>

					<FlexSpaceBetween>
						<Input type="text" placeholder="0.00000" />
						<SmallSelect>
							<option>ETH</option>
							<option>BTC</option>
						</SmallSelect>
					</FlexSpaceBetween>
				</OperationItem>
				<OperationItem>
					<label htmlFor="">Receive</label>

					<FlexSpaceBetween>
						<Input type="text" placeholder="0.00000" />
						<SmallSelect>
							<option>ETH</option>
							<option>BTC</option>
						</SmallSelect>
					</FlexSpaceBetween>
				</OperationItem>
			</Operations>

			<Button>Buy / Sell</Button>
		</Box>
	);
};

export default QuickTrades;
