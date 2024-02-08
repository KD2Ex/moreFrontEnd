import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import Gallery from "../../components/Gallery/Gallery";
import ModalAddPainting from "../../components/ModalAddPainting/ModalAddPainting";
import AdminComponent from "../../components/AdminComponent/AdminComponent";
import ModalView from "../../components/ModalView/ModalView";
import PaintingFilter from "../../components/PaintingFilter/PaintingFilter";
import AdminActions from "../../components/AdminActons/AdminActions";

const GalleryPage = observer(() => {


	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	useEffect(() => {

		(async () => {

			if (paint.loading) return;

			await paint.getItems();

			paint.setViewItems(paint.items)
		})()


	}, [])


	return (
		<Box
			sx={{
				width: '100%'
			}}
		>

			<Box
				sx={{
					mb: 2
				}}
			>
				<PaintingFilter

				/>
			</Box>


			<Gallery
			/>

			<ModalAddPainting
				open={isAddModalOpen}
				setOpen={setIsAddModalOpen}
			/>

			<AdminComponent>
				<AdminActions
					modalAction={setIsAddModalOpen}
				/>
			</AdminComponent>

			<ModalView

			/>

		</Box>
	);
});

export default GalleryPage;