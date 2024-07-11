import React, {useState} from 'react';
import {Box, Button, Popover, TextField, Typography} from "@mui/material";
import MaterialService from "../../../api/services/MaterialService";
import material from "../../store/material";
import crud from "../../store/crud";

const AddFilterParam = ({asyncFunc, items}) => {

	const [open, setOpen] = useState(false)
	const [anchor, setAnchor] = useState(false)
	const [value, setValue] = useState('')
	const [enValue, setEnValue] = useState('')

	const handleOpen = (event) => {
		setOpen(true);
		setAnchor(event.currentTarget);
	}

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	const handleEnChange = (event) => {
		setEnValue(event.target.value);
	}

	const onClose = () => {
		setOpen(false);
	}

	const handleAdd = async () => {

		if (!value && !enValue) return;

		const close = await crud.addItem([
			{text: value, localeId: 1},
			{text: enValue, localeId: 2},
		], asyncFunc, items)

		if (!close) return;

		onClose()
		setValue('');
		setEnValue('');

		//alerts
	}

	return (
		<>

			<Popover
				open={open}
				onClose={onClose}
				anchorEl={anchor}
				sx={{

				}}
			>
				<Box
					sx={{
						p: 1,
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
						border: '2px solid',
						borderColor: (theme) => theme.palette.primary.text,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1,
						}}
					>
						<Typography
							sx={{
								ml: 1
							}}
						>
							RU
						</Typography>
						<TextField
							size={'small'}
							value={value}
							onChange={handleChange}
						/>

					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1,
						}}
					>
						<Typography
							sx={{
								ml: 1
							}}
						>
							EN
						</Typography>
						<TextField
							size={'small'}
							value={enValue}
							onChange={handleEnChange}
						/>
					</Box>

					<Button
						onClick={handleAdd}
						variant={'contained'}
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