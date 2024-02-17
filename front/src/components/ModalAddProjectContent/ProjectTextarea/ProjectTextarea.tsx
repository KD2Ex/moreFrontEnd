import React, {useEffect, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {IProject} from "../../../models/interfaces/IProject";

interface ProjectTextareaProps {
	item: IProject,
	setItem: React.Dispatch<IProject | null>
}

const ProjectTextarea = ({item, setItem} : ProjectTextareaProps) => {

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [levels, setLevels] = useState(0)
	const [area, setArea] = useState(0)
	const [cost, setCost] = useState(0)
	const [time, setTime] = useState('')
	const [address, setAddress] = useState('')

	useEffect(() => {

		if (!item) return;

		setTitle(item.title)
		setDesc(item.desc)
		setLevels(item.levels)
		setArea(item.area)
		setCost(item.cost)
		setTime(item.timePeriod)
		setAddress(item.address)

	}, [])

	useEffect(() => {

		//@ts-ignore
		setItem((prev) => {
			return {
				...prev,
				title,
				desc,
				levels,
				area,
				cost,
				timePeriod: time,
				address
			}
		})

	}, [title, desc, levels, area, cost, time, address])

	const changeTitle = (e) => {
		setTitle(e.target.value)
	}

	const changeDesc = (e) => {
		setDesc(e.target.value)
	}

	const changeLevels = (e) => {
		setLevels(e.target.value)
	}

	const changeArea = (e) => {
		setArea(e.target.value)
	}

	const changeCost = (e) => {
		setCost(e.target.value)
	}

	const changeTime = (e) => {
		setTime(e.target.value)
	}

	const changeAddress = (e) => {
		setAddress(e.target.value)
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
				value={title}
				onChange={changeTitle}
			/>
			<TextField
				size={'small'}
				label={'Описание'}
				multiline
				value={desc}
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
					value={levels}
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
					value={area}
					onChange={changeArea}
					sx={{
						width: '100%'
					}}
				/>
			</Box>

			<TextField
				size={'small'}
				label={'Итоговая стоимость'}
				type={'number'}
				value={cost}
				onChange={changeCost}
			/>
			<TextField
				size={'small'}
				label={'Срок реализации'}
				value={time}
				onChange={changeTime}
			/>

			<TextField
				size={'small'}
				label={'Местоположение'}
				value={address}
				onChange={changeAddress}
			/>


		</Box>
	);
};

export default ProjectTextarea;