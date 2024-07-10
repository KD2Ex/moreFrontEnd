import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import ParamSelect from "../ParamSelect/ParamSelect";
import material from "../../store/material";
import technique from "../../store/technique";
import paint from "../../store/paint";
import {observer} from "mobx-react-lite";
import alert from "../../store/alert";
import locale from "../../store/locale";
import LocaleText from "../Locale/LocaleText/LocaleText";

const sortingMethods = [
	{id: 0, name: <LocaleText localeList={[
			{locale: 'ru', value: 'Как задумано'},
			{locale: 'en-US', value: 'As intended'}
		]}/>},
	{id: 1, name: <LocaleText localeList={[
			{locale: 'ru', value: 'По возрастанию цены'},
			{locale: 'en-US', value: 'Ascending price'}
		]}/>},
	{id: 2, name: <LocaleText localeList={[
			{locale: 'ru', value: 'По убыванию цены'},
			{locale: 'en-US', value: 'Descending price'}
		]}/>},
]

const localeLabel = {
	materials: {
		ru: 'Материалы',
		'en-US': 'Materials'
	},
	techs: {
		ru: 'Техники',
		'en-US': 'Techniques'
	},
	sort: {
		ru: 'Соритровка',
		'en-US': 'Sorting'
	}
}

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

			<LocaleText
				localeList={[
					{
						locale: "ru",
						value: "Фильтрация: "
					},
					{
						locale: "en-US",
						value: "Filtering: "
					}
				]}
				sx={{
					fontSize: 18
				}}
			/>

			<ParamSelect
				id={materialId}
				setId={setMaterialId}
				label={localeLabel.materials[locale.currentLocale.name]}
				items={[{id: 0, name: <LocaleText localeList={[
						{locale: 'ru', value: 'Показывать все'},
						{locale: 'en-US', value: 'Show all'}
					]}/>}, ...material.items]}
				deleteFunc={() => false}
			/>

			<ParamSelect
				id={techniqueId}
				setId={setTechniqueId}
				label={localeLabel.techs[locale.currentLocale.name]}
				items={
					[
						{
							id: 0,
							name: <LocaleText localeList={[
								{locale: 'ru', value: 'Показывать все'},
								{locale: 'en-US', value: 'Show all'}
							]}/>
						}
						, ...technique.items
					]
				}
				deleteFunc={() => false}
			/>

			<ParamSelect
				id={sort}
				setId={setSort}
				items={sortingMethods}
				label={localeLabel.sort[locale.currentLocale.name]}
				deleteFunc={() => false}
			/>

		</Box>
	);
});

export default PaintingFilter;