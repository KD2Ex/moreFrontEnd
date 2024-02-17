import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import ImageUpload from "../ImageUpload/ImageUpload";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ProjectTextarea from "./ProjectTextarea/ProjectTextarea";

const ModalAddProjectContent = ({item, setItem}) => {

	const [files, setFiles] = useState([])
	const [images, setImages] = useState([])

	useEffect(() => {

		if (item?.images?.length) {
			setImages([...item.images])
		}

	}, [])

	useEffect(() => {

		setItem(prev => {
			return {
				...prev,
				files
			}
		})

	}, [files])

	return (
		<Grid
			container
			spacing={2}
			sx={{
				mt: .5,
				minWidth: '1000px'
			}}
		>

			<Grid
				item
				md={6}
				xs={12}
			>

				{images?.length ? (
					<ModalCarousel
						items={images}
						setItems={setImages}
					/>
				) : null}


				<ImageUpload
					files={files}
					setFiles={setFiles}
				/>
			</Grid>

			<Grid
				item
				md={6}
				xs={12}
			>
				<ProjectTextarea
					item={item}
					setItem={setItem}
				/>
			</Grid>

		</Grid>
	);
};

export default ModalAddProjectContent;