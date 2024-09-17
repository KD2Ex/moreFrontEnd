import React, {useState} from 'react';
import Carousel from "nuka-carousel";
import {Box, Button, Popover} from "@mui/material";
import alert from "../../store/alert";
import AdminComponent from "../AdminComponent/AdminComponent";
import user from "../../store/user";
import {observer} from "mobx-react-lite";
import appInfo from "../../store/appInfo";
import FullscreenImage from "../FullscreenImage/FullscreenImage";


const ModalCarousel = observer(({items, deleteImage}) => {

	const [slideIndex, setSlideIndex] = useState(0);
	const [contextOpen, setContextOpen] = useState(false);
	const [points, setPoints] = useState({
		x: 0,
		y: 0
	})
	const [id, setId] = useState(0);
	const [fullscreenOpen, setFullscreenOpen] = useState(false)


	const deleteImg = async (imageIndex) => {

		console.log(items)

		const newItems = items.filter((item, index) => index != imageIndex)

		await deleteImage(items[imageIndex].name);

		if (imageIndex === items.length - 1) {
			setSlideIndex(prev => prev - 1);
		}

		items = [...newItems]
	}

	const handleClick = async (event, index) => {

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
				</Popover>
			</AdminComponent>

			<FullscreenImage
				images={items?.slice().sort((a, b) => a?.order > b?.order)}
				setOpen={setFullscreenOpen}
				open={fullscreenOpen}
				defaultOrder={id}
			/>

			<Carousel
				afterSlide={(number) => {
					setId(number)
				}}
				dragging={false}
				slideIndex={slideIndex}
				style={{height: '100%'}}
			>
				{items?.slice().sort((a, b) => a?.order > b?.order).map((image, index) => (

					<Box
						key={index}
						component={'img'}
						src={appInfo.url + image.name}
						sx={{
							height: 450,
							width: '100%',
							objectFit: 'contain'
						}}
						onClick={() => {
							setFullscreenOpen(true)
						}}

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

					</Box>
				))}
			</Carousel>
		</>

	);
});

export default ModalCarousel;