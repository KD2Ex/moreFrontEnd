import React, {useState} from 'react';
import {Box, SpeedDial, SpeedDialAction} from "@mui/material";
import SpeedDialIcon from '@mui/icons-material/Add';
import {observer} from "mobx-react-lite";

interface AdminActionsProps {
	actions: any[]
}

const AdminActions = observer(({actions}: AdminActionsProps) => {

	const [open, setOpen] = useState(false)

	return (
		<Box
			sx={{
				position: 'fixed',
				top: 8,
				left: 8,
				zIndex: 2200,
			}}
		>
			<SpeedDial
				onClick={() => setOpen(prev => !prev)}
				open={open}
				ariaLabel={"SpeedDial basic"}
				sx={{
					position: 'absolute',
					top: 16,
					left: 16
				}}
				icon={<SpeedDialIcon/>}
				direction={"down"}

			>
				{actions?.map((action, index) => (
					<SpeedDialAction
						key={index}
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
							}
						}}
					/>
				))}
			</SpeedDial>
		</Box>
	);
});

export default AdminActions;