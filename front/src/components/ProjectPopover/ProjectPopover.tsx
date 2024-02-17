import React from 'react';
import {Box, Popover} from "@mui/material";
import SettingDelete from "../SettingDeletePainting/SettingDelete";
import SettingEditPainting from "../SettingEditPainting/SettingEditPainting";
import project from "../../store/project";

const ProjectPopover = ({anchor, setAnchor, item}) => {

	const open = Boolean(anchor)

	const handleClose = () => {
		setAnchor(null)
	}

	return (
		<Popover
			open={open}
			anchorEl={anchor}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
		>

			<Box
				sx={{
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					gap: 1
				}}
			>

				<SettingEditPainting
					item={item}
					func={console.log}
				/>
				<SettingDelete
					id={item.id}
					store={project}
				/>

			</Box>

		</Popover>
	);
};

export default ProjectPopover;