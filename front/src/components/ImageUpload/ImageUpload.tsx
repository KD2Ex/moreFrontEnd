import React, {useState} from 'react';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import {Box} from "@mui/material";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType);



const ImageUpload = ({files, setFiles}) => {


	return (
		<Box
			sx={{
			}}
		>
			<FilePond
				files={files}
				onupdatefiles={setFiles}
				allowMultiple={true}
				allowRemove
				allowReorder
				acceptedFileTypes={['image/*']}
				onreorderfiles={(newOrder, origin, index) => setFiles([...newOrder])}
				server={{
					process: (
						fieldName,
						file,
						metadata,
						load,
						error,
						progress,
						abort,
						transfer,
						options) => {

						const formData = new FormData();
						console.log(fieldName, ' + ', file, ' + ', file.name)
						formData.append('file', file/*, file.name*/);

						const controller = new AbortController();

						load(file)
						/*const response = PaintingService.addPainting(formData, progress, controller)
							.then(res => {
								load(res.file)
							})*/
						/*axios({
							method: 'POST',
							url: 'http://localhost:3000/upload',
							data: formData,
							onUploadProgress: (e) => {
								// updating progress indicator
								progress(e.lengthComputable, e.loaded, e.total)
							}
						}).then(response => {
							// passing the file id to FilePond
							load(response.file)
						}).catch((thrown) => {
							if (axios.isCancel(thrown)) {
								console.log('Request canceled', thrown.message)
							} else {
								// handle error
							}
						})
						// Setup abort interface*/
						console.log(files)
						/*setFiles([
							...files,
							file
						])*/
						return {
							abort: () => {
								controller.abort('Operation canceled by user');
								abort()
							}
						}
					}
				}}
			/>
		</Box>
	);
};

export default ImageUpload;