import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogContent, Modal} from "@mui/material";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FullscreenImage = observer(({open}) => {


	useEffect(() => {
		console.log("IMAGES")


	}, [])

	useEffect(() => {

		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

	}, [open])



	const handlePrev = () => {
		modal.setOrder(modal.projectImageOrder - 1)
	}

	const handleNext = () => {

		modal.setOrder(modal.projectImageOrder + 1)
	}

	const handleClose = () => {
		modal.openProjectImage(false)
	}

	if (!open) return null;

	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 1300
			}}
			//onClick={() => modal.openProjectImage(false)}
		>

			<Box
				onClick={handleClose}
				sx={{
					width: '100vw',
					height: '100%',
					position: 'fixed',
					top: 0,
					left: 0,
					bgcolor: 'rgba(0,0,0,0.75)',
					zIndex: 1,
				}}
			>

			</Box>


			<Box
				sx={{
					display: 'flex',
					margin: 'auto',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Box
					draggable={false}
					component={'img'}
					src={import.meta.env.VITE_BASE_URL + modal.projectImage[modal.projectImageOrder].name}
					sx={{
						maxWidth: '80%',
						width: 'auto',
						height: 'auto',
						maxHeight: '80%',
						objectFit: 'contain',
						zIndex: 2200,
						//item.objectFit,
						//filter: isShiftPressed && items.length !== 1 ? "brightness(50%)" : 'none',
						//color: isShiftPressed ? "red" : 'none',
					}}
				>
				</Box>

			</Box>

			<Box
				sx={{
					position: 'fixed',
					top: 0,
					right: 0,
					zIndex: 2100
				}}
			>
				<Button
					onClick={handleClose}
				>
					<CloseIcon/>
				</Button>
			</Box>

			<Box
				sx={{
					position: 'absolute',
					bottom: 0,
					width: '100%',
					zIndex: 2100
				}}
			>
				<Box
					sx={{
						display: 'flex',
						margin: 'auto',
						width: '100%',
						justifyContent: 'center',
						mb: 2
					}}
				>
					<Button
						onClick={handlePrev}
					>
						<ArrowBackIosNewIcon/>
					</Button>

					<Button
						onClick={handleNext}
					>
						<ArrowForwardIosIcon/>
					</Button>
				</Box>

			</Box>
		</Box>
	);
});

export default FullscreenImage;