import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Popover, TextField, Typography} from "@mui/material";
import {imgHeight, sizes} from "../../consts";
import art1 from '../../assets/art1.jpg'
import {useImageSize} from "react-image-size";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import Gallery from "../../components/Gallery/Gallery";
import PaintingService from "../../../api/services/PaintingService";
import ModalAddPainting from "../../components/ModalAddPainting/ModalAddPainting";
import AdminComponent from "../../components/AdminComponent/AdminComponent";
import ActionDialog from "../../components/ActionDialog/ActionDialog";
import ModalView from "../../components/ModalView/ModalView";
import loginPage from "../LoginPage/LoginPage";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

const GalleryPage = observer(() => {


	const [isAddModalOpen, setIsAddModalOpen] = useState(false);



	useEffect(() => {

		(async () => {

			if (paint.loading) return;

			await paint.getItems();
		})()


	}, [])




	const handleAdd = () => {

		setIsAddModalOpen(true)
	}

	const handleSave = async () => {

		await paint.saveSizes();

	}

	return (
		<Box
			sx={{
				width: '100%'
			}}
		>

			<Gallery
			/>

			<ModalAddPainting
				open={isAddModalOpen}
				setOpen={setIsAddModalOpen}
			/>

			<AdminComponent>
				<Box
					sx={{
						position: 'fixed',
						bottom: 10,
						right: 10,
						zIndex: 2200

					}}
				>
					<Button
						onClick={handleAdd}
					>
						add
					</Button>

					<Button
						onClick={handleSave}
					>
						save
					</Button>
				</Box>
			</AdminComponent>

			<ModalView

			/>

		</Box>
	);
});

export default GalleryPage;