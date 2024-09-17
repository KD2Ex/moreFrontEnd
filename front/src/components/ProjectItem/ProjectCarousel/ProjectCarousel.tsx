import React, {useEffect, useRef, useState} from 'react';
import Carousel from "nuka-carousel";
import ImageZoom from "../../ImageZoom/ImageZoom";
import {Box} from "@mui/material";
import user from "../../../store/user";
import project from "../../../store/project";
import ProjectImage from "../../ProjectImage/ProjectImage";
import {observer} from "mobx-react-lite";
import modal from "../../../store/modal";

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