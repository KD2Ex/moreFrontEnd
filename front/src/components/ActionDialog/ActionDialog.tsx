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



const ActionDialog = observer(() => {

	const [isChecked, setIsChecked] = useState(false);

	const handleConfirm = async () => {

		//await paint.deletePainting(id);

		paint.loading = true;
		await modal.actionDialogFunc(...modal.actionDialogArgs);
		handleClose();
		paint.loading = false;

	}

	const handleReject = async () => {
		handleClose();
	}

	const handleCheck = (event) => {
		setIsChecked(event.target.checked)
	}

	const handleClose = () => {
		//setOpen(false);

		modal.setActionDialogOpen(false);
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
			open={modal.actionDialogOpen}
			onClose={handleClose}
			maxWidth={'lg'}
		>

			<DialogTitle>
				Подтверждение
			</DialogTitle>


			<DialogContent>
				Удалить картину? 

				{/*<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
							/>
						}
						checked={isChecked}
						onChange={handleCheck}
						label={"Больше не показывать"}
					/>
				</FormGroup>*/}

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