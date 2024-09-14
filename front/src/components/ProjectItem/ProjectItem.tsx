import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import project from "../../store/project";
import {observer} from "mobx-react-lite";
import {IProject} from "../../models/interfaces/IProject";
import AdminComponent from "../AdminComponent/AdminComponent";
import ProjectPopover from "../ProjectPopover/ProjectPopover";
import ModalCarousel from "../ModalCarousel/ModalCarousel";
import ProjectCarousel from "./ProjectCarousel/ProjectCarousel";
import locale from "../../store/locale";
import LocaleText from "../Locale/LocaleText/LocaleText";
import Utils from "../../utils";
import modal from "../../store/modal";

interface ProjectItemProps {
	item: IProject,
}

const getEnLevelName = (value: number) => {

	return value > 1 ? 'levels' : 'level'

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
					borderBottom: '1px solid',
					borderColor: (theme) => theme.palette.text.primary,
					//height: {lg: `${item.height ? item.height : 400}px`, xs: '100%'}
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
						minHeight: '300px',
						borderRight: '1px solid',
						borderColor: (theme) => theme.palette.text.primary,
						pr: 2
					}}

					onClick={ () => {
						 //modal.openFullscreenImage(item.images)
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
							height: '100%',
							pb: 2
						}}
					>
						<Box>
							<Typography
								variant={'h4'}
							>
								{item.title[locale.currentLocale.name]}
							</Typography>
							<Typography
								fontSize={15}
								sx={{
									textAlign: 'justify'
								}}
							>
								{item.desc[locale.currentLocale.name]}
								{/*

								На фото представлен один из проектов нашего бюро. В процессе работы мы назвали его "Игры разума", не просто так. Заказчик обратился к нам уже с готовым проектом, залитым фундаментом, но ощущением, что имеющийся проект не откликается его мечтам, желаниям, потребностям. Объясняется это достаточно просто. Это было типовое решение. Профессионально выполненое, но типовое.
								В проекте не было личности архитектора, как важной составляющей.
								Именно архитектор проникая в сознания заказчика, используя свои профессиональные навыки, создаёт для вас идеальное пространство. Идеальное именно для Вас.
								Поэтому и не бывает двух одинаковых домов. Так же как нет таких людей, личностей. Есть похожие, но индивидуальные.

								*/}
							</Typography>
						</Box>

						<Box>
							<LocaleText
								useDefault
								childBefore
								fontSize={18}
								localeList={[
									`${getLevelName(item.levels)}, Общая площадь ${item.area} м²`,
									`${getEnLevelName(item.levels)}, Total area ${item.area} m²`,
								]}
							>
								{item.levels ? `${item.levels} ` : null}
							</LocaleText>

							{item.cost.ru
								? (
									<LocaleText
										useDefault
										fontSize={18}
										localeList={[
											`Итоговая стоимость: `,
											`Total cost: `,
										]}
									>
										{item.cost[locale.currentLocale.name]}
									</LocaleText>
								)
								: null}


							{item.timePeriod.ru
								? (
									<LocaleText
										useDefault
										fontSize={18}
										localeList={[
											`Срок реализации: `,
											`Time spent: `,
										]}
									>
										{item.timePeriod[locale.currentLocale.name]}
									</LocaleText>
								)
								: null}

							<Typography
								fontSize={18}
							>
								{item.address ? `${item.address[locale.currentLocale.name]}` : null}<br/>
							</Typography>
						</Box>

					</Box>
				</Grid>
			</Grid>
		</>
	);
});

export default ProjectItem;