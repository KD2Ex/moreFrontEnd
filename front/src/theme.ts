import {createTheme} from "@mui/material";

export let theme = createTheme({
	palette: {
		primary: {
			main: '#3aa2ad',
		},
		secondary: {
			main: '#225c64'
		},
		background: {
			default: 'rgb(28,25,25)'
		},
		text: {
			primary: '#57a1a4'
		},
		mode: 'dark'
	},
	typography: {
		fontFamily: 'Manrope',
		textDecoration: 'none',
		textTransform: 'none',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					fontSize: 18
				}
			}
		}
	}
})