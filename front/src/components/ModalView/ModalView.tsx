import React, {useEffect, useState} from 'react';
import {Dialog, DialogContent} from "@mui/material";
import {observer} from "mobx-react-lite";
import ModalViewContent from "../ModalViewContent/ModalViewContent";
import modal from "../../store/modal";
import {useSearchParams} from "react-router-dom";

interface ModalViewProps {
	handleClose: React.Dispatch<boolean>,
}

const ModalView = observer(() => {

	const [searchParams, setSearchParams] = useSearchParams();
	const [open, setOpen] = useState(false);

	useEffect(() => {

		console.log('Modal', searchParams)

		if (searchParams.size === 0) {
			setOpen(false)
		} else {
			if (!modal.paintingItem) {
				setSearchParams({})
			} else {
				setOpen(true)
			}
		}
	}, [searchParams])


	const handleClose = (event, reason) => {

		console.log(reason)
		onClose();
	}


	const onClose = () => {
		modal.setPaintingViewOpen(false);
		setSearchParams({})
		setOpen(false)
	}


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
					zIndex: 4100
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
					m: 0,
					zIndex: 4100
				}}
			>
				<ModalViewContent
					item={modal.paintingItem}
				/>

			</DialogContent>

		</Dialog>
	);
});

export default ModalView;