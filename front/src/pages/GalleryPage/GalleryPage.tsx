import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Popover, TextField, Typography} from "@mui/material";
import PaintItem from "../../components/PaintItem/PaintItem";
import {imgHeight, sizes} from "../../consts";
import art1 from '../../assets/art1.jpg'
import {useImageSize} from "react-image-size";
import ModalView from "../../components/ModalView/ModalView";
import {IPaint} from "../../models/interfaces/IPaint";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import loginPage from "../LoginPage/LoginPage";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import PaintingService from "../../../api/services/PaintingService";

const GalleryPage = observer(() => {
	const [dimensions, {loading, error}] = useImageSize(art1)

	useEffect(() => {

		paint.items.map((item, index) => {

			//if (index > 2) return;
			console.log(typeof (item.images))

			if (dimensions && item.relativeSize == 0) {
				item.relativeSize = ((dimensions.width * imgHeight / dimensions.height) * 12) / 1400

			}
		})




	}, [])


	const handleClick = async () => {

		const response = await PaintingService.fetchPaintings();

		console.log(response);

		paint.items = response

	}



	return (
		<Box
			sx={{
				width: '100%'
			}}
		>
			<Button
				onClick={handleClick}
			>
				asdf
			</Button>

			<Gallery
			/>



		</Box>
	);
});

export default GalleryPage;