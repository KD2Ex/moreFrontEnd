import {Box, Divider, Grid, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import MainTitle from "./MainTItle/MainTitle";
import Services from "./Services/Services";
import ImageContainer from "./MainBlock/ImageContainer/ImageContainer";
import StickyImageContainer from "./MainBlock/ImageContainer/StickyImageContainer";
import React, {useEffect} from "react";
import '../../style.css'

const MainPage = () => {

	useEffect(() => {

		document.documentElement.style.scrollSnapType = 'y mandatory'

		return () => {

			document.documentElement.style.scrollSnapType = 'x'
			document.documentElement.style.color = 'red'
		}
	})

	return (
		<Box
			sx={{
				maxWidth: '1200px',
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto',
				px: {xs: 1, xl: 0},
			}}
		>
			
			<Typography
				variant={'h4'}
				sx={{

				}}
			>
				Мастерская пространства "МО"
			</Typography>
			
			<Divider
				sx={{
					width:'100%',
					mb: 2,
					mt: 1
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

					</Box>

					<Box
						sx={{
							position: 'relative',
							top: 0,

						}}
					>

					</Box>
					<Box
						sx={{
							position: 'sticky',
							width: '100%',
							//scrollSnapType: 'y mandatory',

							'& .MuiBox-root': {
								height: '100vh',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								scrollSnapAlign: 'start',
								p: {xs: 4, md: 32},
								scrollSnapStop: 'always'
							}
						}}
					>

						<Box
							sx={{

							}}
						>
							<Typography
								fontSize={{xs: 24, md: 32}}
								textAlign={'center'}

							>
								Мы занимаемся проектированием, дизайном интерьеров, архитектурой индивидуальных жилых домов, уже 17 лет. За это время мы выработали авторские методики работы и алгоритмы принятия решений, что не мало важно как в проектировании так и на этапе реализации проектов, тем более когда работа ведется в режиме сжатых сроков.
							</Typography>
						</Box>


						<Box
							sx={{

							}}
						>
							<Typography
								fontSize={{xs: 24, md: 32}}
								textAlign={'center'}

							>
								Помимо проектного бюро, к Вашим услугам художественная мастерская, где вы можете подобрать картины в ваши интерьеры, оформить офис, кафе ресторан или гостиничные номера, уникальными авторскими произведениями. Мы не делаем копии мы создаем искусство.
							</Typography>
						</Box>

					</Box>

				</Grid>
			</Grid>

			<Services/>

		</Box>
	);
};

export default MainPage;