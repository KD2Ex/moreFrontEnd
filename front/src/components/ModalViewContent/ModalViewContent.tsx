import React, {useEffect, useMemo, useState} from 'react';
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ModalInfo from "../ModalInfo/ModalInfo";
import {Box, Button, Divider, Grid, Icon, IconButton, Typography} from "@mui/material";
import {getTgLink, getWappLink} from "../../consts";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocaleText from "../Locale/LocaleText/LocaleText";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import locale from "../../store/locale.ts";

const ModalViewContent = observer(({item}) => {

	const tgLink = getTgLink()
	console.log(item)
	const wAppText = locale.currentLocale.name == "ru"
		? "Здравствуйте, меня заинтересовала картина "
		: "Hello, i am interested in "
	const wAppLink = getWappLink(`${wAppText}"${item.title[locale.currentLocale.name]}"`)

	return (
		<Grid
			container
			spacing={{xs: 0, lg: 4}}
			sx={{
				width: '100%',
				alignItems: 'center'
			}}
		>

			<Grid
				item
				md={8}
				xs={12}
				sx={{
					height:'fit-content'
				}}
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
					p: 1,
					alignSelf: 'flex-start'
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