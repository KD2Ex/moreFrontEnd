import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogContent, Modal} from "@mui/material";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import ModalEditContent from "../ModalEditContent/ModalEditContent";

const wheel = (e) => {
	e.preventDefault();
}

const FullscreenImage = observer(({src, open}) => {

	const [index, setIndex] = useState(0)

	useEffect(() => {
		console.log("IMAGES")

		setIndex(0);

	}, [])

	useEffect(() => {

		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			setIndex(0)
			document.body.style.overflow = ""
		}

	}, [open])

	const handlePrev = () => {
		if (index - 1 < 0) return;

		setIndex(prev => prev - 1);
	}

	const handleNext = () => {
		if (index + 1 >= modal.projectImage.length) return;

		setIndex(prev => prev + 1)
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
					bgcolor: 'rgba(0, 0, 0, .25)',
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
					src={import.meta.env.VITE_BASE_URL + modal.projectImage[index].name}
					sx={{
						width: '80%',
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
					X
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
						justifyContent: 'center'
					}}
				>
					<Button
						variant={'contained'}
						onClick={handlePrev}
					>
						Prev
					</Button>

					<Button
						onClick={handleNext}
					>
						next
					</Button>
				</Box>

			</Box>
		</Box>
	);
});

export default FullscreenImage;