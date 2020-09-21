import React, { useEffect, useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { isMobileOnly } from 'react-device-detect'

import Link from './Link'

import logo from '../images/mpb-logo.svg'

const Header = () => {
	const query = graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`
	const {
		site: { siteMetadata },
	} = useStaticQuery(query)
	const [opaque, setOpaque] = useState(false)
	const [colapsed, setColapsed] = useState(true)

	const styles = {
		nav: {
			transition: 'all 0.3s',
		},
		logo: {
			objectFit: 'contain',
			width: '100px',
		},
		contact: {
			bottom: 'auto',
			right: '3rem',
			top: '18px',
		},
		hamb: {
			fontSize: '1.5rem',
			cursor: 'pointer',
		},
	}

	const toggleBtn = useRef(null)
	const toggleIcon = colapsed ? (
		<i className='ri-menu-line'></i>
	) : (
		<i className='ri-close-line'></i>
	)

	const handleToggle = () => {
		setColapsed(!colapsed)
		setOpaque(!opaque)
	}

	const handleScroll = () => colapsed && setOpaque(window.scrollY >= 200)

	useEffect(() => {
		if (window) {
			window.scrollY >= 200 && setOpaque(true)

			window.onscroll = () => handleScroll()
		}
	}, [])

	return (
		<header className='main-header'>
			<Navbar
				bg={opaque ? 'primary' : 'transparent'}
				variant='dark'
				fixed='top'
				expand='md'
				style={styles.nav}>
				<Container className='pos-relative'>
					<Navbar.Brand href='#'>
						<img
							alt={siteMetadata.title}
							src={logo}
							className='d-inline-block align-top'
							style={styles.logo}
						/>
					</Navbar.Brand>
					<Navbar.Toggle
						as='div'
						style={styles.hamb}
						bsPrefix='p-1 text-white d-flex d-md-none'
						children={toggleIcon}
						aria-controls='basic-navbar-nav'
						ref={toggleBtn}
						onClick={handleToggle}
					/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto mr-2 mr-md-3 mt-3 mt-md-0 text-right'>
							<Link
								to='/#inicio'
								className='nav-link text-white text-decoration-none text-uppercase py-3 p-md-2'
								onClick={() => toggleBtn.current.click()}>
								Inicio
							</Link>
							<div className='border-bottom d-md-none border-grey' />
							<Link
								to='/#nosotros'
								className='nav-link text-white text-decoration-none text-uppercase py-3 p-md-2'
								onClick={() => toggleBtn.current.click()}>
								Nosotros
							</Link>
							<div className='border-bottom d-md-none border-grey' />
							<Link
								to='/#servicios'
								className='nav-link text-white text-decoration-none text-uppercase py-3 p-md-2'
								onClick={() => toggleBtn.current.click()}>
								Servicios
							</Link>

							{isMobileOnly && (
								<>
									<div className='border-bottom d-md-none border-grey' />
									<Link
										to='/#contacto'
										className='nav-link text-white text-decoration-none text-uppercase py-3 p-md-2'
										onClick={() => toggleBtn.current.click()}>
										Contacto
									</Link>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
					{!isMobileOnly && (
						<Button
							href='/#contacto'
							variant='secondary'
							className='d-flex pos-absolute pos-md-static align-items-center'
							style={styles.contact}>
							<i className='ri-chat-3-line mr-2'></i>
							<span>Asesorate</span>
						</Button>
					)}
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
