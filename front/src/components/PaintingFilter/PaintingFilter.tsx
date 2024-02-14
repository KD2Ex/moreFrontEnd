import React, {useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import ParamSelect from "../ParamSelect/ParamSelect";
import material from "../../store/material";
import technique from "../../store/technique";
import paint from "../../store/paint";
import {observer} from "mobx-react-lite";
import alert from "../../store/alert";

const sortingMethods = [
	{id: 0, name: 'Как задумано'},
	{id: 1, name: 'По возрастанию цены'},
	{id: 2, name: 'По убыванию цены'},
]

const PaintingFilter = observer(() => {

	const [materialId, setMaterialId] = useState(0);
	const [techniqueId, setTechniqueId] = useState(0);

	const [sort, setSort] = useState(0);

	useEffect(() => {

		paint.setSort(paint.sortPaints, 1);

		if (paint.items.length === 0) return;
		let filtered = paint.items;
		let filter = paint.items;


		paint.setFilters({techniqueId: techniqueId, materialId: materialId})

		if (materialId) {

			filter = filter.filter(i => i.material?.id === materialId);
		}

		if (techniqueId) {

			filter = filter.filter(i => i.technique?.id === techniqueId);

		}


		if (sort) {

			let sortType;
			let sortId;

			switch (sort) {

				case 1:
					sortType = (a, b) => {
						return a.price - b.price
					}
					sortId = 2;
					break;
				case 2:
					sortType = (a, b) => {
						return b.price - a.price
					}
					sortId = 3;
					break;
			}

			paint.setSort(sortType, sortId);

			filtered = [...filtered]
				.sort((a, b) => {
					let result;
					console.log("Sort: " + sort)
					switch (sort) {
						case 1:
							result = a.price - b.price;

							break;
						case 2:
							result = b.price - a.price;
							break;
					}

					return result;
				})
		}

		for (let i of filtered) {
			console.log(i.price)
		}

		filtered.forEach(item => item.isFiltered = !!filter.find(j => j.id === item.id))

		paint.getFilteredCount().then(res => {
			console.log(res)
			alert.openAlert(`Картин с выбранными фильтрами:
			 ${res}`,"info")
		})


	}, [materialId, techniqueId, sort])

	if (!material.items.length || !technique.items.length) return null;

	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				alignItems: 'center',
				flexWrap: 'wrap',
				justifyContent: 'space-between'
			}}
		>

			<Typography
				sx={{
					fontSize: 18
				}}
			>
				Фильтрация:
			</Typography>
			<ParamSelect
				id={materialId}
				setId={setMaterialId}
				label={'Материалы'}
				items={[{id: 0, name: 'Показывать все'}, ...material.items]}
				deleteFunc={() => false}
			/>

			<ParamSelect
				id={techniqueId}
				setId={setTechniqueId}
				label={'Техники'}
				items={[{id: 0, name: 'Показывать все'}, ...technique.items]}
				deleteFunc={() => false}
			/>


			<ParamSelect
				id={sort}
				setId={setSort}
				items={sortingMethods}
				label={"Сортировка"}
				deleteFunc={() => false}
			/>

		</Box>
	);
});

export default PaintingFilter;