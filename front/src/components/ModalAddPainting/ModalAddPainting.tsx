import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import alert from "../../store/alert";

const ModalAddPainting = observer(({open, setOpen}) => {


	const handleClose = (event, reason) => {

		if (reason === 'backdropClick') return;


		setOpen(false);
		console.log(paint.newItem)
	}

	const handleAdd = () => {


		if (Object.keys(paint.newItem).length === 0) return;

		const isValid = paint.isPaintDataValid(paint.newItem) && paint.isValidPaintImages(paint.newItem);

		console.log(isValid)

		if (!isValid) {

			alert.openAlert('Заполните все поля', 'error')
			return;
		}


		paint.addPainting(paint.newItem).then(res => {
			handleClose()
			alert.openAlert('Картина успешно добавлена', 'success')
			paint.resetNewItem();
		})

	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'xl'}
		>

			<DialogTitle>
				Создание
			</DialogTitle>

			<DialogContent
				sx={{
					minWidth: {xs: '350px', md: 700, lg: 1000}
				}}
			>

				<ModalEditContent
					item={paint.newItem}
				/>

			</DialogContent>

			<DialogActions>

				<Button
					onClick={handleAdd}
				>
					Добавить картину
				</Button>

				<Button
					onClick={handleClose}
				>
					Отмена
				</Button>

			</DialogActions>

		</Dialog>
	);
});

export default ModalAddPainting;