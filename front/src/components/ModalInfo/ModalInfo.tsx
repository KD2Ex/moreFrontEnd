import React from 'react';
import {Box, Divider, Typography} from "@mui/material";
import material from "../../store/material";
import LocaleText from "../Locale/LocaleText/LocaleText";
import locale from "../../store/locale";

const ModalInfo = ({item}) => {

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1
			}}
		>

			<LocaleText
				fontSize={36}
				localeList={[
					{locale: 'ru', value: `${item.title[locale.currentLocale.name]}`},
					{locale: 'en-US', value: `${item.title[locale.currentLocale.name]}`},
				]}
			/>

			<LocaleText
				variant={'h5'}
				localeList={[
					{locale: 'ru', value: `Цена: ${item.price[locale.currentLocale.name]} ₽ `},
					{locale: 'en-US', value: `Cost: ${item.price[locale.currentLocale.name]} € `},
				]}
			/>

			<LocaleText
				sx={{
					flexWrap: 'wrap',
					width: '100%',
					wordWrap: 'break-word'
				}}
				localeList={[
					{locale: 'ru', value: `${item.desc[locale.currentLocale.name]}`},
					{locale: 'en-US', value: `${item.desc[locale.currentLocale.name]}`},
				]}
			/>

			<Box>
				<LocaleText
					fontSize={18}
					localeList={[
						{locale: 'ru', value: `Размеры: ${item.width} x ${item.height} мм`},
						{locale: 'en-US', value: `Dimensions: ${item.width} x ${item.height} mm`},
					]}
				/>

				<LocaleText
					localeList={[
						{locale: 'ru', value: `Материал: ${item.material ? '' : "Не указано"}`},
						{locale: 'en-US', value: `Material: ${item.material ? '' : "Not specified"}`},
					]}
				>
					{item.material.name[locale.currentLocale.name]}
				</LocaleText>

				<LocaleText
					localeList={[
						{locale: 'ru', value: `Техника: ${item.technique ? '' : "Не указано"}`},
						{locale: 'en-US', value: `Technique: ${item.technique ? '' : "Not specified"}`},
					]}
				>
					{item.technique.name[locale.currentLocale.name]}
				</LocaleText>

			</Box>



		</Box>
	);
};

export default ModalInfo;