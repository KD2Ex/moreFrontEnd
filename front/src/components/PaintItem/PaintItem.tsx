import React, {FC, useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {IPaint} from "../../models/interfaces/IPaint";
import PaintPopover from "../PaintPopover/PaintPopover";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import AdminComponent from "../AdminComponent/AdminComponent";
import user from "../../store/user";
import {useSearchParams} from "react-router-dom";

interface PaintItemProps {
	item: IPaint,
	onClick
}

const PaintItem: FC<PaintItemProps> = observer(({
		item,
		height,
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
		if (event.button === 0) modal.openPaintingView(item);
		else setAnchor(event.currentTarget)

		setSearchParams({id: item.id})
	}

	useEffect(() => {


	}, [])

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
					height: `${height}px`,
					backgroundColor: '#243a48',
					p: 0,
					borderRadius: 2,
					transition: 'filter  300ms linear',
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
						position: "absolute",
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
						sx={{
							fontSize: 33
						}}
					>
						{item.title}
					</Typography>

					<Typography>
						{item.price}
					</Typography>

					<Typography>
						Материал: {item.material ? item.material.name : "Не указано"}
					</Typography>

					<Typography>
						Техника: {item.technique ? item.technique.name : "Не указано"}
					</Typography>

					<Typography
						sx={{
							fontSize: 20
						}}
					>
						{item.width} x {item.height} мм
					</Typography>
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