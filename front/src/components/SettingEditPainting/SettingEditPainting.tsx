import React from 'react';
import {Box, Button} from "@mui/material";
import modal from "../../store/modal";

const SettingEditPainting = ({item}) => {

	const handleClick = () => {

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