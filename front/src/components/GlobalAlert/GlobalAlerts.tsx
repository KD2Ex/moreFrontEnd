import React, {useEffect, useState} from 'react';
import {Alert, Snackbar} from "@mui/material";
import {observer} from "mobx-react-lite";
import alert from "../../store/alert";

const GlobalAlerts = observer(() => {

	const [open, setIsOpen] = useState(false);

	useEffect(() => {

		if (alert.message && alert.isOpen) {
			setIsOpen(true);
		}

	}, [alert.isOpen])

	const handleClose = () => {

		setIsOpen(false);
		alert.onClose();
	}

	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			//autoHideDuration
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
		>

			<Alert
				onClose={handleClose}
				severity={alert.severity}
			>
				{alert.message}
			</Alert>

		</Snackbar>
	);
});

export default GlobalAlerts;