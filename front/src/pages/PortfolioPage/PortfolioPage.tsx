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
import user from "../../store/user";
import alert from "../../store/alert";
import FullscreenImage from "../../components/FullscreenImage/FullscreenImage";
import modal from "../../store/modal";

const PortfolioPage = observer(() => {

	const [open, setOpen] = useState(false)


	const addProject = () => {

		setOpen(true)

	}

	const changeOrder = async () => {

		user.setChangeOrderMode(!user.changeOrderMode)

		if (!user.changeOrderMode) {
			project.updateOrder()
			alert.openAlert("Порядок успешно сохранен", "success")
		}
	}

	const changeHeight = async () => {

		await project.saveHeight().then(res => {
			alert.openAlert("Размеры успешно сохранены", "success")
		});
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
				name: `Сохранить размер`,
				onClick: changeHeight
			},
			{
				icon: <AddPhotoAlternateIcon/>,
				name: user.changeOrderMode ? "Сохранить порядок" : "Изменить порядок",
				onClick: changeOrder
			}
		]

	}, [user.changeOrderMode, project.rowHeight])

	return (
		<Box>

			<ModalAddProject
				open={open}
				setOpen={setOpen}
			/>

			<ModalEditProject

			/>

			<Gallery
				items={project.items?.slice().sort((a, b) => a.order - b.order)}
				type={'project'}
				store={project}
			/>

			<FullscreenImage
				src={modal.projectImage}
				open={modal.projectImageOpen}
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