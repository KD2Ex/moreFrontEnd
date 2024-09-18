import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent} from "@mui/material";
import ModalAddProjectContent from "../ModalAddProjectContent/ModalAddProjectContent";
import project from "../../store/project";
import alert from "../../store/alert";
import {observer} from "mobx-react-lite";

const ModalEditProject = observer(() => {

	const [open, setOpen] = useState(false);

	useEffect(() => {

		console.log(project.editItem)
		setOpen(project.editModalOpen)

	}, [project.editModalOpen])

	const handleClose = (e, reason) => {

		if (reason === 'backdropClick') return;

		setOpen(false)
		project.setOpen(false);
	}

	const handleClick = async () => {

		const isValid = project.validate(project.editItem);

		if (!isValid) {
			alert.openAlert('Заполните все поля', 'error')
			return;
		}

		await project.update(project.editItem)

		handleClose();
	}

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			maxWidth={'xl'}
		>

			<DialogContent>

				<ModalAddProjectContent
					item={project.editItem}
				/>

			</DialogContent>

			<DialogActions>
				<Button
					onClick={handleClick}
				>
					Сохранить
				</Button>
				<Button
					onClick={handleClose}
				>
					Отмена
				</Button>
			</DialogActions>

		</Dialog>
	);
});

export default ModalEditProject;