import {useCallback, useEffect} from 'react'
import {
	createBrowserRouter, RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import user from "./store/user";
import ParentPage, {loader as parentLoader} from "./pages/ParentPage/ParentPage.tsx";
import GlobalAlerts from "./components/GlobalAlert/GlobalAlerts.tsx";
import BlogPage, {loader as postListLoader} from "./pages/BlogPage/BlogPage";
import PostPage, {loader as postLoader} from "./pages/PostPage/PostPage";
import PostCreatePage from "./pages/BlogCreatePage/PostCreatePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AdminPage, {loader as pAdminLoader, projectsLoader} from "./pages/AdminPages/PaintingAdminPage/AdminPage";
import LoginToPortfolio from "./pages/LoginToPortfolio/LoginToPortfolio";
import CookiesPopup from "./newComponents/CookiesPopup/CookiesPopup.tsx";
import FilePage from "./pages/FilePage/FilePage.tsx";

function App() {

	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <ParentPage/>,
			loader: parentLoader,
			errorElement: <ErrorPage/>,
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
				{
					path: '/padmin',
					element: <AdminPage type={"painting"}/>,
					loader: pAdminLoader
				},
				{
					path: '/projectadmin',
					element: <AdminPage type={"project"}/>,
					loader: projectsLoader
				}
			]
		},
		{
			path: '/admin',
			element: <LoginPage/>,
		},
		{
			path: '/portfoliomode',
			element: <LoginToPortfolio/>
		},
		{
			path: "/policy",
			element: <FilePage/>
		},
	])


	const onScroll = useCallback(() => {
		document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
	}, [])

	useEffect(() => {


		window.addEventListener('scroll', onScroll, false);
		(async () => {

			user.checkAuth();
		})()

		return () => {
			window.removeEventListener('scroll', onScroll, false)
		}

	}, [])

	return (
		<ThemeProvider
			theme={theme}
		>
			<CssBaseline/>
			<RouterProvider router={browserRouter}/>
			<GlobalAlerts/>
			{!localStorage.getItem("policyShown") &&
				(<CookiesPopup/>)}

		</ThemeProvider>
	)
}

export default App
