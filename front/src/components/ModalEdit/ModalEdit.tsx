import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, TextField} from "@mui/material";
import {IPaint} from "../../models/interfaces/IPaint";
import modal from "../../store/modal";
import ModalViewContent from "../ModalViewContent/ModalViewContent";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import alert from "../../store/alert";

const ModalEdit = observer(() => {

	const [open, setOpen] = useState(false);
	const [item, setItem] = useState<IPaint | null>(null);

	useEffect(() => {
		setItem(modal.paintingItem);
		setOpen(modal.paintingViewOpen)

		console.log('effec')

	}, [modal.paintingViewOpen])

	const handleClose = (event, reason) => {
		console.log(reason)


		//setOpen(false);
		onClose();
	}

	const handleClick = async () => {


		console.log(item)

		const isValid = paint.isValidPaintData(item);

		console.log(isValid)

		if (!isValid) {
			alert.openAlert('Заполните все поля', 'error')
			return;
		}

		await paint.updatePainting(item)

		onClose();


	}

	const onClose = () => {
		modal.setPaintingViewOpen(false);
		setOpen(false)
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'xl'}
			sx={{
				'& .MuiPaper-root': {
					m: 0,
					mx: 2
				}
			}}
		>

			<DialogContent
				sx={{
					//minWidth: '1200px',
					borderColor: '#8bb9a2',
					/*mb: 2,
					mt: 1,
					mx: 2*/
					p: 1,
					m: 0
				}}
			>
				<ModalEditContent
					item={item}
					setItem={setItem}
				/>

			</DialogContent>

			<DialogActions>

				<Button
					onClick={handleClick}

				>
					Сохранить

				</Button>

			</DialogActions>


		</Dialog>
	);
});

export default ModalEdit;