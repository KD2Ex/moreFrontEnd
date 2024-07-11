import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import material from "../../store/material";
import LocaleText from "../Locale/LocaleText/LocaleText";

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
				fontSize={36}
			>
				{item?.title}
			</Typography>

			<LocaleText
				variant={'h5'}
				localeList={[
					{locale: 'ru', value: `Цена: ${item.price} ₽ `},
					{locale: 'en-US', value: `Cost: ${item.price} € `},
				]}
			/>

			<Typography
				sx={{
					flexWrap: 'wrap',
					width: '100%',
					wordWrap: 'break-word'
				}}
			>
				{item.desc}
			</Typography>

			<Box>
				<LocaleText
					fontSize={18}
					localeList={[
						{locale: 'ru', value: `Размеры: ${item.width} x ${item.height} мм`},
						{locale: 'en-US', value: `Dimensions: ${item.width} x ${item.height} mm`},
					]}
				/>

				<LocaleText
					fontSize={16}
					localeList={[
						{locale: 'ru', value: `Материал: ${item.material ? item.material.name : "Не указано"}`},
						{locale: 'en-US', value: `Material: ${item.material ? item.material.name : "Not specified"}`},
					]}
				/>

				<LocaleText
					fontSize={16}
					localeList={[
						{locale: 'ru', value: `Техника: ${item.technique ? item.technique.name : "Не указано"}`},
						{locale: 'en-US', value: `Technique: ${item.technique ? item.technique.name : "Not specified"}`},
					]}
				/>

			</Box>



		</Box>
	);
};

export default ModalInfo;