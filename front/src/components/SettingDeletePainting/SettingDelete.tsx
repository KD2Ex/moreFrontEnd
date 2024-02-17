import React from 'react';
import {Box, Button} from "@mui/material";
import paint from "../../store/paint";
import modal from "../../store/modal";

const SettingDelete = ({id, store}) => {

	const handleClick = async () => {

		modal.openActionDialog(store.delete.bind(store), [id]);

		//await paint.deletePainting(id)
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
				variant={'contained'}
				sx={{
					fontSize: 16,
					width: '100%',
					bgcolor: 'primary.red',
					'&:hover': {
						bgcolor: 'primary.hoverRed'
					}
				}}
			>
				Удалить картину
			</Button>
		</Box>
	);
};

export default SettingDelete;