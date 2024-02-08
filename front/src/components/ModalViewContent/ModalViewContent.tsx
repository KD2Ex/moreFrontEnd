import React, {useEffect, useState} from 'react';
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import {Box, Button, Divider, Grid} from "@mui/material";
import {getWappLink} from "../../consts";

const ModalViewContent = ({item}) => {

	const [images, setImages] = useState([])


	const profileURI = encodeURI('https://t.me/Katerina_Serebryanskaya')
	const message = encodeURI('Hello')
	const tgLink = `https://t.me/Katerina_Serebryanskaya`

	const wAppLink = getWappLink(`Здравствуйте, меня заинтересовала картина ${item.title}`)

	useEffect(() => {

		setImages(item.images)

	}, [])

	const handleClick = () => {

	}

	return (
		<Grid
			container
			spacing={4}
			sx={{
				width: '100%'
			}}
		>

			<Grid
				item
				md={8}
			>
				<ModalCarousel
					items={images}
					setItems={setImages}
				/>

			</Grid>

			<Grid
				item
				md={4}
				sx={{
				}}
			>


				<ModalInfo
					item={item}
				/>

				<Divider
					sx={{
						my: 2
					}}
				/>
				<Box
					sx={{
						display: 'flex',
						gap: 1,
					}}
				>
					<Button
						onClick={handleClick}
						component={'a'}
						href={wAppLink}
						target={"_blank"}
						sx={{
							bgcolor: "#21a124",
							color: '#efefef',
							'&:hover': {
								bgcolor: "#1a6729"
							}
						}}
					>
						WhatsApp
					</Button>


					<Button
						onClick={handleClick}
						component={'a'}
						href={tgLink}
						target={"_blank"}
						sx={{
							bgcolor: "#199eb9",
							color: '#efefef',
							'&:hover': {
								bgcolor: "#106b81"
							}
						}}
					>
						Telegram
					</Button>
				</Box>


			</Grid>

		</Grid>
	);
};

export default ModalViewContent;