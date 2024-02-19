import React, {useCallback, useEffect, useRef} from 'react';
import QuickPinchZoom, {make3dTransformValue} from "react-quick-pinch-zoom";
import {Box} from "@mui/material";
import loginPage from "../../pages/LoginPage/LoginPage";

const ImageZoom = ({src, slide, sliderRef}) => {

	const imgRef = useRef()
	const parentRef = useRef()
	const onUpdate = useCallback(({x, y, scale}) => {
		const {current: img} = imgRef;

		if (img) {
			const value = make3dTransformValue({x, y, scale})

			img.style.setProperty("transform", value)
		}
	}, [])

	useEffect(() => {

		//parentRef.style.setProperty("height", '100%')

		parentRef.current._containerRef.current.style.setProperty("height", '100%')
	}, [])

	const onDragEnd = () => {

		console.log("dragPoint", parentRef.current._draggingPoint)
		console.log("offset", parentRef.current._offset)
		console.log(imgRef.current.clientWidth)
		console.log(parentRef.current)
		console.log(sliderRef)

		const dragPoint = parentRef.current._draggingPoint;
		const offset = parentRef.current._offset;

		const imgWidth = imgRef.current.clientWidth;


		if ((Math.ceil(offset.x) === imgWidth
			&& dragPoint.x > offset.x)
			|| (offset.x === 0 && dragPoint.x > 0)
		) {
			console.log('forward')
			slide(1)

		} else if (Math.ceil(offset.x) === 0 && dragPoint.x < 0) {
			console.log('back')
			slide(0)
		}

	}

	return (
		<Box
			sx={{
				height: '100%'
			}}
		>
			<QuickPinchZoom
				onUpdate={onUpdate}
				ref={parentRef}
				style={{height: '100%'}}
				onDragEnd={onDragEnd}
				maxZoom={2}
			>

				<Box
					ref={imgRef}
					draggable={false}
					component={'img'}
					src={import.meta.env.VITE_BASE_URL + src}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						//item.objectFit,
						//filter: isShiftPressed && items.length !== 1 ? "brightness(50%)" : 'none',
						//color: isShiftPressed ? "red" : 'none',
					}}
				>
				</Box>

			</QuickPinchZoom>
		</Box>

	);
};

export default ImageZoom;