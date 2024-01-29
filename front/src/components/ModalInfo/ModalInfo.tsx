import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import material from "../../store/material";

const ModalInfo = ({item}) => {

	return (
		<Box>


			<Typography
				variant={'h3'}
			>
				{item?.title}
			</Typography>

			<Divider
				sx={{
					my: 1,
				}}
			>

			</Divider>

			<Typography
				variant={'h4'}
			>
				Цена: {item.price} ₽
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

			<Divider
				sx={{
					my: 1
				}}
			/>

			<Typography
				fontSize={20}
			>

				Материал: {item.material?.name ? item.material.name : "Не указано"}

			</Typography>

			<Typography
				fontSize={20}
			>
				Техника: {item.technique?.name ? item.technique.name : "Не указано"}
			</Typography>

			<Typography
				variant={'h5'}
			>
				Размеры: {item.width} x {item.height} см

			</Typography>
		</Box>
	);
};

export default ModalInfo;