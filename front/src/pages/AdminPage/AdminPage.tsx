import React from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";

const AdminPage = () => {



	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%'
				}}
			>

				<LoginForm

				/>

			</Box>



		</Box>
	);
};

export default AdminPage;