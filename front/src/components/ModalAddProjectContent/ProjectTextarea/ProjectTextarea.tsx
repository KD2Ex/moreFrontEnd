import React, {useEffect, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {IProject} from "../../../models/interfaces/IProject";
import {observer} from "mobx-react-lite";
import project from "../../../store/project";
import {toJS} from "mobx";
import locale from "../../../store/locale";

interface ProjectTextareaProps {
	item: IProject,
	setItem: React.Dispatch<IProject | null>
}

const ProjectTextarea = observer(({item}) => {


	useEffect(() => {

		if (!item) return;
		console.log('textarea effect')
		console.log(toJS(item))
	}, [])


	const changeTitle = (e) => {
		item.title[locale.currentLocale.name] = e.target.value
	}

	const changeDesc = (e) => {
		item.desc[locale.currentLocale.name] = e.target.value
	}

	const changeLevels = (e) => {
		item.levels = e.target.value
	}

	const changeArea = (e) => {
		item.area = e.target.value
	}

	const changeCost = (e) => {
		item.cost[locale.currentLocale.name] = e.target.value
	}

	const changeTime = (e) => {
		item.timePeriod[locale.currentLocale.name] = e.target.value
	}

	const changeAddress = (e) => {
		item.address[locale.currentLocale.name] = e.target.value
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				position: 'sticky',
				top: 0
			}}
		>

			<TextField
				size={'small'}
				label={'Название'}
				value={item.title[locale.currentLocale.name]}
				onChange={changeTitle}
			/>
			<TextField
				size={'small'}
				label={'Описание'}
				multiline
				value={item.desc[locale.currentLocale.name]}
				onChange={changeDesc}
				maxRows={8}
				minRows={8}
			/>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 2
				}}
			>
				<TextField
					size={'small'}
					label={'Этажей'}
					value={item.levels}
					type={'number'}
					onChange={changeLevels}
					sx={{
						width: '100%'
					}}
				/>
				<TextField
					size={'small'}
					label={'Площадь'}
					type={'number'}
					value={item.area}
					onChange={changeArea}
					sx={{
						width: '100%'
					}}
				/>
			</Box>

			<TextField
				size={'small'}
				label={'Итоговая стоимость'}
				value={item.cost[locale.currentLocale.name]}
				onChange={changeCost}
			/>
			<TextField
				size={'small'}
				label={'Срок реализации'}
				value={item.timePeriod[locale.currentLocale.name]}
				onChange={changeTime}
			/>

			<TextField
				size={'small'}
				label={'Местоположение'}
				value={item.address[locale.currentLocale.name]}
				onChange={changeAddress}
			/>
		</Box>
	);
});

export default ProjectTextarea;