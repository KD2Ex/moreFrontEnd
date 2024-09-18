import React, {useEffect, useRef} from 'react';
import Carousel from "nuka-carousel";
import {Box, Button} from "@mui/material";
import ProjectImage from "../../ProjectImage/ProjectImage";
import {observer} from "mobx-react-lite";
import modal from "../../../store/modal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectCarousel = observer(({items, height}) => {

	const sliderRef = useRef()

	useEffect(() => {

		console.log(sliderRef.current.style.height)
		sliderRef.current.style.height += "100%"

	}, [])

	return (
		<Box
			component={Carousel}
			dragging={false}
			ref={sliderRef}
			afterSlide={(number) => {
				modal.projectImageOrder = number;
			}}
			sx={{
				height: '100%',
				"& slider-container": {
					height: '100%'
				}
			}}
			renderCenterLeftControls={({previousSlide}) => (
				<Button
					onClick={previousSlide}
					disabled={modal.projectImageOrder == 0}
				>
					<ArrowBackIosIcon/>
				</Button>
			)}
			renderCenterRightControls={({ nextSlide }) => (
				<Button
					onClick={nextSlide}
					disabled={modal.projectImageOrder == items.length - 1}
				>
					<ArrowForwardIosIcon/>
				</Button>
			)}
		>
			{items?.slice().sort((a, b) => a?.order - b?.order).map((image, index) => (

				<Box
					onClick={() => modal.openFullscreenImage(items, image, index)}
					key={index}
				>
					<ProjectImage
						key={index}
						sliderRef={sliderRef}
						image={image}
						height={height}
					/>
				</Box>
			))}

		</Box>
	);
});

export default ProjectCarousel;