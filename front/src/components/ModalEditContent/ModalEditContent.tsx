import React, {useEffect, useState} from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import img1 from '../../assets/placeholder.jpg'
import ImageUpload from "../ImageUpload/ImageUpload";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";


const ModalEditContent = observer(({item, setItem}) => {

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [desc, setDesc] = useState('');
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [files, setFiles] = useState([])

	useEffect(() => {

		console.log(paint.newItem[Object.getOwnPropertySymbols(paint.newItem)[0]].values_.size)

		if (paint.newItem[Object.getOwnPropertySymbols(paint.newItem)[0]].values_.size != 0) {
			setTitle(paint.newItem.title)
			setPrice(paint.newItem.price)
			setDesc(paint.newItem.desc)
			setWidth(paint.newItem.width)
			setHeight(paint.newItem.height)
			setFiles(paint.newItem.images)
		}

	}, [])

	useEffect(() => {


		if (
			title ||
			price ||
			desc  ||
			width ||
			height ||
			files.length !== 0
		) {
			paint.setNewItem({...paint.newItem, title, price, desc, width, height, images: files})
		}
		console.log(paint.newItem)
		//setItem({...item, title, price, desc, width, height, images: files})

	}, [title, price, desc, width, height, files])

	return (
		<Grid
			container
			spacing={2}
			sx={{
				width: '100%'
			}}
		>

			<Grid
				item
				md={7}
			>

				{/*<ModalCarousel
					items={images}
				/>
*/}
				<ImageUpload
					files={files}
					setFiles={setFiles}
				/>

			</Grid>

			<Grid
				item
				md={5}
			>
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


			</Grid>

		</Grid>
	);
});

export default ModalEditContent;