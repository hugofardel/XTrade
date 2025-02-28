import styled from "styled-components";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = styled.div`
	display: grid;
	grid-template-columns: 280px 1fr;
	min-height: 100vh;
`;

const Main = styled.main`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	padding: 20px;
	min-height: 100vh;
	background-color: var(--background-color);
`;

function AppLayout() {
	return (
		<Layout>
			<Sidebar />
			<Main>
				<Outlet />
			</Main>
		</Layout>
	);
}

export default AppLayout;
