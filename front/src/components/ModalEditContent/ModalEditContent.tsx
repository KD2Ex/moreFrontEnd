import React, {useEffect, useState} from 'react';
import {Box, Grid, TextField, Typography} from "@mui/material";
import ImageUpload from "../ImageUpload/ImageUpload";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import PaintingTextarea from "../PaintingTextarea/PaintingTextarea";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import loginPage from "../../pages/LoginPage/LoginPage";


const ModalEditContent = observer(({item, setItem, editMode}) => {

	const [files, setFiles] = useState([])
	const [images, setImages] = useState([]);

	useEffect(() => {


		if (!item) return;
		setFiles(item.files)

		if (!editMode) return;
		console.log(item)
		setImages(item.images)


	}, [])

	useEffect(() => {

		setItem(prev => {
			return {
				...prev,
				files: files
			}
		})

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


				{editMode &&
					(
						<Box
							sx={{
								mb: 2
							}}
						>
							<ModalCarousel
								items={images}
								setItems={setImages}
							/>
						</Box>
					)
				}
				<ImageUpload
					files={files}
					setFiles={setFiles}
				/>

			</Grid>

			<Grid
				item
				md={5}
			>

				<PaintingTextarea
					item={item}
					setItem={setItem}
				/>

			</Grid>

		</Grid>
	);
});

export default ModalEditContent;