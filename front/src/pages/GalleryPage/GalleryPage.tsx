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

const GalleryPage = observer(() => {


	const [dimensions, {loading, error}] = useImageSize(art1)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	useEffect(() => {

		paint.items.map((item, index) => {

			//if (index > 2) return;
			console.log(typeof (item.images))

			if (dimensions && item.relativeSize == 0) {
				item.relativeSize = ((dimensions.width * imgHeight / dimensions.height) * 12) / 1400

			}
		})




	}, [])


	const handleClick = async () => {

		const response = await PaintingService.fetchPaintings();

		console.log(response);

		paint.items = response

	}

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
			<Button
				onClick={handleClick}
			>
				asdf
			</Button>

			<Gallery
			/>

			<ModalAddPainting
				open={isAddModalOpen}
				setOpen={setIsAddModalOpen}
			/>


			<Box
				sx={{
					position: 'fixed',
					bottom: 10,
					right: 10,
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

		</Box>
	);
});

export default GalleryPage;