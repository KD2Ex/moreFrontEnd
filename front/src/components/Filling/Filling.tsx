import React, {FC} from 'react';
import {Box, Grid, Typography} from "@mui/material";

interface FillingProps {
	md: number,
	title: string,
	img: string
}

const Filling: FC<FillingProps> = ({md, title, img}) => {

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
					{title}
				</Typography>
			</Box>

		</Grid>
	);
};

export default Filling;