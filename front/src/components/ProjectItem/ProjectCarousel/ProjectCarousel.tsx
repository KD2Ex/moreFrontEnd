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
					onClick={() => modal.openFullscreenImage(items, image)}
					key={index}
				>
					<ProjectImage
						key={index}
						sliderRef={sliderRef}
						swipe={swipe}
						image={image}
						height={height}
					/>
				</Box>

				/*<Box
					sx={{
						width: '100%',
						height: `${height - 20}px`
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
						fit={'cover'}
					/>

				</Box>*/


			))}

		</Box>
	);
});

export default ProjectCarousel;