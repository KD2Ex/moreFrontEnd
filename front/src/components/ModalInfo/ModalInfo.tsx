import React from 'react';
import {Divider, Typography} from "@mui/material";

const ModalInfo = ({item}) => {

	return (
		<div>


			<Typography
				variant={'h3'}
			>
				{item?.title}
			</Typography>

			<Divider
				sx={{
					color: 'blue',
					my: 2
				}}
			>

			</Divider>

			<Typography
				variant={'h4'}
			>
				{item.price} ₽
			</Typography>

			<Typography
				variant={'h6'}
				sx={{
					flexWrap: 'wrap',
					width: '100%',
					wordWrap: 'break-word'
				}}
			>
				{item.desc}
			</Typography>

			<Typography
				variant={'h5'}
			>
				Размеры: {item.width} x {item.height} см

			</Typography>
		</div>
	);
};

export default ModalInfo;