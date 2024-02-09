import React, {FC} from 'react';
import {Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


interface DeleteShortcutProps {
	visibility: boolean,
	onClick: () => void,
}

const DeleteShortcut: FC<DeleteShortcutProps> = ({visibility, onClick}) => {


	return (
		<Button
			variant={'contained'}
			sx={{
				visibility: visibility ? 'visible' : 'hidden',
				opacity: visibility ? '1' : '0',
				position: 'absolute',
				right: '0',
				bgcolor: 'primary.red',
				zIndex: 2300,
				width: 'fit-content',
				transition: 'visibility 200ms opacity 0.5s linear',
				'&:hover': {
					bgcolor: 'primary.hoverRed'
				}
			}}
			onClick={onClick}
		>
			<CloseIcon/>
		</Button>
	);
};

export default DeleteShortcut;