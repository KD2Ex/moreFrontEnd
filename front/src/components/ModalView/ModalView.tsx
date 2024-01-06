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

const ModalView = observer(({open, setOpen, item}) => {

	const handleClose = (event, reason) => {

		console.log(reason)

		if (reason === 'backdropClick' && !item) return;

		setOpen(false);
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

				<ModalViewContent
					item={item}
				/>

			</DialogContent>

			<DialogActions
				sx={{
					display:  !item ? 'flex' : 'none'
				}}
			>


			</DialogActions>

		</Dialog>
	);
});

export default ModalView;