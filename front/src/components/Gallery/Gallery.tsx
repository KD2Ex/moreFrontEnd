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
import loginPage from "../../pages/LoginPage/LoginPage";

interface GalleryProps {
	items: any[],
	type: string
}

const components = {
	gallery: PaintItem,
	portfolio: PortfolioItem,
}


let titles = [
	'Жоская ауф цитата',
	'Волк, это не тот кто волк, walk - это ходить',
	'Тяжело это когда тяжело',
	'Удары в спину наносят только те, кто сзади',
	'Цитата 1',
	'Цитата 2',
	'Цитата 3',
	'Цитата 4',
	'Цитата 5',
	'Цитата 6',
	'Цитата 7',
]

const ids =  [...titles]

function getRandomInt(max: number) {
	/*for (let i = max; i >= 0; i--) {
		console.log(i)

		yield Math.floor(Math.random() * i);
		yield i
	}*/

	return Math.floor(Math.random() * max);
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

					if (!user.adminView && rowGridSpace - item.relativeSize < 0) {
						gridSize += rowGridSpace
						const fillingIndex = getRandomInt(titles.length);

						console.log(titles)

						additiveComponent = (
							<Filling
								key={item.title + index}
								space={rowGridSpace}
								title={titles.splice(fillingIndex, 1)[0]}
							/>
						)

						if (titles.length === 0) titles = [...ids]
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
								// Поведение при нуле может отличаться: при значении 'auto' будет приниматься
								// размер изображения, а при 0 поведение аналогично поведению при 12
								// true расчитывает значение для mds относительно других элементов
								// исходя из
								// (12 - сумма явных md значений элементов) / кол-во элементов с значениями md = true
								md={item.relativeSize === 0 ? true : item.relativeSize}
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
									height={paint.rowHeight}
								/>

							</Grid>
						</React.Fragment>

					)

				})}

				{gridSize % 12 !== 0 && (
					<Filling
						space={12 - gridSize % 12}
						title={ids[1]}
						img={''}
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