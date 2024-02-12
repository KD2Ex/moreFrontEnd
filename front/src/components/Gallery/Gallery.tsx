import React, {useEffect, useRef, useState} from 'react';
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
import PaintingList from "../PaintingList/PaintingList";

interface GalleryProps {
	items: any[],
	type: string
}

const Gallery = observer(({items, type}: GalleryProps) => {

	const [page, setPage] = useState(0);
	const lastElement = useRef();
	console.log(lastElement)


	useEffect(() => {


	}, [])


	return (

		<>

			<ActionDialog
			/>

			<PaintingList
				items={items}
				type={type}
			/>
		</>
	);
});

export default Gallery;