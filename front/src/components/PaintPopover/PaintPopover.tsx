import React, {useEffect, useState} from 'react';
import {Box, Button, Popover, TextField, Typography} from "@mui/material";
import SettingChangeSize from "../SettingChangeSize/SettingChangeSize";
import {IPaint} from "../../models/interfaces/IPaint";
import SettingChangeFit from "../SettingChangeFit/SettingChangeFit";
import paint from "../../store/paint";
import SettingDeletePainting from "../SettingDeletePainting/SettingDeletePainting";
import SettingEditPainting from "../SettingEditPainting/SettingEditPainting";

interface PaintPopoverProps {
	anchor: HTMLAnchorElement,
	setAnchor: React.Dispatch<HTMLAnchorElement | null>,
	item: IPaint
}

const PaintPopover = ({anchor, setAnchor, item}) => {

	const openSettings = Boolean(anchor);

	const changeSize = (value: number) => {
		item.relativeSize = value;
	}

	const changeFit = (value: string) => {
		item.objectFit = value;
	}

	const handleClose = () => {
		paint.addEdited(item)
		setAnchor(null);
	}

	return (
		<Popover
			open={openSettings}
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
				<SettingChangeSize
					size={item.relativeSize}
					changeSize={changeSize}
				/>
				<SettingChangeFit
					itemFit={item.objectFit}
					changeFit={changeFit}
				/>


				<Box
					onClick={handleClose}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 1
					}}
				>
					<SettingEditPainting
						item={item}
					/>

					<SettingDeletePainting
						id={item.id}
					/>
				</Box>


			</Box>

		</Popover>
	);
};

export default PaintPopover;