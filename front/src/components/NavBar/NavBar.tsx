import React from 'react';
import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";

const NavBar = () => {

	const buttons = [
		{
			title: 'Главная',
			url: '',
		},
		{
			title: 'Галерея',
			url: '/gallery',
		},
		{
			title: 'Админ',
			url: '/admin',
		},
	]

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				my: 2,
				gap: 2
			}}
		>

			{buttons.map((item, index) => (
				<Button
					key={index}
					component={Link}
					to={item.url}
				>
					{item.title}
				</Button>
			))}

		</Box>
	);
};

export default NavBar;