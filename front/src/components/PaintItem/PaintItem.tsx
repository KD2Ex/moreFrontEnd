import React, {FC, useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {useImageSize} from "react-image-size";
import {imgHeight} from "../../consts";
import {IPaint} from "../../models/interfaces/IPaint";
import Carousel from "nuka-carousel";
import PaintPopover from "../PaintPopover/PaintPopover";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import AdminComponent from "../AdminComponent/AdminComponent";

interface PaintItemProps {
	item: IPaint,
	onClick
}

const PaintItem: FC<PaintItemProps>
	= observer(({
		item,
		 onClick,
	height,
		 ...props
	}) =>
{

	const img = item?.images ? item.images[0] : null;

	//const [dimensions, {loading, error}] = useImageSize(img)
	const [anchor, setAnchor] = useState(null);
	const [isHover, setIsHover] = useState(false);

	const handleClick = (event) => {
		if (event.button === 0) modal.openPaintingView(item);
		else setAnchor(event.currentTarget)
	}

	const onMouseEnter = () => {
		setIsHover(true)
	}

	const onMouseLeave = () => {
		setIsHover(false)
		console.log('leave')
	}

	useEffect(() => {

		if (anchor == null) {
		}

	}, [anchor])

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
					backgroundColor: '#5986a2',
					p: 0,
					borderRadius: 2,
				}}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
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
						opacity: isHover ? 1 : 0,
						transition: 'opacity 300ms',
						'&:hover': {
							opacity: 1,
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

					component={'img'}
					src={'http://localhost:7000/' + img}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: item.objectFit,
						transition: 'filter 300ms',
						filter: isHover && 'brightness(40%)',
						'&:hover': {
						}
					}}
				>
				</Box>
			</Box>

		</>

	);
});

export default PaintItem;