import React, {useMemo, useState} from 'react';
import {Box} from "@mui/material";
import Gallery from "../../components/Gallery/Gallery";
import AdminComponent from "../../components/AdminComponent/AdminComponent";
import AdminActions from "../../components/AdminActons/AdminActions";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import project from "../../store/project";
import {observer} from "mobx-react-lite";
import ModalAddProject from "../../components/ModalAddProject/ModalAddProject";
import ModalEditProject from "../../components/ModalEditProject/ModalEditProject";


const PortfolioPage = observer(() => {

	const [open, setOpen] = useState(false)


	const addProject = () => {

		setOpen(true)

	}

	const changeOrder = () => {

	}

	const changeHeight = () => {

	}

	const actions = useMemo(() => {

		return [
			{
				icon: <AddPhotoAlternateIcon/>,
				name: "Добавить проект",
				onClick: addProject
			},
			{
				icon: <AddPhotoAlternateIcon/>,
				name: "Изменить порядок",
				onClick: changeOrder
			},
			{
				icon: <AddPhotoAlternateIcon/>,
				name: `Изменить высоту, текущая высота: ${project.rowHeight}`,
				onClick: changeHeight
			}
		]

	}, [])

	return (
		<Box>

			<ModalAddProject
				open={open}
				setOpen={setOpen}
			/>

			<ModalEditProject

			/>

			<Gallery
				items={project.items}
				type={'project'}
			/>

			<AdminComponent>
				<AdminActions
					actions={actions}
				/>
			</AdminComponent>

		</Box>
	);
});

export default PortfolioPage;