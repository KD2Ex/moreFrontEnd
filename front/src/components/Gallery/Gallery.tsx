import React, {useEffect, useState} from 'react';
import paint from "../../store/paint";
import PaintItem from "../PaintItem/PaintItem";
import {sizes} from "../../consts";
import {Box, Button, Grid, Typography} from "@mui/material";
import art1 from "../../assets/art1.jpg";
import ModalView from "../ModalView/ModalView";
import {observer} from "mobx-react-lite";
import modal from "../../store/modal";
import ActionDialog from "../ActionDialog/ActionDialog";
import loginPage from "../../pages/LoginPage/LoginPage";
import user from "../../store/user";
import Filling from "../Filling/Filling";
import TelegramIcon from '@mui/icons-material/Telegram';
import DeleteShortcut from "../DeleteShortcut/DeleteShortcut";
import AdminComponent from "../AdminComponent/AdminComponent";


const Gallery = observer(() => {

	const [isShiftPressed, setIsShiftPressed] = useState(false);
	const [currentDragItem, setCurrentDragItem] = useState(null);

	const handleDelete = async (id: number) => {

		await paint.deletePainting(id)
	}

	useEffect(() => {

		document.body.addEventListener('keydown', (e) => {
			setIsShiftPressed(e.key === "Shift")
		})

		document.body.addEventListener('keyup', (e) => {
			setIsShiftPressed(false)
		})

	}, [])

	function dragStartHandler(e, item) {
		console.log('drag', item)
		setCurrentDragItem(item);
		console.log(e.target)
	}

	function dragLeaveHandler(e) {
		//e.target.style.border = 'none'
		e.target.style.background = 'none'
	}

	function dragEndHandler(e) {

	}

	function dragOverHandler(e) {
		e.preventDefault()
		e.target.style.background = 'lightgray'
	}

	function dropHandler(e, item) {
		e.preventDefault()
		e.target.style.background = 'none'
		console.log('drop', item)
		console.log(currentDragItem)

		paint.swapPaints(currentDragItem, item);
	}

	let gridSize = 0;

	return (

		<>

			<ActionDialog
			/>

			<Grid
				container
				spacing={2}
			>

				{paint.items.slice().sort(paint.sortPaints).map((item, index, array) => {

					const rowGridSpace = 12 - gridSize % 12;

					let additiveComponent = null;

					if (index != array.length && !user.adminView) {

						if ( rowGridSpace - item.relativeSize < 0) {
							gridSize += rowGridSpace;
							additiveComponent = (
								<Filling
									key={item.title + index}
									md={rowGridSpace}
								/>
							)
						}
					}

					gridSize += +item.relativeSize;

					//console.log(`${item.title} ${rowGridSpace}`)

					return (
						<React.Fragment
							key={index}
						>
							{additiveComponent}
							<Grid
								item
								xs={sizes.full}
								md={item.relativeSize}
								sx={{
									position: 'relative',
								}}
								onDragStart={(e) => dragStartHandler(e, item)}
								onDragLeave={(e) => dragLeaveHandler(e)}
								onDragEnd={(e) => dragEndHandler(e)}
								onDragOver={(e) => dragOverHandler(e)}
								onDrop={(e) => dropHandler(e, item)}
								draggable={user.changeOrderMode}
							>

								<AdminComponent>
									<DeleteShortcut
										visibility={isShiftPressed}
										onClick={() => handleDelete(item.id)}
									/>
								</AdminComponent>

								<PaintItem
									item={item}
									height={500}

								/>
							</Grid>
						</React.Fragment>

					)

				})}

				{gridSize % 12 !== 0 && (
					<Filling
						md={12 - gridSize % 12}
					/>
				)}

				{paint.viewItems.length === 0
					&& !paint.loading
					&& (
						<Typography>
							sadness
						</Typography>
					)

				}
			</Grid>
		</>
	);
});

export default Gallery;