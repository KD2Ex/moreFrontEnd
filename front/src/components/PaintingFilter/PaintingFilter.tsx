import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import ParamSelect from "../ParamSelect/ParamSelect";
import material from "../../store/material";
import technique from "../../store/technique";
import paint from "../../store/paint";
import loginPage from "../../pages/LoginPage/LoginPage";
import {observer} from "mobx-react-lite";

const PaintingFilter = observer(() => {

	const [materialId, setMaterialId] = useState(0);
	const [techniqueId, setTechniqueId] = useState(0);




	useEffect(() => {


		let filtered = paint.items;

		console.log(filtered)

		if (materialId) {
			filtered = filtered
				.filter(i => i.material?.id === materialId)
		}

		if (techniqueId) {
			filtered = filtered
				.filter(i => i.technique?.id === techniqueId)
		}

		paint.setViewItems(filtered);

	}, [materialId, techniqueId])

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

		</Box>
	);
});

export default PaintingFilter;