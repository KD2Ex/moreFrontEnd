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

		console.log(item)
		if (!item) return;
		setFiles(item.files)

		console.log(item)

	}, [])

	useEffect(() => {
		item.files = files
	}, [files])

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
				md={7}
			>
				<Box
					sx={{
						mb: 2
					}}
				>
					<ModalCarousel
						items={item.images}
					/>
				</Box>
				<ImageUpload
					files={files}
					setFiles={setFiles}
				/>

			</Grid>

			<Grid
				item
				md
				sx={{
				}}
			>
				<LanguageChange/>
				<PaintingTextarea
					item={item}
				/>

			</Grid>

		</Grid>
	);
});

export default ModalEditContent;