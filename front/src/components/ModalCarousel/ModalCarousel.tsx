import React, {useEffect, useRef, useState} from 'react';
import Carousel from "nuka-carousel";
import {Box} from "@mui/material";
import paint from "../../store/paint";

const ModalCarousel = ({items, setItems}) => {

	const sliderRef = useRef(null);
	const [slideIndex, setSlideIndex] = useState(0);
	const [isShiftPressed, setIsShiftPressed] = useState(false);

	useEffect(() => {
		console.log(items)
	}, [])


	const deleteImg = async (event, imageIndex) => {

		console.log(items)
		if (!event.shiftKey) return;
		if (items.length === 1) return;

		const newItems = items.filter((item, index) => index != imageIndex)

		await paint.deleteImage(items[imageIndex]);

		if (imageIndex === items.length - 1) {
			setSlideIndex(prev => prev - 1);
		}

		setItems([...newItems])
	}

	useEffect(() => {

		document.body.addEventListener('keydown', (e) => {
			setIsShiftPressed(e.key === "Shift")
		})

		document.body.addEventListener('keyup', (e) => {
			setIsShiftPressed(false)
		})

	}, [])

	return (
		<Carousel
			ref={sliderRef}
			slideIndex={slideIndex}

		>
			{items?.map((image, index) => (
				<Box
					sx={{
						height: '500px',
						//width: '1000px'
					}}
					key={index}
					onClick={(event) => deleteImg(event, index)}

				>
					<Box
						component={'img'}
						src={import.meta.env.VITE_BASE_URL + image}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',//item.objectFit,
							filter: isShiftPressed && items.length !== 1 ? "brightness(50%)" : 'none',
							//color: isShiftPressed ? "red" : 'none',
						}}
					>
					</Box>
				</Box>

			))}
		</Carousel>
	);
};

export default ModalCarousel;