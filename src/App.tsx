import { Fragment, Suspense } from "react";
import NavbarEmpol from "./components/Navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import {Routes} from './routes'

function App() {
	return (
		<Fragment>
			<NavbarEmpol />
			<Suspense fallback={<div>Carregando...</div>}>
			<Switch>
				{Routes.map((item, index) => (
					<Route
						key={index}
						path={item.path}
						component={item.component}
						exact
					/>
				))}
				<Route path="/*">
					<Redirect to="/" />
				</Route>
			</Switch>
			</Suspense>

		</Fragment>
	);
}

export default App;
