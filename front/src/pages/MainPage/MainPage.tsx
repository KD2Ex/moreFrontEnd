import {Box, Divider, Grid, Typography} from "@mui/material";
import Services from "./ServiceComponents/Services/Services";
import StickyImageContainer from "./MainBlock/ImageContainer/StickyImageContainer";
import React, {useEffect} from "react";
import './style.css'
import StickyText from "./MainBlock/StickyText/StickyText";
import Cube3D from "./3DCube/Cube3D";
import logo from '../../assets/logo.jpg'
import DesktopFooter from "./Footer/DesktopFooter/DesktopFooter";
import appInfo from "../../store/appInfo";
import MobileFooter from "./Footer/MobileFooter/MobileFooter";
import BackToTop from "../../components/BackToTop/BackToTop";
import RawLocale from "./MainBlock/StickyText/RawLocale/RawLocale";


const ru = {
	title1: 'Ваш дом - ваш стиль: дизайн и архитектура с профессиональным подходом\n',
	title12:  'Опыт и уникальные решения для каждого проекта',
	title2: 'Я, Анастасия Колесникова и моя команда занимаемся архитектурным проектированием и дизайном интерьеров жилых домов и общественных объектов уже более 13 лет.\n\nПри проектировании я использую авторские методики работы и алгоритмы принятия решений.',
	title3: 'Еще одним направлением деятельности является искусство  \n\n' +
		'В моей галереи вы можете найти сотни готовых картин.\n\n' +
		'При необходимости я помогу с подбором декора, картин и постеров в ваши интерьеры, создам  картину специально для Вас.',
}

const en = {
	title1: `Your Home, Your Style: Professional Design and Architecture Solutions\n`,
	title12: `Expertise and Unique Concepts Tailored to Every Project`,
	title2: 'I’m Anastasia Kolesnikova, and for over 13 years, my team and I have been creating architectural designs and interior spaces for private homes and public buildings.\n\n' +
		'We combine professional experience with signature methodologies and a refined decision-making process to deliver truly personalized results',
	title3: 'Art is another essential part of my creative journey.\n\n' +
		'In my gallery, you’ll find hundreds of ready-to-hang artworks.\n\n' +
		'I offer personalized services — from helping you select the perfect decor, paintings, and posters for your space to creating a custom piece crafted specifically for you'
}


const MainPage = () => {

	useEffect(() => {

		//document.documentElement.style.scrollSnapType = 'y mandatory'

		return () => {

			document.documentElement.style.scrollSnapType = 'x'
			document.documentElement.style.color = 'red'
		}
	})

	return (
		<>
			<Box
				sx={{
					maxWidth: '1200px',
					display: 'flex',
					flexDirection: 'column',
					margin: 'auto',
				}}
			>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 1,
						height: {xs: 48, md: 128},
						mt: 2,
						px: {xs: 1, xl: 0},

					}}
				>

					<Box>
						<Typography
							variant={'h6'}
							fontSize={{xs: '1.2rem', md: '3.5rem'}}
							sx={{
								alignSelf: 'flex-end'
							}}
						>
							Мастерская пространства "МО"
						</Typography>
					</Box>

					<Box
						component={'img'}
						src={logo}
						sx={{
							height: '100%'
						}}
					>

					</Box>

				</Box>


				<Divider
					sx={{
						width:'100%',
						mb: 2,
						mt: 1,
					}}
				/>

				<Grid
					container
					spacing={0}
					sx={{
						width: '100%',
						height: '100%',
						display: 'flex',
						margin: 'auto',

					}}
				>

					<Grid
						item
						xs={12}
						sx={{
							position: 'relative',
							top: 0
						}}
					>

						<Box
							sx={{
								position: 'sticky',
								top: 0,
								height: '100vh',
								display: 'flex',
								alignItems: 'center',
								justifyItems: 'center'
							}}
						>
							<StickyImageContainer/>

							<Cube3D/>


						</Box>

						<StickyText
							mockHeight={500}
						>

							<RawLocale
								list={[ru.title1, en.title1]}
							/>
							<br/>
							<RawLocale
								list={[ru.title12, en.title12]}
							/>

						</StickyText>

						<StickyText
							mockHeight={500}
						>
							<RawLocale
								list={[ru.title2, en.title2]}
							/>

						</StickyText>

						<StickyText
							mockHeight={500}
						>
							<RawLocale
								list={[ru.title3, en.title3]}
							/>
						</StickyText>


					</Grid>
				</Grid>

				<Box
					sx={{
						px: 1
					}}
				>
					<Services/>
				</Box>


				{!appInfo.isMobile && (
					<BackToTop/>
				)}
			</Box>
			{
				appInfo.isMobile
					? <MobileFooter/>
					: <DesktopFooter/>
			}
		</>
	);
};

export default MainPage;