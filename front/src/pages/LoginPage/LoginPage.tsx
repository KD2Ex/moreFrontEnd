import {Box} from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
	
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%'
				}}
			>

				<LoginForm

				/>

			</Box>



		</Box>
	);
};

export default LoginPage;