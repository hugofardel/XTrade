import styled from "styled-components";

const BoxSkeleton = styled.div`
	position: relative;
	background-color: rgba(255, 255, 255, 0.11);
	border-radius: 12px;
	padding: 1rem 2rem;
	-webkit-animation: skeleton 2s ease-in-out 0.5s infinite;
	animation: skeleton 2s ease-in-out 0.5s infinite;
`;

export default BoxSkeleton;
