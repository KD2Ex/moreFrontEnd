import React, {useEffect, useRef, useState} from 'react';
import paint from "../../store/paint";
import PaintItem from "../PaintItem/PaintItem";
import {sizes} from "../../consts";
import {Box, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import ActionDialog from "../ActionDialog/ActionDialog";
import user from "../../store/user";
import Filling from "../Filling/Filling";
import DeleteShortcut from "../DeleteShortcut/DeleteShortcut";
import AdminComponent from "../AdminComponent/AdminComponent";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import loginPage from "../../pages/LoginPage/LoginPage";
import PaintingList from "../PaintingList/PaintingList";

interface GalleryProps {
	items: any[],
	type: string
}

const Gallery = observer(({items, type}: GalleryProps) => {

	//const [page, setPage] = useState(1);

	const lastElement = useRef();
	const observer = useRef();

	useEffect(() => {

		if (paint.loading) return;
		//if (paint.arrayMutating) return;
		//if (lastElement.current == undefined) return;
		if (observer.current) observer.current.disconnect();

		const callback = (entries) => {
			if (entries[0].isIntersecting && paint.currentPage < paint.totalPages) {
				paint.setCurrentPage(paint.currentPage + 1)
			}
		}

		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current);

	}, [paint.loading])

	useEffect(() => {

		(async () => {

			console.log("Page:", paint.currentPage)
			if (paint.loading) return;

			await paint.getItems(paint.currentPage, 6);
		})()

	}, [paint.currentPage])

	useEffect(() => {

		(async () => {

			if (paint.loading) return;

			paint.setItems([]);
			paint.setCurrentPage(1);
			await paint.getItems(1, 6);

			console.log('Sort effect', paint.currentPage)

		})()

	}, [paint.sortId])

	return (

		<>

			<ActionDialog
			/>
			<PaintingList
				items={items}
				type={type}
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