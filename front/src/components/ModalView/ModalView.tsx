import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import ModalViewContent from "../ModalViewContent/ModalViewContent";
import modal from "../../store/modal";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import paint from "../../store/paint";

interface ModalViewProps {
	handleClose: React.Dispatch<boolean>,
}

const ModalView = observer(() => {

	const [open, setOpen] = useState(false);
	const [item, setItem] = useState(null);

	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		setItem(modal.paintingItem);
		setEditMode(modal.editMode);

		setOpen(modal.paintingViewOpen)

		console.log(editMode)

	}, [modal.paintingViewOpen])

	const handleClose = (event, reason) => {

		console.log(reason)

		if (reason === 'backdropClick' && !item) return;

		//setOpen(false);
		onClose();
	}

	const handleClick = async () => {

		console.log(item)
		await paint.updatePainting(item);

		onClose();

		item.files = undefined;
	}

	const onClose = () => {
		modal.setPaintingViewOpen(false);
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'xl'}

		>

			<DialogTitle
				variant={'h4'}
			>
			</DialogTitle>

			<DialogContent
				sx={{
					minWidth: '1200px'
				}}
			>
				{!editMode
					? <ModalViewContent
						item={item}
					/>

					: <ModalEditContent
						item={item}
						setItem={setItem}
						editMode={editMode}
					/>
				}

			</DialogContent>

			{editMode &&
                <DialogActions>



                    <Button
						onClick={handleClick}

					>
                        Сохранить

                    </Button>

                </DialogActions>
			}

		</Dialog>
	);
});

export default ModalView;