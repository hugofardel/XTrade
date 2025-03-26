import styled from "styled-components";
import { RiShoppingBasketFill } from "react-icons/ri";
import { TbTransactionBitcoin } from "react-icons/tb";
import { IoIosLogOut, IoMdHome } from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";

const StyledSidebar = styled.nav`
	/* 
	min-height: 100vh;
	width: 280px;
	
	grid-area: side; */

	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	background-color: var(--color-grey);
	overflow-y: auto;
`;

const NavList = styled.ul`
	list-style: none;
	width: 80%;
	margin: 0 auto;
	padding: 0;
	text-align: left;
`;

const NavItem = styled.li`
	padding: 1rem;
	margin: 0.75rem 0;
	border-radius: 8px;
	font-size: 1.1rem;
	cursor: pointer;

	& a {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 8px;
		color: #888a8e;
	}

	& a.active,
	& a:hover {
		background-color: var(--color-grey);
		color: var(--color-orange);
	}

	@media (max-width: 767px) {
		padding: 0.35rem;
		margin: 1rem 0;
		font-size: 1.5rem;
		& span {
			display: none;
		}
	}
`;

const LogoutCTA = styled.button`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 8px;
	color: #888a8e;
	background-color: transparent;
	border: none;
	padding-left: 0;

	&:hover {
		color: var(--color-orange);
	}
`;

const LogoSection = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 80%;
	margin: 0 auto 1rem auto;
	padding: 1rem;
	border-bottom: 1px solid #232732;
`;

const Logo = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: #ff5c5c;
	margin-right: 8px;
`;

const AppName = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
`;

function Sidebar() {
	const navigate = useNavigate();

	function logout() {
		localStorage.setItem("isConnected", JSON.stringify(false));
		navigate("/login");
	}

	return (
		<StyledSidebar>
			<div className="wrapper">
				<LogoSection to="/">
					<Logo>X</Logo>
					<AppName>Trade</AppName>
				</LogoSection>

				<NavList>
					<NavItem>
						<NavLink to="/">
							<IoMdHome />
							<span>Dashboard</span>
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/markets">
							<RiShoppingBasketFill />
							<span>Markets</span>
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/wallet">
							<TbTransactionBitcoin />
							<span>Wallet</span>
						</NavLink>
					</NavItem>
				</NavList>
			</div>

			<NavList>
				{/* <NavItem>
					<NavLink to="/settings">
						<IoIosSettings />
						<span>Settings</span>
					</NavLink>
				</NavItem> */}
				<NavItem>
					<LogoutCTA onClick={logout}>
						<IoIosLogOut />
						<span>Log out</span>
					</LogoutCTA>
				</NavItem>
			</NavList>
		</StyledSidebar>
	);
}

export default Sidebar;
