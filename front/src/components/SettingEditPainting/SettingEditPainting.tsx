import React from 'react';
import {Box, Button} from "@mui/material";
import modal from "../../store/modal";
import project from "../../store/project";

const SettingEditPainting = ({item, func, close}) => {

	const handleClick = () => {

		close()

		if (func) {
			func(item)
			return;
		}
	}

	return (
		<Box
			sx={{
				display: 'flex'
			}}
		>
			<Button
				onClick={handleClick}
				variant={'contained'}
				sx={{
					width: '100%',
					fontSize: 16
				}}
			>
				Редактировать
			</Button>
		</Box>
	);
};

export default SettingEditPainting;