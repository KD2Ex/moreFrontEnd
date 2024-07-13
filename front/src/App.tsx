import {useEffect} from 'react'
import {
	createBrowserRouter, RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import user from "./store/user";
import ParentPage from "./pages/ParentPage/ParentPage.tsx";
import GlobalAlerts from "./components/GlobalAlert/GlobalAlerts.tsx";
import locale from "./store/locale";
import BlogPage from "./pages/BlogPage/BlogPage";
import PostPage, {loader as postLoader} from "./pages/PostPage/PostPage";
import BlogCreatePage from "./pages/BlogCreatePage/BlogCreatePage";

function App() {

	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <ParentPage/>,
			children: [
				{
					path: '/',
					element: <MainPage/>,
				},
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
				{
					path: '/blog',
					element: <BlogPage/>,
				},
				{
					path: '/blog/:id',
					element: <PostPage/>,
					loader: postLoader
				},
				{
					path: '/blog/create',
					element: <BlogCreatePage/>,
				},
			]
		},
		{
			path: '/admin',
			element: <AdminPage/>,
		}
	])

	useEffect(() => {

		(async () => {


			user.checkAuth();

		})()

	}, [])

	return (
		<ThemeProvider
			theme={theme}
		>
			<CssBaseline/>
			<RouterProvider router={browserRouter}/>
			<GlobalAlerts/>

		</ThemeProvider>
	)
}

export default App
