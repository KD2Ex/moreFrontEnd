import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogContent, Fade, Modal} from "@mui/material";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import appInfo from "../../store/appInfo";
import {toJS} from "mobx";

interface FullscreenImageProps {
	open: boolean,
	setOpen: (value: boolean) => void,
	//src: string,
	images: string[],
	defaultOrder: number
}

const FullscreenImage: FC<FullscreenImageProps> = observer(({open, setOpen, images, defaultOrder}) => {

	const [order, setOrder] = useState(defaultOrder);

	useEffect(() => {

		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		console.log(toJS(images))

	}, [open])

	useEffect(() => {

		console.log(defaultOrder)
		setOrder(defaultOrder)

	}, [defaultOrder])

	const handlePrev = () => {

		if (order == 0) return;
		setOrder(prev => prev - 1)
		//modal.setOrder(modal.projectImageOrder - 1)
	}

	const handleNext = () => {
		if (order == images.length - 1) return;
		setOrder(prev => prev + 1)
		//modal.setOrder(modal.projectImageOrder + 1)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Fade
			in={open}
			onExited={() => setOrder(defaultOrder)}
		>
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
						src={appInfo.url + images[order]?.name}
						sx={{
							maxWidth: '80%',
							width: 'auto',
							height: 'auto',
							maxHeight: '80%',
							objectFit: 'contain',
							zIndex: 2200,
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
		</Fade>

	);
});

export default FullscreenImage;