import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import project from "../../store/project";
import {observer} from "mobx-react-lite";
import {IProject} from "../../models/interfaces/IProject";
import AdminComponent from "../AdminComponent/AdminComponent";
import ProjectPopover from "../ProjectPopover/ProjectPopover";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";

interface ProjectItemProps {
	item: IProject,
}

function getLevelName(value: number) {
	const names = {
		1: "этаж",
		2: "этажа",
		3: "этажа",
		4: "этажа",
		5: "этажей",
		6: "этажей",
		7: "этажей",
		8: "этажей",
		9: "этажей",
		0: "этажей",
	}

	if (value > 9 && value < 21) return "этажей"

	const lastNumber = value % 10;

	return names[lastNumber];
}

const ProjectItem = observer(({item}: ProjectItemProps) => {

	const [anchor, setAnchor] = useState(null)

	return (
		<>

			<AdminComponent>
				<ProjectPopover
					anchor={anchor}
					setAnchor={setAnchor}
					item={item}
				/>
			</AdminComponent>

			<Grid
				container
				spacing={{xs: 0, md: 2}}
				sx={{
					width: '100%',
					height: {lg: `${item.height ? item.height : 400}px`, xs: '100%'}

				}}
				onContextMenu={(e) => {
					e.preventDefault();
					setAnchor(e.currentTarget)
				}}
			>

				<Grid
					item
					lg={5}
					xl={4}
					xs={12}
					sx={{
						height: '100%',
						minHeight: '300px'
					}}
				>

					{/*<Box
						component={'img'}
						src={import.meta.env.VITE_BASE_URL + item.images[0].name}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					>

					</Box>*/}

					<ProjectCarousel
						height={item.height}
						items={item.images}
					/>

				</Grid>

				<Grid
					item
					xl
					lg={7}
					xs={12}
				>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							justifyContent: 'space-between',
							alignItems: 'start',
							height: '100%'
						}}
					>
						<Box>
							<Typography
								variant={'h4'}
							>
								{item.title}
							</Typography>
							<Typography
								fontSize={15}
								sx={{
									textAlign: 'justify'
								}}
							>
								{item.desc}
								{/*

								На фото представлен один из проектов нашего бюро. В процессе работы мы назвали его "Игры разума", не просто так. Заказчик обратился к нам уже с готовым проектом, залитым фундаментом, но ощущением, что имеющийся проект не откликается его мечтам, желаниям, потребностям. Объясняется это достаточно просто. Это было типовое решение. Профессионально выполненое, но типовое.
								В проекте не было личности архитектора, как важной составляющей.
								Именно архитектор проникая в сознания заказчика, используя свои профессиональные навыки, создаёт для вас идеальное пространство. Идеальное именно для Вас.
								Поэтому и не бывает двух одинаковых домов. Так же как нет таких людей, личностей. Есть похожие, но индивидуальные.

								*/}
							</Typography>
						</Box>

						<Typography
							fontSize={18}
						>
							{item.levels ? `${item.levels} ${getLevelName(item.levels)},` : null}
							{item.area ? `Общая площадь ${item.area} м²` : null} <br/>
							{item.cost ? `Итоговая стоимость: ${item.cost} рублей` : null}<br/>
							{item.timePeriod ? `Срок реализации: ${item.timePeriod} ` : null}<br/>
							{item.address ? `${item.address}` : null}<br/>
						</Typography>
						{/*<Typography
							fontSize={20}
						>
							Общая площадь 1000 м<sup>2</sup> Цена, Срок реализации, Расположение,
						</Typography>*/}
					</Box>
				</Grid>
			</Grid>
		</>
	);
});

export default ProjectItem;