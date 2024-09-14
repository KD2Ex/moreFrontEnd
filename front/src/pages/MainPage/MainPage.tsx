import {Box, Divider, Grid, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import MainTitle from "./MainTItle/MainTitle";
import Services from "./ServiceComponents/Services/Services";
import ImageContainer from "./MainBlock/ImageContainer/ImageContainer";
import StickyImageContainer from "./MainBlock/ImageContainer/StickyImageContainer";
import React, {useEffect} from "react";
import './style.css'
import StickyText from "./MainBlock/StickyText/StickyText";
import Cube3D from "./3DCube/Cube3D";
import logo from '../../assets/logo.jpg'
import DesktopFooter from "./Footer/DesktopFooter/DesktopFooter";
import appInfo from "../../store/appInfo";
import MobileFooter from "./Footer/MobileFooter/MobileFooter";

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
					<Box
						component={'img'}
						src={logo}
						sx={{
							height: '100%'
						}}
					>

					</Box>
					<Typography
						variant={'h6'}
						fontSize={{xs: '1.2rem', md: '4rem'}}
						sx={{
							alignSelf: 'flex-end'
						}}
					>
						Мастерская пространства
					</Typography>
					<Typography
						variant={'h5'}
						fontSize={{xs: '1.75rem', md: '6rem'}}
						sx={{
							alignSelf: 'flex-end'
						}}
					>
						"МО"
					</Typography>

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
							mockHeight={1000}
						>

							Ваш дом - ваш стиль: дизайн и архитектура с профессиональным подходом.<br/>
							Опыт и уникальные решения для каждого проекта.

						</StickyText>

						<StickyText
							mockHeight={1000}
							text={'Мы занимаемся проектированием и архитектурой жилых домов уже 17 лет. За это время мы выработали авторские методики работы и алгоритмы принятия решений\n'}
						/>

						<StickyText
							mockHeight={1000}
							text={'Помимо проектного бюро к Вашим услугам художественная мастерская, где вы можете подобрать картины в Ваши интерьеры. Мы также предлагаем уникальные авторские произведения на заказ.\n'}
						/>


					</Grid>
				</Grid>

				<Box
					sx={{
						px: 1
					}}
				>
					<Services/>
				</Box>



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