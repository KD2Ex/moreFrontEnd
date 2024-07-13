import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import ImageUpload from "../ImageUpload/ImageUpload";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ProjectTextarea from "./ProjectTextarea/ProjectTextarea";
import {observer} from "mobx-react-lite";
import project from "../../store/project";
import {toJS} from "mobx";
import LanguageChange from "../LanguageChange/LanguageChange";

const ModalAddProjectContent = observer(({item}) => {

	const [files, setFiles] = useState([])

	useEffect(() => {

		console.log(toJS(item))
		setFiles(item.files)


	}, [])


	useEffect(() => {

		console.log('files effect')

		item.files = files;

		//project.setEditItem({...project.editItem, files: files})

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

				{item?.images?.length ? (
					<ModalCarousel
						items={item.images}
						deleteImage={project.deleteImage.bind(project)}
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
				<Box
					sx={{
						mb: 2
					}}
				>
					<LanguageChange/>

				</Box>

				<ProjectTextarea
					item={item}
				/>
			</Grid>

		</Grid>
	);
});

export default ModalAddProjectContent;