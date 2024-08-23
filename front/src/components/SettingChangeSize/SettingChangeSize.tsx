import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {Simulate} from "react-dom/test-utils";

const SettingChangeSize = ({size, changeSize}) => {

	const [value, setValue] = useState(size);

	const handleClick = () => {
		changeSize(value)
	}

	const handleChange = (e) => {
		setValue(e.target.value)
		changeSize(e.target.value)

	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				gap: 2
			}}
		>
			<Typography
				sx={{
					m: 1,
					width: 'fit-content'
				}}
			>
				Размер:
			</Typography>
			<TextField
				size={'small'}
				sx={{
					width: 60
				}}
				value={value}
				onChange={handleChange}
				color={value <= 2 ? "warning" : null}
			>

			</TextField>
			{/*<Button
				onClick={handleClick}
			>
				Confirm
			</Button>*/}
		</Box>
	);
};

export default SettingChangeSize;