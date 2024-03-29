import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom'
import {Box, Typography} from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import GlobalAlerts from "../../components/GlobalAlert/GlobalAlerts";
import technique from "../../store/technique";
import material from "../../store/material";


const MainPage = () => {

	useEffect(() => {
		(async () => {

			if (!technique.loading) {
				await technique.getItems()
			}

			if (!material.loading) {
				await material.getItems()
			}

		})()
	}, [])

	return (
		<Box
			sx={{
				maxWidth: '95%',
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto',
				px: {xs: 1, xl: 0}
			}}
		>

			<NavBar/>

			<Outlet/>

			<GlobalAlerts/>

		</Box>
	);
};

export default MainPage;