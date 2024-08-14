import {Box, Divider, Grid, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import MainTitle from "./MainTItle/MainTitle";
import Services from "./Services/Services";

const MainPage = () => {



	return (
		<Box
			sx={{
				maxWidth: '1200px',
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
					height: '100%',
					display: 'flex',
					margin: 'auto',

				}}
			>
				<MainTitle/>
			</Grid>

			<Services/>

		</Box>
	);
};

export default MainPage;