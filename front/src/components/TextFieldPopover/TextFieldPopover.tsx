import React, {useState} from 'react';
import {Button, Popover, TextField} from "@mui/material";

const TextFieldPopover = ({open, anchor, setAnchor, onClick}) => {

	const [value, setValue] = useState('')

	const handleClick = async () => {

		await onClick(value);

	}

	return (
		<Popover
			open={open}
			anchorEl={anchor}
			onClose={() => setAnchor(null)}
		>
			<TextField
				size={'small'}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button
				onClick={handleClick}
			>
				Ok
			</Button>
		</Popover>
	);
};

export default TextFieldPopover;