import React, {useEffect, useMemo, useRef, useState} from 'react';
import paint from "../../store/paint";
import PaintItem from "../PaintItem/PaintItem";
import {sizes} from "../../consts";
import {Box, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import ActionDialog from "../ActionDialog/ActionDialog";
import PaintingList from "../PaintingList/PaintingList";
import {GalleryType} from "../../models/types/GalleryType";
import portfolio from "../../store/project";
import switchBaseClasses from "@mui/material/internal/switchBaseClasses";
import {storeAnnotation} from "mobx/dist/api/decorators";

interface GalleryProps {
	items: any[],
	type: GalleryType
}

const Gallery = observer(({items, type}: GalleryProps) => {

	const [page, setPage] = useState(1);

	const lastElement = useRef();
	const observer = useRef();

	const store = useMemo(() => {
		let store;

		switch (type) {
			case "painting":
				store = paint
				break;
			case "project":
				store = portfolio
				break;
		}

		return store;
	}, [type])


	useEffect(() => {

		if (store.loading) return;
		//if (paint.arrayMutating) return;
		//if (lastElement.current == undefined) return;
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

			store.getItems(page, 6)
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
			<PaintingList
				items={items}
				type={type}
				store={store}
			/>


			{
				paint.loading
					? null
					: (<>

						<Box
							ref={lastElement}
							sx={{
								height: 20,
								bgcolor: 'cyan'
							}}
						>
						</Box>
					</>)
			}


		</>
	);
});

export default Gallery;