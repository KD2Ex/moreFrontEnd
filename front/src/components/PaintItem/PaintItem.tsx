import React, {FC, useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {IPaint} from "../../models/interfaces/IPaint";
import PaintPopover from "../PaintPopover/PaintPopover";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import AdminComponent from "../AdminComponent/AdminComponent";
import user from "../../store/user";
import {useSearchParams} from "react-router-dom";
import paint from "../../store/paint";
import LocaleText from "../Locale/LocaleText/LocaleText";
import locale from "../../store/locale";
import Utils from "../../utils";

interface PaintItemProps {
	item: IPaint,
	height: number
}

const PaintItem: FC<PaintItemProps> = observer(({
		item,
	}: PaintItemProps) =>
{

	let img = item.images
		.find(i => i.order === Math.min(...item?.images.map(img => img.order)));

	if (!img) {
		img = item.images[0]
	}

	const [anchor, setAnchor] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleClick = (event) => {
		if (event.button === 0) {
			setSearchParams({id: item.id})
			modal.paintingItem = paint.items.find(i => i.id == item.id)
		}
		//if (event.button === 0) modal.openPaintingView(item);
		else setAnchor(event.currentTarget)
	}

	return (
		<>
			<AdminComponent>
				<PaintPopover
					anchor={anchor}
					setAnchor={setAnchor}
					item={item}
				/>
			</AdminComponent>

			<Box
				onClick={handleClick}
				sx={{
					height: `${paint.rowHeight}px`,
					backgroundColor: '#243a48',
					p: 0,
					borderRadius: 2,
					transition: 'filter  300ms linear',
					position: 'relative',
					//filter: 'brightness(40%)',
					//opacity: .2,'
					'&:hover': {
						//backdropFilter: 'brightness(60%)',
						'& img': {
							filter: 'brightness(45%)',
						},
					}
				}}
				onContextMenu={(e) => {
					console.log(e)
					e.preventDefault();
					handleClick(e)
				}}
			>
				<Box
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						flexWrap: 'wrap',
						zIndex: 1100,
						opacity: user.changeOrderMode ? 1 : 0,
						//opacity: 0,
						transition: 'opacity 300ms',
						'&:hover': {
							opacity: 1,
							'&:img': {
								filter: 'brightness(40%)'
							}
						}
					}}
				>

					<Typography
						fontSize={33}
						sx={{
							textAlign: 'center'
						}}
					>
						{item.title[locale.currentLocale.name]}
					</Typography>

					<LocaleText
						childBefore
						localeList={[
							{locale: 'ru', value: ` ₽`},
							{locale: 'en-US', value: ` €`},
						]}
					>
						{item.price[locale.currentLocale.name]}
					</LocaleText>

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

					<LocaleText
						localeList={[
							{locale: 'ru', value: `${item.width} x ${item.height} мм`},
							{locale: 'en-US', value: `${item.width} x ${item.height} mm`},
						]}
						sx={{
							fontSize: 20
						}}
					/>

				</Box>

				<Box
					loading={'lazy'}
					component={'img'}
					src={import.meta.env.VITE_BASE_URL + img?.name}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: item.objectFit,
						transition: 'filter 300ms',
						filter: (item.isFiltered) ? 'brightness(100%)' : 'brightness(40%)',
						'&:hover': {
							filter:'brightness(40%)'
						}
					}}
				>
				</Box>
			</Box>

		</>

	);
});

export default PaintItem;