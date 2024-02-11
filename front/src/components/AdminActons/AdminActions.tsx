import React, {useState} from 'react';
import {Box, Button, SpeedDial, SpeedDialAction} from "@mui/material";
import paint from "../../store/paint";
import SaveIcon from '@mui/icons-material/Save';
import SpeedDialIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import user from "../../store/user";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {observer} from "mobx-react-lite";
import alert from "../../store/alert";

const AdminActions = observer(({modalAction}) => {

	const [fill, setFill] = useState(true);

	const handleAdd = () => {
		modalAction(true)
	}

	const handleSave = async () => {
		await paint.saveSizes();
	}

	const switchFill = () => {

		setFill(prev => !prev);

		user.setAdminView(fill)
	}

	const changeOrder = async () => {
		try {
			user.setChangeOrderMode(!user.changeOrderMode)

			console.log(user.changeOrderMode)

			if (!user.changeOrderMode) {
				alert.openAlert("Порядок успешно сохранен", "success")
				await paint.updateOrder()
			} else {
				alert.openAlert("Убедитесь, что сортировка картин отключена", "warning")
			}

		} catch (e) {

		}

	}

	const actions = [
		{
			icon: <AddPhotoAlternateIcon/>,
			name: "Добавить картину",
			onClick: handleAdd,
		},
		{
			icon: <SaveIcon/>,
			name: "Сохранить размеры",
			onClick: handleSave
		},
		{
			icon: <CollectionsIcon/>,
			name: fill ? "Отключить заполнение" : "Включить заполнение",
			onClick: switchFill
		},
		{
			icon: <CollectionsIcon/>,
			name: user.changeOrderMode ? "Сохранить порядок" : "Изменить порядок",
			onClick: changeOrder
		},
	]

	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: 8,
				left: 8,
				zIndex: 2200,
				transform: "translateZ(0px)"
			}}
		>
			<SpeedDial
				ariaLabel={"SpeedDial basic"}
				sx={{
					position: 'absolute',
					bottom: 16,
					left: 16
				}}
				icon={<SpeedDialIcon/>}
				direction={"up"}

			>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						tooltipOpen
						tooltipPlacement={'right'}
						onClick={action.onClick}
						sx={{
							'& span': {
								width: 'fit-content',
								whiteSpace: 'nowrap',
								//border: '1px white solid'
								bgcolor: 'primary.main'
							}
						}}

					/>
				))}
			</SpeedDial>

			{/*<Button
				onClick={handleAdd}
			>
				add
			</Button>

			<Button
				onClick={handleSave}
			>
				save
			</Button>*/}
		</Box>
	);
});

export default AdminActions;