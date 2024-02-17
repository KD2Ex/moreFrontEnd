import React, {useState} from 'react';
import {Box, SpeedDial, SpeedDialAction} from "@mui/material";
import paint from "../../store/paint";
import SpeedDialIcon from '@mui/icons-material/Add';
import user from "../../store/user";
import {observer} from "mobx-react-lite";
import alert from "../../store/alert";

interface AdminActionsProps {
	actions: any[]
}

const AdminActions = observer(({actions}: AdminActionsProps) => {


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
								bgcolor: 'primary.main'
							}
						}}

					/>
				))}
			</SpeedDial>
		</Box>
	);
});

export default AdminActions;