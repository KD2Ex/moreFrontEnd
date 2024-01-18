import React, {useEffect, useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import paint from "../../store/paint";

const PaintingTextarea = ({item, setItem}) => {

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [desc, setDesc] = useState('');
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {

		if (!item) return;

		setTitle(item.title)
		setPrice(item.price)
		setDesc(item.desc)
		setWidth(item.width)
		setHeight(item.height)
	}, [])

	useEffect(() => {


		/*if (
			title ||
			price ||
			desc  ||
			width ||
			height ||
			files.length !== 0
		) {
			paint.setNewItem({...paint.newItem, title, price, desc, width, height, images: files})
		}
		console.log(paint.newItem)*/
		setItem(prev => {
			return {
				...prev,
				title,
				price,
				desc,
				width,
				height,
				/*images: paint.newItem?.images*/}
		})

	}, [title, price, desc, width, height])

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2
			}}

		>
			<Typography
				sx={{
					width: '100%'
				}}
			>
			</Typography>
			<TextField
				size={'small'}
				label={'Название'}
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				type={'number'}
				size={'small'}
				label={'Цена'}
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>

			<TextField
				maxRows={8}
				minRows={8}
				multiline
				size={'small'}
				label={'Описание'}
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>


			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 1
				}}
			>
				<span>Фактические размеры: </span>

				<TextField
					size={'small'}
					sx={{
						maxWidth: '100px'
					}}
					type={'number'}
					label={'Ширина'}
					value={width}
					onChange={(e) => setWidth(e.target.value)}
				/>
				x
				<TextField
					sx={{
						maxWidth: '100px'
					}}
					size={'small'}
					type={'number'}
					label={'Высота'}
					value={height}
					onChange={(e) => setHeight(e.target.value)}
				/>
			</Box>

		</Box>
	);
};

export default PaintingTextarea;