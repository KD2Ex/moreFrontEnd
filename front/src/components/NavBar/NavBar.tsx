import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import LocaleText from "../Locale/LocaleText/LocaleText";
import LanguageChange from "../LanguageChange/LanguageChange";

const NavBar = () => {

	const buttons = [
		{
			title: [
				{
					locale: "ru",
					value: 'Главная'
				},
				{
					locale: 'en-US',
					value: "Main"
				}
			],
			url: '',
		},
		{
			title: [
				{
					locale: "ru",
					value: 'Галерея'
				},
				{
					locale: 'en-US',
					value: "Gallery"
				}
			],
			url: '/gallery',
		},
		{
			title: [
				{
					locale: "ru",
					value: 'Портфолио'
				},
				{
					locale: 'en-US',
					value: "Projects"
				}
			],
			url: '/portfolio',
		},
		/*{
			title: [
				{
					locale: "ru",
					value: 'Блог'
				},
				{
					locale: 'en-US',
					value: "Blog"
				}
			],
			url: '/blog',
		},*/
	]

	console.log(...buttons[0].title)

	return (
		<Box
			sx={{
				display: 'flex',
				scrollSnapAlign: 'start',
			}}
		>
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					my: 2,
					gap: 2
				}}
			>

				{buttons.map((item, index) => (
					<Button
						key={index}
						component={Link}
						to={item.url}
					>
						<LocaleText
							localeList={item.title}
						/>
					</Button>
				))}


			</Box>
			<Box
				sx={{
					alignItems: 'center',
					display: 'flex'
				}}
			>
				<LanguageChange/>
			</Box>
		</Box>

	);
};

export default NavBar;