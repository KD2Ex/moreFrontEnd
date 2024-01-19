import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import paint from "../../store/paint";
import material from "../../store/material";
import {IMaterial} from "../../models/interfaces/IMaterial";
import {ITechnique} from "../../models/interfaces/ITechnique";
import {observer} from "mobx-react-lite";
import technique from "../../store/technique";
import {Form} from "react-router-dom";
import AddFilterParam from "../AddFilterParam/AddFilterParam";

const PaintingTextarea = observer(({item, setItem}) => {

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [desc, setDesc] = useState('');
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const [currentMaterial, setCurrentMaterial] = useState('');
	const [currentTechnique, setCurrentTechnique] = useState('')

	useEffect(() => {


		setCurrentMaterial(item.material.id)
		setCurrentTechnique(item.technique.id)
		console.log(item.technique.name)

		if (!item) return;

		setTitle(item.title)
		setPrice(item.price)
		setDesc(item.desc)
		setWidth(item.width)
		setHeight(item.height)


	}, [])

	useEffect(() => {

		setItem(prev => {
			return {
				...prev,
				title,
				price,
				desc,
				width,
				height,
				}
		})

	}, [title, price, desc, width, height])


	const handleMaterialChange = (event) => {
		setCurrentMaterial(event.target.value);
	}

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
					gap: 2
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




			<Box>

				<FormControl>
					<InputLabel>Материал</InputLabel>
					<Select
						size={'small'}
						value={currentMaterial}
						label={'Материал'}
						onChange={handleMaterialChange}
					>
						{material.items.map(item => (
							<MenuItem
								value={item.id}
							>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<AddFilterParam
					asyncFunc={material.addItem}
				/>

			</Box>

			<FormControl>
				<InputLabel>Техника</InputLabel>
				<Select
					size={'small'}
					value={currentTechnique}
					label={'Техника'}
				>
					{technique.items.map(item => (
						<MenuItem
							value={item.id}
						>
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>


		</Box>
	);
});

export default PaintingTextarea;