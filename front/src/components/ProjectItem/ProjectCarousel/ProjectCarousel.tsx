import React, {useEffect, useRef, useState} from 'react';
import Carousel from "nuka-carousel";
import ImageZoom from "../../ImageZoom/ImageZoom";
import {Box} from "@mui/material";
import user from "../../../store/user";
import project from "../../../store/project";

const ProjectCarousel = ({items}) => {

	const [slideIndex, setSlideIndex] = useState(0)
	const [swiping, setSwiping] = useState<number | null>(null)
	const sliderRef = useRef()

	const swipe = (forward: number | null) => {

		setSwiping(forward)

	}

	useEffect(() => {

		console.log(sliderRef.current.style.height)
		sliderRef.current.style.height += "100%"

	}, [])

	return (
		<Box
			component={Carousel}
			dragging={false}
			ref={sliderRef}
			slideIndex={slideIndex}
			onDragEnd={() => swipe(null)}
			sx={{
				height: '100%',
				"& slider-container": {
					height: '100%'
				}
			}}
		>
			{items?.slice().sort((a, b) => a?.order - b?.order).map((image, index) => (
				<Box
					sx={{
						width: '100%',
						height: `${project.rowHeight - 20}px`
					}}
					key={index}
					onContextMenu={(event) => {
						if (!user.isAdmin) {
							return;
						}

						event.preventDefault()

					}}
				>
					<ImageZoom
						src={image.name}
						slide={swipe}
						sliderRef={sliderRef}
					/>
				</Box>
			))}

		</Box>
	);
};

export default ProjectCarousel;