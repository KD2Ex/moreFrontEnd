import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import paint from "../../store/paint";
import material from "../../store/material";
import {IMaterial} from "../../models/interfaces/IMaterial";
import {ITechnique} from "../../models/interfaces/ITechnique";
import {observer} from "mobx-react-lite";
import technique from "../../store/technique";
import AddFilterParam from "../AddFilterParam/AddFilterParam";
import ParamSelect from "../ParamSelect/ParamSelect";
import crud from "../../store/crud";
import MaterialService from "../../../api/services/MaterialService";
import TechniqueService from "../../../api/services/TechniqueService";
import locale from "../../store/locale";

const PaintingTextarea = observer(({item, setItem}) => {

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState(0);
	const [desc, setDesc] = useState('');
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const [currentMaterial, setCurrentMaterial] = useState('');
	const [currentTechnique, setCurrentTechnique] = useState('')

	useEffect(() => {
		
		if (!item) return;

		if (item.material) setCurrentMaterial(item.material.id)
		if (item.technique) setCurrentTechnique(item.technique.id)

		setTitle(item.title[locale.currentLocale.name])
		setPrice(item.price[locale.currentLocale.name])
		setDesc(item.desc[locale.currentLocale.name])
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
				material: {
					id: currentMaterial,
					name: material.items.find(i => i.id == currentMaterial)?.name
				},
				technique: {
					id: currentTechnique,
					name: technique.items.find(i => i.id == currentTechnique)?.name
				},

			}
		})

	}, [title, price, desc, width, height, currentMaterial, currentTechnique])


	const handleMaterialChange = (event) => {
		setCurrentMaterial(event.target.value);
	}

/*	const handleTechniqueChange = (event) => {
		setCurrentTechnique(event.target.value)
	}*/

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				mt: 2,
				position: 'sticky',
				top: 0
			}}

		>

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




			<Box
				sx={{
					display: 'flex',
					gap: 1
				}}
			>


				<ParamSelect
					id={currentMaterial}
					setId={setCurrentMaterial}
					items={material.items}
					deleteFunc={material.deleteItem.bind(material)}
					label={'Материал'}
				/>

				<AddFilterParam
					asyncFunc={MaterialService.add}
					items={material.items}
				/>

			</Box>

			<Box
				sx={{
					display: 'flex',
					gap: 1
				}}
			>
				<ParamSelect
					id={currentTechnique}
					setId={setCurrentTechnique}
					items={technique.items}
					deleteFunc={technique.deleteItem.bind(technique)}
					label={'Техника'}
				/>

				<AddFilterParam
					asyncFunc={TechniqueService.add}
					items={technique.items}
				/>
			</Box>

		</Box>
	);
});

export default PaintingTextarea;