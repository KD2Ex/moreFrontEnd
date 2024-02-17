import React, {useCallback, useEffect, useRef, useState} from 'react';
import Carousel from "nuka-carousel";
import {Box, Button, Popover} from "@mui/material";
import paint from "../../store/paint";
import alert from "../../store/alert";
import modal from "../../store/modal";
import AdminComponent from "../AdminComponent/AdminComponent";
import user from "../../store/user";
import {useLinkClickHandler} from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";


const ModalCarousel = ({items, setItems}) => {

	const sliderRef = useRef(null);
	const [slideIndex, setSlideIndex] = useState(0);
	//const [isShiftPressed, setIsShiftPressed] = useState(false);

	const [contextOpen, setContextOpen] = useState(false);
	const [points, setPoints] = useState({
		x: 0,
		y: 0
	})
	const [id, setId] = useState(0);

	const [swiping, setSwiping] = useState<number | null>(null);


	useEffect(() => {
		console.log(items)
	}, [items])

	useEffect(() => {

		//if (modal.editMode) setItems(modal.paintingItem.images)

	}, [modal.editMode])

	const deleteImg = async (imageIndex) => {

		console.log(items)

		const newItems = items.filter((item, index) => index != imageIndex)

		await paint.deleteImage(items[imageIndex].name);

		if (imageIndex === items.length - 1) {
			setSlideIndex(prev => prev - 1);
		}

		setItems([...newItems])
	}

	const handleClick = async (event, index) => {

		//if (!event.shiftKey) return;
		if (items.length === 1) {
			alert.openAlert("Невозможно удалить единственное изображение", "error")
			handleContextClose();
			return;
		}

		await deleteImg(index)

		handleContextClose();
	}

	const handleContextClose = () => {
		setContextOpen(false)
	}

	const swipe = (forward: number) => {

		setSwiping(forward)

	}

	useEffect(() => {


		if (swiping === 1) {

			if (slideIndex === items.length - 1) return;
			setSlideIndex(prevState => prevState + 1)
		}

		if (swiping === 0) {

			if (slideIndex === 0) return
			setSlideIndex(prevState => prevState - 1)
		}

	}, [swiping])

	return (
		<>
			<AdminComponent>
				<Popover
					open={contextOpen}
					onClose={handleContextClose}
					anchorReference={"anchorPosition"}
					anchorPosition={{
						top: points.y,
						left: points.x,
					}}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
				>
					<Button
						onClick={(event) => handleClick(event, id)}
					>
						Удалить изображение
					</Button>
					<Button
						onClick={() => setSlideIndex(prev => prev + 1)}
					>
						Scroll
					</Button>
				</Popover>
			</AdminComponent>


			<Carousel
				dragging={false}
				ref={sliderRef}
				slideIndex={slideIndex}
				onDragEnd={() => swipe(true)}
			>
				{items?.slice().sort((a, b) => a?.order > b?.order).map((image, index) => (
					<Box
						sx={{
							height: '450px',
							//width: '1000px'
						}}
						key={index}
						//onClick={(event) => handleClick(event, index)}
						onContextMenu={(event) => {

							if (!user.isAdmin) {
								return;
							}

							event.preventDefault();
							setContextOpen(true);
							setId(index);
							setPoints({x: event.clientX, y: event.clientY})
						}}
					>

						<ImageZoom
							src={image.name}
							slide={swipe}
							sliderRef={sliderRef}
						/>


						{/*<Box
							draggable={false}
							component={'img'}
							src={import.meta.env.VITE_BASE_URL + image.name}
							sx={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',//item.objectFit,
								//filter: isShiftPressed && items.length !== 1 ? "brightness(50%)" : 'none',
								//color: isShiftPressed ? "red" : 'none',
							}}
						>
						</Box>*/}
					</Box>

				))}
			</Carousel>
		</>

	);
};

export default ModalCarousel;