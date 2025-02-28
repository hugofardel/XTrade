import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../ui/SpinnerMini.jsx";

function ProtectedRoute({ children }) {
	const navigate = useNavigate();
	const isAuthenticated = useMemo(() => {
		const saved = localStorage.getItem("isConnected");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	}, []);

	useEffect(
		function () {
			if (!isAuthenticated) navigate("/login");
		},
		[isAuthenticated, navigate]
	);

	if (isAuthenticated) return children;
	return <SpinnerMini />;
}

export default ProtectedRoute;
