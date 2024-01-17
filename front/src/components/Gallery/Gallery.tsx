import React, {useEffect, useState} from 'react';
import paint from "../../store/paint";
import PaintItem from "../PaintItem/PaintItem";
import {sizes} from "../../consts";
import {Box, Button, Grid} from "@mui/material";
import art1 from "../../assets/art1.jpg";
import ModalView from "../ModalView/ModalView";
import {observer} from "mobx-react-lite";
import modal from "../../store/modal";
import ActionDialog from "../ActionDialog/ActionDialog";

const Gallery = observer(() => {

	const [currentItem, setCurrentItem] = useState(null);
	const [openModal, setOpenModal] = useState(false);
	const [actionDialogOpen, setActionDialogOpen] = useState(false);
	const [isShiftPressed, setIsShiftPressed] = useState(false);

	const [deleteId, setDeleteId] = useState(0);

	const handleClose = () => {
		setOpenModal(false)
	}

	const handleClick = (event, value) => {
		setCurrentItem(value)
		setOpenModal(true)
	}

	const handleDelete = async (id: number) => {

		//confirm dialog
		console.log(paint.deletePainting)
		if (modal.isActionDialogVisible) {
			setActionDialogOpen(true);
			setDeleteId(id)
		} else {
			await paint.deletePainting(id)
		}

	}


	useEffect(() => {

		document.body.addEventListener('keydown', (e) => {
			setIsShiftPressed(e.key === "Shift")
		})

		document.body.addEventListener('keyup', (e) => {
			setIsShiftPressed(false)
		})

		console.log(actionDialogOpen)

	}, [])

	useEffect(() => {

		console.log(isShiftPressed ? "Shift is down" : "Shift is up")

	}, [isShiftPressed])

	return (

		<>
			<ModalView
				open={openModal}
				setOpen={setOpenModal}
				item={currentItem}
			/>

			<ActionDialog
				open={actionDialogOpen}
				setOpen={setActionDialogOpen}
				id={deleteId}
			/>

			<Grid
				container
				spacing={2}
			>

				{paint.items.map((item, index) => (
					<Grid
						key={index}
						item
						xs={sizes.full}
						md={item.relativeSize}
						sx={{
							position: 'relative'
						}}
					>
						<Button
							variant={'contained'}
							sx={{
								visibility: isShiftPressed ? 'visible' : 'hidden',
								opacity: isShiftPressed ? '1' : '0',
								position: 'absolute',
								right: '0',
								bgcolor: 'red',
								transition: 'visibility 200ms opacity 0.5s linear'
							}}
							onClick={() => handleDelete(item.id)}
						>
							x
						</Button>
						<PaintItem
							item={item}
							onClick={handleClick}
							height={500}

						/>
					</Grid>


				))}
			</Grid>
		</>
	);
});

export default Gallery;