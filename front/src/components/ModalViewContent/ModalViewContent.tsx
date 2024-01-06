import React, {useEffect, useState} from 'react';
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import {Grid} from "@mui/material";

const ModalViewContent = ({item}) => {

	const [images, setImages] = useState([])

	useEffect(() => {

		setImages(item.images)

	}, [])

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
				md={8}
			>
				<ModalCarousel
					items={images}
					setItems={setImages}
				/>

			</Grid>

			<Grid
				item
				md={3}
				sx={{
				}}
			>


				<ModalInfo
					item={item}
				/>


			</Grid>

		</Grid>
	);
};

export default ModalViewContent;