import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import ParamSelect from "../ParamSelect/ParamSelect";
import material from "../../store/material";
import technique from "../../store/technique";
import paint from "../../store/paint";
import loginPage from "../../pages/LoginPage/LoginPage";
import {observer} from "mobx-react-lite";

const sortingMethods = [
	{id: 0, name: 'По умолчанию'},
	{id: 1, name: 	'По возрастанию цены'},
	{id: 2, name: 'По убыванию цены'},
]

const PaintingFilter = observer(() => {

	const [materialId, setMaterialId] = useState(0);
	const [techniqueId, setTechniqueId] = useState(0);

	const [sort, setSort] = useState(0);

	useEffect(() => {


		let filtered = paint.items;

		let filter = paint.items;


		if (materialId) {

			filter = filter.filter(i => i.material?.id === materialId);

		}

		if (techniqueId) {

			filter = filter.filter(i => i.technique?.id === techniqueId);
		}



		if (sort) {
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

		paint.setViewItems(filtered);

	}, [materialId, techniqueId, sort])

	if (!material.items.length || !technique.items.length) return null;

	return (
		<Box>

			<ParamSelect
				id={materialId}
				setId={setMaterialId}
				label={'Материалы'}
				items={[{id: 0, name: 'По умолчанию'}, ...material.items]}
				deleteFunc={() => false}
			/>

			<ParamSelect
				id={techniqueId}
				setId={setTechniqueId}
				label={'Техники'}
				items={[{id: 0, name: 'По умолчанию'}, ...technique.items]}
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