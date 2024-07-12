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
import modal from "../../store/modal";
import {toJS} from "mobx";

interface LocaleInfo {
	'ru': string,
	'en-US': string
}

const updateItem = (items, id, item) => {
	const newItem = items.find(i => i.id === +id)

	if (!newItem) return;

	modal.setName(item,{
		'ru': newItem.name['ru'],
		'en-US': newItem.name['en-US'],
	}, +newItem.id)
}

const PaintingTextarea = observer(({item}) => {

	const [currentMaterial, setCurrentMaterial] = useState('');
	const [currentTechnique, setCurrentTechnique] = useState('')

	useEffect(() => {

		console.log(item)

		if (!item) return;

		if (item.material) setCurrentMaterial(item.material.id)
		if (item.technique) setCurrentTechnique(item.technique.id)


	}, [])

	useEffect(() => {


		updateItem(material.items, +currentMaterial, item.material);

	}, [currentMaterial])

	useEffect(() => {

		updateItem(technique.items, currentTechnique, item.technique);

	}, [currentTechnique])


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
				value={item.title[locale.currentLocale.name]}
				onChange={(e) => {
					console.log(e.target.value)
					item.title[locale.currentLocale.name] = e.target.value
				}}
			/>
			<TextField
				type={'number'}
				size={'small'}
				label={'Цена'}
				value={item.price[locale.currentLocale.name]}
				onChange={(e) => {
					item.price[locale.currentLocale.name] = e.target.value
				}}
			/>

			<TextField
				maxRows={8}
				minRows={8}
				multiline
				size={'small'}
				label={'Описание'}
				value={item.desc[locale.currentLocale.name]}
				onChange={(e) => {
					item.desc[locale.currentLocale.name] = e.target.value
				}}
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
					value={item.width}
					onChange={(e) => {
						modal.setWidth(item, e.target.value)
					}}
				/>
				x
				<TextField
					sx={{
						maxWidth: '100px'
					}}
					size={'small'}
					type={'number'}
					label={'Высота'}
					value={item.height}
					onChange={(e) => {
						modal.setItemHeight(item, e.target.value)
					}}
				/>
			</Box>

			<Box
				sx={{
					display: 'flex',
					gap: 1
				}}
			>
				<ParamSelect
					id={item.material.id}
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