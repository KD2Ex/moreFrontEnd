import React, {useEffect, useState} from 'react';
import paint from "../../store/paint";
import PaintItem from "../PaintItem/PaintItem";
import {sizes} from "../../consts";
import {Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import ActionDialog from "../ActionDialog/ActionDialog";
import user from "../../store/user";
import Filling from "../Filling/Filling";
import DeleteShortcut from "../DeleteShortcut/DeleteShortcut";
import AdminComponent from "../AdminComponent/AdminComponent";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

interface GalleryProps {
	items: any[],
	type: string
}

const components = {
	gallery: PaintItem,
	portfolio: PortfolioItem,
}

const Gallery = observer(({items, type}: GalleryProps) => {

	const [isShiftPressed, setIsShiftPressed] = useState(false);
	const [currentDragItem, setCurrentDragItem] = useState(null);

	const Component = components[type];

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

				{items.map((item, index, array) => {

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

								<Component
									item={item}
									height={500}
								/>
								{/*<Grid
									item
									md={item.relativeSize}
								>
									{item.id}
								</Grid>*/}
							</Grid>
						</React.Fragment>

					)

				})}

				{gridSize % 12 !== 0 && (
					<Filling
						md={12 - gridSize % 12}
					/>
				)}

				{items.length === 0
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