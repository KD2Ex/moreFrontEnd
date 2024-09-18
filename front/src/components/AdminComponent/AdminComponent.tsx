import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import user from "../../store/user";

const AdminComponent = observer(({children}) => {

	useEffect(() => {


	}, [])

	if (!user.isAdmin && !localStorage.getItem("testMode")) return null;

	return (
		<>
			{children}
		</>
	);
});

export default AdminComponent;