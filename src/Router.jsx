import { Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout"
import List from "./Components/List";
import PlaneIndividual from "./Components/Individual"

export default function AppRouter() {
	return(
		<Routes>
			<Route path="/" element={<Layout />}>
			<Route index element={<List />}/>
			<Route path="planes/:id" element={<PlaneIndividual />}/>
			</Route>
		</Routes>
	);
}
