import { Outlet } from "react-router-dom";
// import header
//https://reactrouter.com/api/components/Outlet
export default function Layout() {
	return (
		<div>
			<h1> Layout </h1>
			<Outlet />	
		</div>
	);
}
