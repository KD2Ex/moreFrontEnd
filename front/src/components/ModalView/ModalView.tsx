import React, {useEffect, useState} from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import ModalViewContent from "../ModalViewContent/ModalViewContent";
import modal from "../../store/modal";
import ModalEditContent from "../ModalEditContent/ModalEditContent";
import paint from "../../store/paint";
import alert from "../../store/alert";
import loginPage from "../../pages/LoginPage/LoginPage";
import {IPaint} from "../../models/interfaces/IPaint";
import {useSearchParams} from "react-router-dom";

interface ModalViewProps {
	handleClose: React.Dispatch<boolean>,
}

const ModalView = observer(() => {

	const [searchParams, setSearchParams] = useSearchParams();
	const [open, setOpen] = useState(false);
	const [item, setItem] = useState<IPaint | null>(null);

/*	useEffect(() => {
		setItem(modal.paintingItem);
		setEditMode(modal.editMode);

		setOpen(modal.paintingViewOpen)

		console.log(editMode)

	}, [modal.paintingViewOpen])*/

	useEffect(() => {

		console.log('Modal', searchParams)

		if (searchParams.size === 0) {
			setOpen(false)
		} else {
			setOpen(true)
			const id = searchParams.get('id')

			setItem(paint.items.find(i => i.id == id));

			console.log(paint.items.find(i => i.id == id))

		}

	}, [searchParams])

	useEffect(() => {

		if (!open) {
			setSearchParams({})
		}

	}, [open])

	const handleClose = (event, reason) => {

		console.log(reason)

		if (reason === 'backdropClick' && !item) return;

		//setOpen(false);
		onClose();
	}


	const onClose = () => {
		modal.setPaintingViewOpen(false);

		console.log(item.files)
		setOpen(false)
	}

	if (!item) return;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'lg'}
			sx={{
				'& .MuiPaper-root': {
					m: 0,
					mx: 2,
					minWidth: {md: '900px', lg: '1200px'},

				}
			}}
		>
{/*
			<DialogTitle
				variant={'h4'}
			>
			</DialogTitle>*/}

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
				<ModalViewContent
					item={item}
				/>

			</DialogContent>

		</Dialog>
	);
});

export default ModalView;