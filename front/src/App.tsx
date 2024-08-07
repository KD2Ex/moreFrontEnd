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
import ParentPage, {loader as parentLoader} from "./pages/ParentPage/ParentPage.tsx";
import GlobalAlerts from "./components/GlobalAlert/GlobalAlerts.tsx";
import BlogPage, {loader as postListLoader} from "./pages/BlogPage/BlogPage";
import PostPage, {loader as postLoader} from "./pages/PostPage/PostPage";
import PostCreatePage from "./pages/BlogCreatePage/PostCreatePage";

function App() {

	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <ParentPage/>,
			loader: parentLoader,
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
					loader: postListLoader
				},
				{
					path: '/blog/:id',
					element: <PostPage/>,
					loader: postLoader
				},
				{
					path: '/blog/create',
					element: <PostCreatePage/>,
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
