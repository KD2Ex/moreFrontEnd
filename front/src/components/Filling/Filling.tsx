import {FC, useEffect} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";


interface FillingProps {
	space: number,
	img?: string | null,
	title: string,
}

const Filling: FC<FillingProps> = observer(({space, img, title}) => {


	return (
		<Grid
			item
			md={space}
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
					fontSize={space <= 2 ? 40 : 50}
					color={'white'}
				>
					{title}
				</Typography>
			</Box>

		</Grid>
	);
});

export default Filling;