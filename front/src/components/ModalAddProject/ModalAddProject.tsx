import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import project from "../../store/project";
import ModalAddProjectContent from "../ModalAddProjectContent/ModalAddProjectContent";
import {IProject} from "../../models/interfaces/IProject";
import alert from "../../store/alert";
import projectItem from "../ProjectItem/ProjectItem";

const ModalAddProject = ({open, setOpen}) => {

	const [doubleCheck, setDoubleCheck] = useState(false);

	const handleClose = () => {
		setOpen(false)
		setDoubleCheck(false)
	}

	const handleClick = async () => {
		//await project


		const isValid = project.validate(project.newItem)
		const isFull = project.isFull(project.newItem);

		if (!isValid) {

			alert.openAlert("Заполните название, описание, и загрузите изображение"
				, "error")
			return;
		}

		if (!isFull && !doubleCheck) {
			setDoubleCheck(true)
			alert.openAlert("Этажность, площадь, местоположение, сроки и/или стоимость не заполнены. Проверьте заполнение на английском. Если вы хотите оставить эти поля пустыми, нажмите кнопку \"Добавить\" еще раз", "warning")
			return;
		}

		const response = await project.create(project.newItem)

		project.newItem = project.defaultItem;
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

			<DialogContent
				sx={{
					minWidth: {xs: '350px', md: 700, lg: 1000}
				}}
			>

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