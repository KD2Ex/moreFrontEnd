import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import project from "../../store/project";
import ModalAddProjectContent from "../ModalAddProjectContent/ModalAddProjectContent";
import {IProject} from "../../models/interfaces/IProject";
import alert from "../../store/alert";

const ModalAddProject = ({open, setOpen}) => {

	const handleClose = () => {
		setOpen(false)
	}

	const handleClick = async () => {
		//await project


		const isValid = project.validate(project.newItem)

		if (!isValid) {

			alert.openAlert("Заполните название, описание, и загрузите изображение"
				, "error")
			return;
		}

		const response = await project.create(project.newItem)

		handleClose()
		alert.openAlert("Проект успешно добавлен", "success")
	}

	return (
		<Dialog
			 open={open}
			 maxWidth={'xl'}
		>
			<DialogTitle>
				Создание
			</DialogTitle>

			<DialogContent>

				<ModalAddProjectContent
					item={project.newItem}
				/>

			</DialogContent>

			<DialogActions>

				<Button
					onClick={handleClick}
				>
					Добавить
				</Button>
				<Button
					onClick={handleClose}
				>
					Отмена
				</Button>

			</DialogActions>
		</Dialog>
	);
};

export default ModalAddProject;