import React from 'react';
import {Box} from "@mui/material";
import modal from "../../store/modal";

const FullscreenImage = ({src, open, setOpen}) => {

	if (!open) return null;

	return (
		<>
			<Box
				onClick={() => modal.openProjectImage(false)}
				sx={{
					width: '100vw',
					height: '100vh',
					position: 'fixed',
					top: 0,
					left: 0,
					opacity: .5,
					bgcolor: 'black'
				}}
			>

			</Box>
			<Box
				draggable={false}
				component={'img'}
				src={import.meta.env.VITE_BASE_URL + src}
				sx={{
					width: 'fit-content',
					maxWidth: '80%',
					height: '80%',
					objectFit: 'contain',
					position: 'fixed',
					zIndex: 2200,
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					margin: 'auto',
					//item.objectFit,
					//filter: isShiftPressed && items.length !== 1 ? "brightness(50%)" : 'none',
					//color: isShiftPressed ? "red" : 'none',
				}}
			>
			</Box>
		</>


	);
};

export default FullscreenImage;