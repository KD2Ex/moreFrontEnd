import React from 'react';
import {Typography} from "@mui/material";

const ModalInfo = ({price, desc}) => {

	return (
		<div>
			<Typography
				variant={'h4'}
			>
				{price}
			</Typography>

			<Typography
				variant={'h5'}
				sx={{
					flexWrap: 'wrap',
					width: '100%',
					wordWrap: 'break-word'
				}}
			>
				{desc}
			</Typography>
		</div>
	);
};

export default ModalInfo;