import React, {useEffect} from 'react';
import Carousel from "nuka-carousel";
import {Box} from "@mui/material";

const ModalCarousel = ({items}) => {

	useEffect(() => {
		console.log(items)
	}, [])

	return (
		<Carousel

		>
			{items?.map(image => (
				<Box
					sx={{
						height: '500px',
						//width: '1000px'
					}}
				>
					<Box
						component={'img'}
						src={import.meta.env.VITE_BASE_URL + image}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'contain'//item.objectFit
						}}
					>
					</Box>
				</Box>

			))}
		</Carousel>
	);
};

export default ModalCarousel;