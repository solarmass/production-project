import { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О приложении</Link>
			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					<Route path={"/about"} element={<AboutPageAsync />} />
					<Route path={"/"} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
