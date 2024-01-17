import React, {useEffect, useState} from 'react';
import {Box, MenuItem, Select, Typography} from "@mui/material";
import loginPage from "../../pages/LoginPage/LoginPage";

const items = [
	{
		value: 'cover',
		title: 'Кроп'
	},
	{
		value: 'contain',
		title: 'Содержать'
	},
	{
		value: 'fill',
		title: 'Заполнить'
	},
	{
		value: 'scale-down',
		title: 'Понизить'
	},
	{
		value: 'none',
		title: 'По умолчанию'
	},
]

const SettingChangeFit = ({itemFit, changeFit}) => {

	const [fit, setFit] = useState(itemFit);

	const handleChange = (e) => {
		setFit(e.target.value)
		changeFit(e.target.value)


	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2
			}}
		>


			<Typography>
				Отображение:
			</Typography>

			<Select
				value={fit}
				onChange={handleChange}
				size={'small'}
			>

				{items.map((item, index) => (
					<MenuItem key={index} value={item.value}>
						{item.title}
					</MenuItem>
				))}

			</Select>

		</Box>
	);
};

export default SettingChangeFit;