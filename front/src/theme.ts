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
			default: 'rgb(24,22,22)',
			paper: 'rgb(26,26,26)'
			//default: 'rgb(28,25,25)'
		},
		text: {
			primary: '#84a9b2'
			//primary: '#57a1a4'
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
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					//backgroundColor: '#000000'
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'none',
				}
			}
		},
	}
})