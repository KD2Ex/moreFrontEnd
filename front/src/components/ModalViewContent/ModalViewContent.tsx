import React, {useEffect, useState} from 'react';
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import {Box, Button, Divider, Grid, IconButton, Typography} from "@mui/material";
import {getWappLink} from "../../consts";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						gap: 1
					}}
				>
					<Typography
						fontSize={28}
						sx={{
							//fontStyle: 'italic'
						}}
					>
						Купить картину -
					</Typography>

					<IconButton
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
						size={'large'}
					>
						<WhatsAppIcon fontSize={'inherit'}/>
					</IconButton>


					<IconButton
						onClick={handleClick}
						component={'a'}
						href={tgLink}
						target={"_blank"}
						size={'large'}
						sx={{
							bgcolor: "#3997d5",
							color: '#efefef',
							'&:hover': {
								bgcolor: "#106b81"
							},
							width: 'fit-content'
						}}
					>
						<TelegramIcon fontSize={'inherit'}/>
					</IconButton>
				</Box>


			</Grid>

		</Grid>
	);
};

export default ModalViewContent;