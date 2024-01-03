import React from 'react';
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import {Grid} from "@mui/material";

const ModalViewContent = ({item}) => {
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
					items={item.images}
				/>

			</Grid>

			<Grid
				item
				md={3}
				sx={{
				}}
			>


				<ModalInfo
					price={item?.price}
					desc={item?.desc}
				/>


			</Grid>

		</Grid>
	);
};

export default ModalViewContent;