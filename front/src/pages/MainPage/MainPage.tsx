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
	title1: 'Ваш дом - ваш стиль: дизайн и архитектура с профессиональным подходом.',
	title12:  'Опыт и уникальные решения для каждого проекта.',
	title2: 'Мы занимаемся проектированием и архитектурой жилых домов уже 17 лет. За это время мы выработали авторские методики работы и алгоритмы принятия решений',
	title3: 'Помимо проектного бюро к Вашим услугам художественная мастерская, где вы можете подобрать картины в Ваши интерьеры. Мы также предлагаем уникальные авторские произведения на заказ.',
}

const en = {
	title1: `Your Home - Your Style: Design and Architecture with a Professional Touch.`,
	title12: `Experience and Unique Solutions for Every Project.`,
	title2: 'We have been designing and architecting residential buildings for 17 years. During this time we have developed author\'s methods of work and algorithms of decision making.',
	title3: 'In addition to the design bureau, we have an art workshop at your service, where you can choose paintings for your interior. We also offer unique author\'s works to order.'
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