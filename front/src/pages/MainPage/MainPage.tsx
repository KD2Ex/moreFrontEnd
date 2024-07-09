import {Outlet} from 'react-router-dom'
import {Box, Divider, Grid, Typography} from "@mui/material";


const MainPage = () => {

	

	return (
		<Box
			sx={{
				maxWidth: '95%',
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto',
				px: {xs: 1, xl: 0}
			}}
		>
			
			<Typography
				variant={'h4'}
			>
				Мастерская пространства "МОРЕ"
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
				spacing={2}
				sx={{
					width: '100%',
					height: '100%'
				}}
			>
				
				<Grid
					item
					lg={4}
					xs={12}
				>

					<Box
						sx={{
							width: '100%',
							height: '600px',
							bgcolor: '#69fcfc'
						}}
					>
					</Box>

				</Grid>

				<Grid
					item
					lg={4}
					xs={12}
				>

					<Box
						sx={{
							width: '100%',
							//height: '300px',
							display: 'flex',
							flexDirection: 'column',
							gap: 1
						}}
					>

						<Typography
							fontSize={16}
						>
							•  Создаем пространства для жизни и бизнеса.<br/>
						</Typography>

						<Typography
							fontSize={16}
						>
							•  Комплексно решаем вопрос планировки пространства от фундамента до картины в готовом интерьере, учитываем технические аспекты связанные с назначением помещения и спецификой бытовых и бизнес-процессов.
						</Typography>

						<Typography
							fontSize={16}
						>
							•  Ведем авторский надзор и сопровождение проектов, что является залогом не только качественного проекта, но и его успешной реализации.
						</Typography>
					</Box>

					<Box
						sx={{
							height: '40px',
							my: 2,
							bgcolor: '#e76565'
						}}
					>
						
					</Box>
					
					<Box
						sx={{
							width: '100%',
							height: '600px',
							display: 'flex',
							flexDirection: 'column',
							gap: 1
						}}
					>

						<Typography
							fontSize={16}
						>
							•  Создаем пространства для жизни и бизнеса.<br/>
						</Typography>

						<Typography
							fontSize={16}
						>
							•  Комплексно решаем вопрос планировки пространства от фундамента до картины в готовом интерьере, учитываем технические аспекты связанные с назначением помещения и спецификой бытовых и бизнес-процессов.
						</Typography>

						<Typography
							fontSize={16}
						>
							•  Ведем авторский надзор и сопровождение проектов, что является залогом не только качественного проекта, но и его успешной реализации.
						</Typography>
					</Box>
					
				</Grid>
				<Grid
					item
					lg={4}
					xs={12}
				>

					<Box
						sx={{
							width: '100%',
							height: '600px',
							bgcolor: '#69fcfc'
						}}
					>
					</Box>

				</Grid>
				<Grid
					item
					lg={8}
					xs={12}
				>

					<Box
						sx={{
							width: '100%',
							height: '600px',
							bgcolor: '#69fcfc'
						}}
					>
					</Box>

				</Grid>

			</Grid>
			
			
			<Outlet/>


		</Box>
	);
};

export default MainPage;