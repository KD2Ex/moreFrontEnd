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
				/>

			</Grid>

			<Grid
				item
				md={4}
				xs={12}
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
					<LocaleText
						fontSize={18}
						sx={{
							fontWeight: 'bold'
						}}
						localeList={[
							{locale: 'ru', value: `Купить картину -`},
							{locale: 'en-US', value: `Buy this painting -`},
						]}
					/>

					<IconButton
						component={'a'}
						href={wAppLink}
						target={"_blank"}
						sx={{
							bgcolor: "#21a124",
							color: '#efefef',
							'&:hover': {
								bgcolor: "#1a6729"
							},
						}}
						size={'medium'}
					>
						<WhatsAppIcon fontSize={'inherit'}/>
					</IconButton>


					<IconButton
						component={'a'}
						href={tgLink}
						target={"_blank"}
						size={'medium'}
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
});

export default ModalViewContent;