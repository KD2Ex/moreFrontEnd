import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import alert from "../../store/alert";

const ModalAddPainting = observer(({open, setOpen}) => {

	const [newItem, setNewItem] = useState(null)

	useEffect(() => {



	}, [])

	const handleClose = (event, reason) => {

		if (reason === 'backdropClick') return;

		paint.setNewItem(newItem)
		setOpen(false);
		console.log(paint.newItem)
	}

	const handleAdd = () => {

		paint.newItem = newItem;

		const isValid = paint.isValidPaint(paint.newItem);

		console.log()

		if (!isValid) {

			alert.openAlert('Заполните все поля', 'error')
			return;
		}


		paint.addPainting().then(res => {
			handleClose()
			alert.openAlert('Картина успешно добавлена', 'success')

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
					minWidth: '1200px'
				}}
			>

				<ModalEditContent
					item={newItem}
					setItem={setNewItem}
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