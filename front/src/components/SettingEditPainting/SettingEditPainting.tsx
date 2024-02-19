import React from 'react';
import {Box, Button} from "@mui/material";
import modal from "../../store/modal";
import project from "../../store/project";

const SettingEditPainting = ({item, func, proj}) => {

	const handleClick = () => {

		if (proj) {
			console.log(item)
			project.openEdit(item)
			return;
		}

		if (func) {
			func(item)
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