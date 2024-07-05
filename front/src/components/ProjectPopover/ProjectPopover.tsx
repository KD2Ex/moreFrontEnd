import React from 'react';
import {Box, Popover, TextField} from "@mui/material";
import SettingDelete from "../SettingDeletePainting/SettingDelete";
import SettingEditPainting from "../SettingEditPainting/SettingEditPainting";
import project from "../../store/project";
import SettingChangeSize from "../SettingChangeSize/SettingChangeSize";
import SettingProjectHeight from "../SettingProjectHeight/SettingProjectHeight";

const ProjectPopover = ({anchor, setAnchor, item}) => {


	const open = Boolean(anchor)

	const handleClose = () => {
		setAnchor(null)
	}

	function handleOpen() {
		project.openEdit(item);
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
				<SettingProjectHeight
					item={item}
				/>
				<SettingEditPainting
					item={item}
					func={project.openEdit.bind(project)}
					proj={true}

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