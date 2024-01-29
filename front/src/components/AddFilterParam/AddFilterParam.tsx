import React, {useState} from 'react';
import {Box, Button, Popover, TextField} from "@mui/material";

const AddFilterParam = ({asyncFunc}) => {

	const [open, setOpen] = useState(false)
	const [anchor, setAnchor] = useState(false)
	const [value, setValue] = useState('')

	const handleOpen = (event) => {
		setOpen(true);
		setAnchor(event.currentTarget);
	}

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const onClose = () => {
		setOpen(false);
	}

	const handleAdd = async () => {

		if (!value) return;

		const close = await asyncFunc(value);

		if (!close) return;

		onClose()
		setValue('');
	}

	return (
		<>

			<Popover
				open={open}
				onClose={onClose}
				anchorEl={anchor}
			>
				<Box>
					<TextField
						size={'small'}

						value={value}
						onChange={handleChange}
					/>
					<Button
						onClick={handleAdd}
					>
						OK
					</Button>
				</Box>
			</Popover>
			<Button
				onClick={handleOpen}
			>
				Создать новый
			</Button>
		</>

	);
};

export default AddFilterParam;