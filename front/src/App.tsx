import {useEffect, useState} from 'react'
import {
	BrowserRouter,
	createBrowserRouter, RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import user from "./store/user";

function App() {

	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <MainPage/>,
			children: [
				{
					path: '/gallery',
					element: <GalleryPage/>,
				},
				{
					path: '/portfolio',
					element: <PortfolioPage/>,
				},
				{
					path: '/login',
					element: <LoginPage/>,
				},
			]
		},
		{
			path: '/admin',
			element: <AdminPage/>,
		}
	])

	useEffect(() => {

		user.checkAuth();

	}, [])

	return (
		<ThemeProvider
			theme={theme}
		>
			<CssBaseline/>
			<RouterProvider router={browserRouter}/>
		</ThemeProvider>
	)
}

export default App
