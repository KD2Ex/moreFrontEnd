import React from 'react';
import {Box, Button} from "@mui/material";
import paint from "../../store/paint";

const SettingDeletePainting = ({id}) => {

	const handleClick = async () => {
		await paint.deletePainting(id)
	}

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Button
				onClick={handleClick}
				sx={{
					fontSize: 16,
					width: '100%'
				}}
			>
				Удалить картину
			</Button>
		</Box>
	);
};

export default SettingDeletePainting;