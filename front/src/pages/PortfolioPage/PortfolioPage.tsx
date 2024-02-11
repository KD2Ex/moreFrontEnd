import React from 'react';
import {Box} from "@mui/material";
import Gallery from "../../components/Gallery/Gallery";

const PortfolioPage = () => {
	return (
		<Box>

			<Gallery
				items={[
					{id: 1, title: 'title', relativeSize: 12},
					{id: 1, title: 'title', relativeSize: 12},
				]}
				type={'portfolio'}
			/>

		</Box>
	);
};

export default PortfolioPage;