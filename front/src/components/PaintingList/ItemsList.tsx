import React, {FC, useEffect, useState} from 'react';
import user from "../../store/user";
import Filling from "../Filling/Filling";
import {sizes} from "../../consts";
import AdminComponent from "../AdminComponent/AdminComponent";
import paint from "../../store/paint";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {observer} from "mobx-react-lite";
import {IPaint} from "../../models/interfaces/IPaint";
import PaintItem from "../PaintItem/PaintItem";
import ProjectItem from "../ProjectItem/ProjectItem";
import project from "../../store/project";
import one from '../../assets/filling/1.jpg'
import two from '../../assets/filling/2.jpg'
import three from '../../assets/filling/3.jpg'
import four from '../../assets/filling/4.jpg'
import six from '../../assets/filling/6.jpg'
import nine from '../../assets/filling/9.jpg'
import ten from '../../assets/filling/10.jpg'

let titles = [
	'Принципы истинного искусства – не изображать, а вызывать.',
	'Цель искусства - представлять не внешний вид вещей, а их внутреннее значение.',
	'Искусство заключается в том, чтобы найти необыкновенное в обыкновенном и обыкновенное в необыкновенном',
	'Искусство смывает пыль повседневности с души',
	'В сущности, Искусство – зеркало, отражающее того, кто в него смотрится, а вовсе не жизнь',
	'Искусство — это то, что освобождает душу, провоцирует воображение и побуждает людей идти дальше',
	'Между сумасшествием и искусством такая тонкая грань',
	'Перед картиной каждый должен стоять так же, как перед королем, выжидая, скажет ли она она ему что-нибудь и что именно скажет, и как с королем, так и с картиной он не смеет заговаривать первым, иначе он услышит только самого себя',
	'Мы все расточаем свои дни в поисках смысла жизни. Знайте же, этот смысл — в Искусстве',
]

let enTitles = [
	"Art washes away from the soul the dust of everyday life",
]

const ids =  [...titles]




const imgs = [
	one,
	two,
	three,
	four,
	six,
	nine,
	ten
]

function getRandomInt(max: number) {
	/*for (let i = max; i >= 0; i--) {
		console.log(i)

		yield Math.floor(Math.random() * i);
		yield i
	}*/
	return Math.floor(Math.random() * max);
}


const item = {
	painting: {
		component: PaintItem,
		store: paint
	},
	project: {
		component: ProjectItem,
		store: project
	}
}

interface ItemsListProps {
	items: IPaint[],
	type: string,
	store: any,
	component?: any
}

const ItemsList: FC<ItemsListProps> = observer(({items, type}) => {

	const [isShiftPressed, setIsShiftPressed] = useState(false);
	const [currentDragItem, setCurrentDragItem] = useState(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const Component = item[type].component;
	const store = item[type].store;

	let gridSize = 0;

	useEffect(() => {

		if (!user.isAdmin) return
		console.log(user.isAdmin)
		document.body.addEventListener('keydown', (e) => {
			setIsShiftPressed(e.key === "Shift")
		})

		document.body.addEventListener('keyup', (e) => {
			setIsShiftPressed(false)
		})

	}, [])


	const handleDelete = async (id: number) => {
		await store.delete(id)
	}

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

		store.swapItems(currentDragItem, item);
	}

	return (
		<Grid
			container
			spacing={2}
		>
			{items?.map((item, index) => {

				let additiveComponent = null;

				if (!isMobile) {
					const rowGridSpace = 12 - gridSize % 12;

					if (!user.adminView && rowGridSpace - item.relativeSize < 0) {
						gridSize += rowGridSpace
						const fillingIndex = getRandomInt(titles.length);
						const imgIndex = getRandomInt(imgs.length);

						additiveComponent = (
							<Filling
								key={item.title + index}
								space={rowGridSpace}
								img={imgs[imgIndex]}
								title={titles.splice(fillingIndex, 1)[0]}
							/>
						)

						if (titles.length === 0) titles = [...ids]
					}

					gridSize += +item.relativeSize;
				}

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
								{/*<DeleteShortcut
									visibility={isShiftPressed}
									onClick={() => handleDelete(item.id)}
								/>*/}
							</AdminComponent>

							<Component
								item={item}
							/>

						</Grid>
					</React.Fragment>

				)

			})}

			{/*{gridSize % 12 !== 0 && (
				<Filling
					space={12 - gridSize % 12}
					title={ids[1]}
					img={''}
				/>
			)}*/}

			{items?.length === 0
				&& !store.loading
				&& (
					<Typography>
						sadness
					</Typography>
				)
			}
		</Grid>
	);
});

export default ItemsList;