import React from 'react';
import {Box, Button} from "@mui/material";
import modal from "../../store/modal";

const SettingEditPainting = ({item, func}) => {

	const handleClick = () => {

		if (func) {
			func('eqweqwe')
			return;
		}
		console.log(item)
		modal.openPaintingView(item, true);


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