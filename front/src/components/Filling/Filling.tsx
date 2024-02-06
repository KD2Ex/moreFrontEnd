import React from 'react';
import {Box, Grid, Typography} from "@mui/material";

const Filling = ({md}) => {



	return (
		<Grid
			item
			md={md}
			sx={{
				position: 'relative',
			}}
		>
			<Box
				sx={{
					textAlign: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
					display: 'flex',
					bgcolor: '#1dacdc'

				}}
			>
				<Typography
					variant={'h3'}
					color={'white'}
				>
					Жоская Ауф цитата

					{md}
					{' '}
				</Typography>
			</Box>

		</Grid>
	);
};

export default Filling;