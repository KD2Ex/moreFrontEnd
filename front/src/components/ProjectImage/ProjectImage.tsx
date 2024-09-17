import React, {useState} from 'react';
import user from "../../store/user";
import ImageZoom from "../ImageZoom/ImageZoom";
import {Box} from "@mui/material";
import FullscreenImage from "../FullscreenImage/FullscreenImage";
import modal from "../../store/modal";
import appInfo from "../../store/appInfo";

const ProjectImage = ({image, height, swipe, sliderRef}) => {

	const handleClick = () => {
		//modal.openProjectImage(true, image.name)
	}

	return (
		<>
			<Box
				onClick={handleClick}
				sx={{
					width: '100%',
					height: `${height - 20}px`
				}}
				onContextMenu={(event) => {
					if (!user.isAdmin) {
						return;
					}

					event.preventDefault()

				}}
			>
				{/*<ImageZoom
					src={image.name}
					slide={swipe}
					sliderRef={sliderRef}
					fit={'cover'}
				/>*/}
				<Box
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
					}}
					component={'img'}
					src={appInfo.url + image.name}
				>

				</Box>

			</Box>

			{/*<FullscreenImage
				src={image.name}
				open={open}
				setOpen={setOpen}
			/>*/}
		</>

	);
};

export default ProjectImage;