import { render, screen } from '@testing-library/react';
import NavbarEmpol from './Navbar'
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import userEvent from '@testing-library/user-event'


//teste com Jest e Testing Library
const customHistory = createBrowserHistory()

test('1. If Navbar is rendered', async () => {
	render(
		<Router history={customHistory}>
			<NavbarEmpol />
		</Router>

	);
	expect(screen.getByText('Página Inicial')).toBeInTheDocument();
})

test('2. If Dropdown opens', async () => {
	render(
		<Router history={customHistory}>
			<NavbarEmpol />
		</Router>

	);

	userEvent.click(screen.getByText('userName'))
	expect(screen.getByTitle('Aberto')).toBeTruthy()
})

test('3. If Dropdown closes', async () => {
	render(
		<Router history={customHistory}>
			<NavbarEmpol />
		</Router>

	);

	userEvent.click(screen.getByText('userName'))
	userEvent.click(screen.getByText('userName'))
	expect(screen.getByTitle('Fechado')).toBeTruthy()
})

