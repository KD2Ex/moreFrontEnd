import {useEffect, useRef, useState} from 'react';
import paint from "../../store/paint";
import {Box, Skeleton } from "@mui/material";
import {observer} from "mobx-react-lite";
import ActionDialog from "../ActionDialog/ActionDialog";
import ItemsList from "../PaintingList/ItemsList";
import {GalleryType} from "../../models/types/GalleryType";
import PaintItem from "../PaintItem/PaintItem.tsx";
import locale from "../../store/locale";
import LoadingAnim from "../LoadingAnim/LoadingAnim";


interface GalleryProps {
	items: any[],
	type: GalleryType,
	store: any,
}

const Gallery = observer(({items, type, store}: GalleryProps) => {

	const [page, setPage] = useState(1);

	const lastElement = useRef();
	const observer = useRef();

	useEffect(() => {

		if (store.loading) return;
		//if (paint.arrayMutating) return;
		//if (lastElement.current == undefined) return;

		// Заменить на react-intersection-observer

		if (observer.current) observer.current.disconnect();

		const callback = (entries) => {
			if (entries[0].isIntersecting && page < store.totalPages) {
				setPage(prevState => prevState + 1)
				//paint.setCurrentPage(paint.currentPage + 1)
			}
		}

		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current);

	}, [store.loading])

	useEffect(() => {

		(async () => {

			console.log("Page:", page)
			if (store.loading) return;

			await store.getItems(page, 6)
		})()

	}, [page])

	useEffect(() => {

		(async () => {

			if (store.loading) return;

			store.setItems([]);
			setPage(1);
			await store.getItems(1, 6);

			console.log('Sort effect', page)

		})()

	}, [paint.sortId])

	useEffect(() => {

		return () => {
			store.setItems([])
		}

	}, [])

	return (

		<>

			<ActionDialog
			/>
			<ItemsList
				items={items}
				type={type}
			/>
			
			{
				store.loading
					? (<LoadingAnim/>)
					: (<>
						<Box
							ref={lastElement}
							sx={{
								mt: 8,
								height: 20,
							}}
						>
						</Box>
					</>)
			}


		</>
	);
});

export default Gallery;