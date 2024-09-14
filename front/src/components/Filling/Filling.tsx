import {FC, useEffect, useMemo} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";


interface FillingProps {
	space: number,
	img?: string | null,
	title: string,
}

const Filling: FC<FillingProps> = observer(({space, img, title}) => {

	const res = useMemo(() => {
		return (
			<

			>
				<Box
					loading={'lazy'}
					component={'img'}
					src={img}
					sx={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						filter: 'brightness(30%)'
					}}
				>

				</Box>
				<Box
					sx={{
						textAlign: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						height: '100%',
						width: '100%'
						//bgcolor: '#1dacdc'
					}}
				>
					{space > 4 && (
						<Typography
							variant={'h3'}
							fontSize={space <= 2 ? 24 : 28}
							color={'#cbcbcb'}
							sx={{
								px: 4
							}}
						>
							{title}
						</Typography>
					)}

				</Box>
			</>
		)
	}, [])

	return (
		<Grid
			item
			md={space}
			sx={{
				position: 'relative',
				height: paint.rowHeight + 16,
				width: '100%'
			}}
		>
			{res}

		</Grid>
	);
});

export default Filling;