import React, {useEffect, useState} from 'react';
import {Box, Popover, TextField} from "@mui/material";
import {observer} from "mobx-react-lite";
import paint from "../../store/paint";
import Gallery from "../../components/Gallery/Gallery";
import ModalAddPainting from "../../components/ModalAddPainting/ModalAddPainting";
import AdminComponent from "../../components/AdminComponent/AdminComponent";
import ModalView from "../../components/ModalView/ModalView";
import PaintingFilter from "../../components/PaintingFilter/PaintingFilter";
import AdminActions from "../../components/AdminActons/AdminActions";
import user from "../../store/user";
import SaveIcon from '@mui/icons-material/Save';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import alert from "../../store/alert";
import TextFieldPopover from "../../components/TextFieldPopover/TextFieldPopover";


const GalleryPage = observer(() => {


	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [anchor, setAnchor] = useState(null);

	const open = !!anchor;

	const galleryActions = [
		{
			icon: <AddPhotoAlternateIcon/>,
			name: "Добавить картину",
			onClick: () => setIsAddModalOpen(true),
		},
		{
			icon: <SaveIcon/>,
			name: "Сохранить размеры",
			onClick: async () => await paint.saveSizes()
		},
		{
			icon: <CollectionsIcon/>,
			name: user.adminView ? "Отключить заполнение" : "Включить заполнение",
			onClick: () => user.setAdminView(!user.adminView)
		},
		{
			icon: <CollectionsIcon/>,
			name: user.changeOrderMode ? "Сохранить порядок" : "Изменить порядок",
			onClick: async () => {
				try {
					user.setChangeOrderMode(!user.changeOrderMode)

					console.log(user.changeOrderMode)

					if (!user.changeOrderMode) {
						paint.updateOrder()
						alert.openAlert("Порядок успешно сохранен", "success")

					} else {
						alert.openAlert("Убедитесь, что сортировка картин отключена", "warning")
					}

				} catch (e) {

				}
			}
		},
		{
			icon: <CollectionsIcon/>,
			name: `Текущая высота: ${paint.rowHeight} пикселей`,
			onClick: (e) => {
				setAnchor(e.currentTarget)
			}
		}
	]

	useEffect(() => {

		(async () => {

			if (paint.loading) return;

			await paint.getItems();

			paint.setViewItems(paint.items)
		})()

	}, [])


	return (
		<Box
			sx={{
				width: '100%'
			}}
		>

			<Box
				sx={{
					mb: 2
				}}
			>
				<PaintingFilter

				/>
			</Box>


			<Gallery
				items={paint.items.slice().sort(paint.sort)}
				type={"gallery"}
			/>

			<ModalAddPainting
				open={isAddModalOpen}
				setOpen={setIsAddModalOpen}
			/>

			<AdminComponent>
				<TextFieldPopover
					open={open}
					anchor={anchor}
					setAnchor={setAnchor}
					onClick={paint.setRowHeight.bind(paint)}
				>
				</TextFieldPopover>
				<AdminActions
					actions={galleryActions}
				/>
			</AdminComponent>

			<ModalView

			/>

		</Box>
	);
});

export default GalleryPage;