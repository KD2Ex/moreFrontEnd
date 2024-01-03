import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import Carousel from "nuka-carousel";
import Slider from 'react-slick';
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import loginPage from "../../pages/LoginPage/LoginPage";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import ModalEdit from "../ModalEdit/ModalEdit";
import ModalViewContent from "../ModalViewContent/ModalViewContent";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import paint from "../../store/paint";
import PaintingService from "../../../api/services/PaintingService";
import alert from "../../store/alert";

interface ModalViewProps {
	handleClose: React.Dispatch<boolean>,
}

const ModalView = observer(({open, setOpen, item, setItem}) => {

	const [newItem, setNewItem] = useState(paint.newItem)

	// ?
	const isAdmin = !item;

	const handleClick = async () => {

		console.log(newItem);

		const isValid = paint.isValidPaint(newItem);

		console.log()

		if (!isValid) {

			alert.openAlert('Заполните все поля', 'error')
			return;
		}


		paint.addPainting(newItem).then(res => {
			handleClose()
			alert.openAlert('Картина успешно добавлена', 'success')
		})

	}

	const handleClose = (event, reason) => {

		console.log(reason)

		if (reason === 'backdropClick' && !item) return;

		setOpen(false);
		//setItem(null);
	}

	useEffect(() => {
		console.log(!!item)
	}, [])

	useEffect(() => {

		if (!open) {
			//console.log(newItem)

			paint.createNewItem(newItem)
		} else {
			console.log(paint.newItem)

			setNewItem(paint.newItem)
		}

	}, [open])

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'xl'}

		>

			<DialogTitle>
				{
					item ? item.title : "Создание"
				}
			</DialogTitle>

			<DialogContent
				sx={{
					minWidth: '1200px'
				}}
			>

				{
					item
						? <ModalViewContent
							item={item}
						/>
						:
							<ModalEditContent
								item={newItem}
								setItem={setNewItem}
							/>
				}

			</DialogContent>

			<DialogActions
				sx={{
					display:  !item ? 'flex' : 'none'
				}}
			>

				<Button
					onClick={handleClick}
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

export default ModalView;