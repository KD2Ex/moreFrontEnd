import React, {FC, useEffect, useState} from 'react';
import technique from "../../store/technique";
import {Button, FormControl, InputLabel, MenuItem, Popover, Select} from "@mui/material";
import {observer} from "mobx-react-lite";
import alert from "../../store/alert";
import {IMaterial} from "../../models/interfaces/IMaterial";
import AdminComponent from "../AdminComponent/AdminComponent";

interface ParamSelectProps {
	id: number,
	setId: React.Dispatch<number>,
	items: any[],
	label: string,
	deleteFunc: () => void,
}

const ParamSelect: FC<ParamSelectProps> = observer(({id, setId, items, label, deleteFunc}) => {

	const [contextPts, setContextPts] = useState({x: 0, y: 0});
	const [currentId, setCurrentId] = useState(0);

	const open = contextPts.x != 0 && contextPts.y != 0;

	const handleChange = (event) => {

		setId(event.target.value)

	}

	const handleClose = () => {
		setContextPts({x: 0, y: 0})
	}

	const handleClick = async () => {

		if (currentId === id) {
			//alert.openAlert("")

			setId(items[0].id)
		}


		handleClose()
		await deleteFunc(currentId);
	}

	useEffect(() => {

		console.log(id)

	}, [id])

	return (
		<>
			<AdminComponent>
				<Popover
					open={open}
					onClose={handleClose}
					anchorReference={"anchorPosition"}
					anchorPosition={{
						top: contextPts.y,
						left: contextPts.x
					}}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
				>
					<Button
						onClick={handleClick}
					>
						Удалить
					</Button>
				</Popover>
			</AdminComponent>
			<FormControl
				sx={{
					flex: 1,
					minWidth: '250px'
				}}
			>
				<InputLabel size={'small'}>{label}</InputLabel>
				<Select
					size={'small'}
					value={id}
					label={label}
					onChange={handleChange}
					sx={{
					}}
				>
					{items.map(item => (
						<MenuItem
							key={item.id}
							value={item.id}
							onContextMenu={(e) => {
								e.preventDefault();
								setContextPts({
									x: e.clientX,
									y: e.clientY
								})
								setCurrentId(item.id)
							}}
						>
							{item.name}

						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>

	);
});

export default ParamSelect;