import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import material from "../../store/material";

const ModalInfo = ({item}) => {

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1
			}}
		>


			<Typography
				fontSize={42}
			>
				{item?.title}
			</Typography>

			<Typography
				variant={'h5'}
				sx={{

				}}
			>
				Цена: {item.price} ₽
			</Typography>

			<Typography
				sx={{
					flexWrap: 'wrap',
					width: '100%',
					wordWrap: 'break-word'
				}}
			>
				{item.desc}
			</Typography>

			<Typography
				variant={'h6'}
			>
				Размеры: {item.width} x {item.height} см

			</Typography>

			<Box>
				<Typography
					fontSize={16}
				>

					Материал: {item.material?.name ? item.material.name : "Не указано"}

				</Typography>

				<Typography
					fontSize={16}
				>
					Техника: {item.technique?.name ? item.technique.name : "Не указано"}
				</Typography>

			</Box>



		</Box>
	);
};

export default ModalInfo;