import React, {useEffect, useState} from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";
import ImageUpload from "../ImageUpload/ImageUpload";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import PaintingTextarea from "../PaintingTextarea/PaintingTextarea";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import loginPage from "../../pages/LoginPage/LoginPage";
import LanguageChange from "../LanguageChange/LanguageChange";
import modal from "../../store/modal";


const ModalEditContent = observer(({item}) => {

	const [files, setFiles] = useState([])

	useEffect(() => {

		if (!item) return;
		setFiles(item.files)

	}, [])

	useEffect(() => {
		item.files = files
	}, [files])

	if (!item) return null;

	return (
		<Grid
			container
			spacing={2}
			sx={{
				width: '100%'
			}}
		>
			<Grid
				item
				md
				xs={12}
				sx={{
				}}
			>
				<LanguageChange/>
				<PaintingTextarea
					item={item}
				/>

			</Grid>

			<Grid
				item
				md={6}
				xs={12}
			>
				<Box
					sx={{
						mb: 2
					}}
				>
					<ModalCarousel
						items={item.images}
						deleteImage={paint.deleteImage.bind(paint)}
					/>
				</Box>
				<ImageUpload
					files={files}
					setFiles={setFiles}
				/>

			</Grid>



		</Grid>
	);
});

export default ModalEditContent;