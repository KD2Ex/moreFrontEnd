import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";

const SettingProjectHeight = ({item}) => {
	const [value, setValue] = useState(item.height)

	const handleChange = (e) => {
		setValue(e.target.value)
		item.height = +e.target.value
	}

	return (
		<Box>
			<TextField
				size={'small'}
				label={'Высота'}
				value={value}
				onChange={handleChange}
			/>
		</Box>
	);
};

export default SettingProjectHeight;