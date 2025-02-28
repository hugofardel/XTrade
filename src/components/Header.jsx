import styled from "styled-components";
import avatar from "../assets/avatar.svg";
import { IoIosNotifications } from "react-icons/io";

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem 2rem;
	color: white;
	background-color: var(--color-grey);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	grid-area: header;
`;

const LogoSection = styled.div`
	display: flex;
	align-items: center;
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

const SearchBar = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`;

const SearchInput = styled.input`
	width: 75%;
	padding: 0.8rem 1.25rem;
	border-radius: 20px;
	border: none;
	outline: none;
	background-color: var(--color-black);
	color: white;
	font-size: 1rem;

	&::placeholder {
		color: #aaaaaa;
	}
`;

const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const NotificationIcon = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	background-color: var(--color-black);
	border-radius: 50%;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: var(--color-grey);
	}

	svg {
		font-size: 1.5rem;
		color: white;
	}
`;

const NotificationDot = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 10px;
	height: 10px;
	background-color: var(--color-orange);
	border-radius: 50%;
`;

const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const ProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	object-fit: cover;
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const ProfileName = styled.span`
	font-size: 14px;
`;

function Header() {
	return (
		<HeaderContainer>
			<LogoSection>
				<Logo>X</Logo>
				<AppName>Trade</AppName>
			</LogoSection>

			<SearchBar>
				<SearchInput type="text" placeholder="Search" />
			</SearchBar>

			<Actions>
				<NotificationIcon>
					<IoIosNotifications />
					<NotificationDot />
				</NotificationIcon>

				<Profile>
					<ProfileImage src={avatar} alt="User" />
					<ProfileInfo>
						<ProfileName>Ethan Maxwell</ProfileName>
					</ProfileInfo>
				</Profile>
			</Actions>
		</HeaderContainer>
	);
}

export default Header;
