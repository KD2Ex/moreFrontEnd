import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import {IPaint} from "../../models/interfaces/IPaint";
import modal from "../../store/modal";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import alert from "../../store/alert";

const ModalEdit = observer(() => {


	useEffect(() => {


	}, [modal.paintingViewOpen])

	const handleClose = (event, reason) => {

		if (reason === 'backdropClick') return;
		onClose();
	}

	const handleClick = async () => {


		const isValid = paint.isPaintDataValid(modal.paintingItem);


		if (!isValid) {
			alert.openAlert('Заполните все поля', 'error')
			return;
		}
		paint.loading = true;
		await paint.updatePainting(modal.paintingItem)
		onClose();
		paint.loading = false;
	}

	const onClose = () => {
		modal.setPaintingViewOpen(false);
	}

	return (
		<Dialog
			open={modal.paintingViewOpen}
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
					mx: 2,
					minWidth: {xs: '350px', md: 700, lg: 1000},
				}}
			>
				<ModalEditContent
					item={modal.paintingItem}
				/>

			</DialogContent>

			<DialogActions>

				<Button
					onClick={handleClick}

				>
					Сохранить

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

export default ModalEdit;