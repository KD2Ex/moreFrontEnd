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

	const handleClick = (event) => {
		if (event.shiftKey) {
			onClick(event, item)
		} else {
			setAnchor(event.currentTarget);
		}

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
				//onClick={handleClick}
				sx={{
					height: `${height}px`,
					backgroundColor: '#5986a2',
					p: 0,
					borderRadius: 2,
				}}
				onContextMenu={(e) => {
					e.preventDefault();
					console.log('rightClick')
					handleClick(e)
				}}
			>

				<Box
					component={'img'}
					src={'http://localhost:7000/' + img}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: item.objectFit
					}}
				>

				</Box>
			</Box>

		</>

	);
});

export default PaintItem;