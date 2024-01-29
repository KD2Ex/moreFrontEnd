import React, {FC, useEffect, useState} from 'react';
import {
	Button,
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	FormGroup
} from "@mui/material";
import {observer} from "mobx-react-lite";
import modal from "../../store/modal";
import paint from "../../store/paint";

interface ActionDialogProps {
	open: boolean,
	setOpen: React.Dispatch<boolean>,
	onClick: (id) => void,
}

const ActionDialog = observer(({open, setOpen, id} : ActionDialogProps) => {

	const [isChecked, setIsChecked] = useState(false);

	const handleConfirm = async () => {

		await paint.deletePainting(id);
		handleClose();
	}

	const handleReject = async () => {
		handleClose();
	}

	const handleCheck = (event) => {
		setIsChecked(event.target.checked)
	}

	const handleClose = () => {
		setOpen(false);
		modal.setActionDialogVisibility(!isChecked);
	}

	useEffect(() => {
		console.log('actionDialog efefect')
		//console.log(open)
	}, [])

/*
	if (!modal.isActionDialogVisible) {

		//handleConfirm();
		return null;
	}
*/

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'lg'}
		>

			<DialogTitle>
				Подтверждение
			</DialogTitle>


			<DialogContent>
				Вы уверены?

				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
							/>
						}
						checked={isChecked}
						onChange={handleCheck}
						label={"Больше не показывать"}
					/>
				</FormGroup>

			</DialogContent>

			<DialogActions>

				<Button
					onClick={handleConfirm}

				>
					Да
				</Button>

				<Button
					onClick={handleReject}
				>
					Нет
				</Button>

			</DialogActions>

		</Dialog>
	);
});

export default ActionDialog;