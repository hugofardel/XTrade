import { useState } from "react";
import styled from "styled-components";

const StyledSwitch = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	background-color: var(--color-black);
	border-radius: 999px;
	overflow: hidden;
	width: fit-content;
`;

const SwitchItem = styled.div`
	position: relative;
	padding: 0.4rem 2rem;
	text-align: center;
	font-weight: 500;
	cursor: pointer;
	color: white;
`;

const ToggleSwitch = ({ options = [] }) => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<StyledSwitch>
			{options.map((option) => (
				<SwitchItem
					key={option}
					style={{
						backgroundColor: selected === option ? "white" : "transparent",
						color: selected === option ? "black" : "white",
						WebkitTapHighlightColor: "transparent",
					}}
					onClick={() => setSelected(option)}
				>
					{option}
				</SwitchItem>
			))}
		</StyledSwitch>
	);
};

export default ToggleSwitch;
