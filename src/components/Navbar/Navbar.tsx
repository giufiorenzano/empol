import {
	Navbar,
	Nav,
	NavbarBrand,
	NavItem,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import { MenuOptions } from './Navbar.schema';
import Logo from '../../assets/image/logo.png';
import './Navbar.scss'
import { useState } from 'react';
import { Routes } from '../../routes';
import { NavLink } from 'react-router-dom';

const NavbarEmpol = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [dropTitle, setDropTitle] = useState(isOpen ? 'Aberto' : 'Fechado')

	const handleClick = () => {
		setIsOpen(!isOpen)
		setDropTitle(isOpen ? 'Fechado' : 'Aberto')
	}


	return (
		<Navbar color='light' light expand='md'>
			<NavbarBrand>
				<img src={Logo} alt='logo' className='navbar-brand' />
			</NavbarBrand>

			<Nav className='d-flex justify-content-between' navbar>
				{Routes.map((route, index) =>
					route.isNavLink ? (
						<NavItem key={index}>
							<NavLink
								to={route.path}
								key={index}
								isActive={(match, location) => {
									if (match) {
										if (location.pathname === '/')
											return true;
										if (match.url === location.pathname)
											return true;
										if (
											match.url !== '' &&
											location.pathname.includes(
												match.url
											)
										)
											return true;
									}
									return false;
								}}
							>
								{route.name}
							</NavLink>
						</NavItem>
					) : null
				)}
			</Nav>

			<Dropdown className='ml-auto' isOpen={isOpen} toggle={handleClick} title={dropTitle}>
				<DropdownToggle caret>userName</DropdownToggle>

				<DropdownMenu right>
					{MenuOptions.map((option) =>
						option.divider ? (
							<DropdownItem key='divider' divider />
						) : (
							<DropdownItem key={option.name}>{option.name}</DropdownItem>
						)
					)}
				</DropdownMenu>
			</Dropdown>
		</Navbar>
	);
}

export default NavbarEmpol
