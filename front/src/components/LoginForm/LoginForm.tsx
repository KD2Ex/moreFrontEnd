import {useState} from 'react';
import {Box, Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import user from "../../store/user";
import { useNavigate } from "react-router-dom";
import alert from "../../store/alert.ts";

const LoginForm = () => {

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	
	const navigate = useNavigate()

	const handleLoginChange = (e) => {
		setLogin(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleCheck = (e) => {
		setShowPassword(e.target.checked)
	}

	const handleClick = async () => {

		const isAuth = await user.login(login, password)

		if (isAuth) {
			navigate('/gallery')
			alert.openAlert("wElcoMe bAcK, coMMandeR", "success");
		} else {
			alert.openAlert("Неправильный логин или пароль", "error");
		}
	}
	
	const loginOnEnter = (e) => {
		if (e.key === "Enter") {
			handleClick();
		}
	}
	
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1
			}}
		>

			<TextField
				label={'Логин'}
				size={'small'}
				value={login}
				onChange={handleLoginChange}
				onKeyDown={loginOnEnter}
			/>

			<TextField
				label={'Пароль'}
				size={'small'}
				value={password}
				onChange={handlePasswordChange}
				type={!showPassword && 'password'}
				onKeyDown={loginOnEnter}
			/>

			<FormGroup
			>
				<FormControlLabel
					control={
						(
							<Checkbox
								value={showPassword}
								onChange={handleCheck}
							/>
						)
					}
					label={'Показать пароль'}
				/>

				
			</FormGroup>


			<Button
				variant={'contained'}
				onClick={handleClick}
			>

				Войти
			</Button>
			

			<Button
				component={Link}
				to={'/'}
			>
				Вернуться к сайту
			</Button>

		</Box>
	);
};

export default LoginForm;