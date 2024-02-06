import React from 'react';
import {Box, Button, SpeedDial, SpeedDialAction} from "@mui/material";
import paint from "../../store/paint";
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import SpeedDialIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';

const actions = [
	{icon: <CollectionsIcon/>, name: "Добавить картину"},
	{icon: <SaveIcon/>, name: "Сохранить размеры"},
]

const AdminActions = ({modalAction}) => {

	const handleAdd = () => {
		modalAction(true)
	}

	const handleSave = async () => {
		await paint.saveSizes();
	}

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
						TooltipClasses={{
						}}
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
};

export default AdminActions;