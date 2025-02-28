import styled from "styled-components";
import SpinnerMini from "../ui/SpinnerMini.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background-color: var(--background-color);
`;

const Container = styled.form`
	width: 500px;
	max-width: 90%;
	border-radius: 12px;
	background-color: var(--color-black);
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
	padding: 1.5rem 1.5rem 2.5rem 1.5rem;
	font-weight: 600;
	font-size: 1.5rem;
	line-height: 2rem;
`;

const Fields = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1.5rem;
	padding-top: 0;
	width: 100%;
`;

const Field = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.75rem;
	width: 100%;
`;

const Label = styled.label`
	font-weight: 600;
	line-height: 1;
`;

const Input = styled.input`
	width: 100%;
	height: 2.6rem;
	padding: 0.4rem 0.9rem;
	border-radius: 8px;
	border: 1px solid hsl(240 3.7% 15.9%);
	background-color: transparent;
	color: rgb(250, 250, 250);

	&::placeholder {
		color: #8e8e96;
	}
`;

const ContainerButton = styled.div`
	padding: 1.5rem;
	padding-top: 0.5rem;
`;

const Button = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 2.4rem;
	padding: 0.5rem 1rem;
	color: hsl(240 5.9% 10%);
	background-color: hsl(0 0% 98%);
	font-weight: 500;
	border: none;
	border-radius: 8px;
`;

const ErrorMessage = styled.p`
	color: hsl(7 81% 55%);
`;

function Login() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [id, setId] = useState("toto");
	const [password, setPassword] = useState("toto");
	const [errors, setErrors] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			checkLoginInfo(id, password);
		}, 1500);
	}

	function checkLoginInfo(id, password) {
		if (id === "toto" && password === "toto") {
			localStorage.setItem("isConnected", true);
			navigate("/");
		} else {
			setIsLoading(false);
			setErrors(true);
		}
	}

	return (
		<Main>
			<Container onSubmit={handleSubmit}>
				<Title>Login</Title>

				<Fields>
					<Field>
						<Label htmlFor="id">Identifiant</Label>
						<Input id="id" type="text" placeholder="Identifiant" value={id} onChange={(e) => setId(e.target.value)} />
					</Field>

					<Field>
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Field>
				</Fields>

				{errors && <ErrorMessage>Login information incorrect !</ErrorMessage>}

				<ContainerButton>
					<Button disabled={isLoading}>{isLoading ? <SpinnerMini /> : "Login"}</Button>
				</ContainerButton>
			</Container>
		</Main>
	);
}

export default Login;
