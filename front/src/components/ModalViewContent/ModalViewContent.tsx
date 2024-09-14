import React, {useEffect, useState} from 'react';
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import {Box, Button, Divider, Grid, Icon, IconButton, Typography} from "@mui/material";
import {getWappLink} from "../../consts";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocaleText from "../Locale/LocaleText/LocaleText";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";

const ModalViewContent = observer(({item}) => {

	const profileURI = encodeURI('https://t.me/Katerina_Serebryanskaya')
	const message = encodeURI('Hello')
	const tgLink = `https://t.me/Katerina_Serebryanskaya`

	const wAppLink = getWappLink(`Здравствуйте, меня заинтересовала картина ${item.title}`)

	return (
		<Grid
			container
			spacing={{xs: 0, lg: 4}}
			sx={{
				width: '100%'
			}}
		>

			<Grid
				item
				md={8}
				xs={12}
			>
				<ModalCarousel
					items={item.images}
					deleteImage={paint.deleteImage}
				/>

			</Grid>

			<Grid
				item
				md={4}
				xs={12}
				sx={{
					p: 1
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
					<IconButton
						component={'a'}
						href={wAppLink}
						target={"_blank"}
						size={'medium'}
						sx={{
							color: (theme) => theme.palette.text.primary
						}}
					>
						<WhatsAppIcon fontSize={'inherit'}/>
					</IconButton>


					<IconButton
						component={'a'}
						href={tgLink}
						target={"_blank"}
						size={'medium'}

						sx={{
							color: (theme) => theme.palette.text.primary
						}}
					>
						<TelegramIcon fontSize={'inherit'}/>
					</IconButton>
				</Box>


			</Grid>

		</Grid>
	);
});

export default ModalViewContent;