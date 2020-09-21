import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import { isMobileOnly } from 'react-device-detect'

//import hex2rgba from '../utils/hex2rgba'

import Link from './Link'

//import colors from '../styles/_customcolors.module.scss'
import bgImage from '../images/mpb-hero.jpg'
import bgShape from '../images/mpb-hero-bg.gif'

const styles = {
	hero: {
		backgroundRepeat: `no-repeat`,
		backgroundPosition: `center center, right center`,
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		backgroundBlendMode: 'multiply',
		backgroundImage: `url(${bgImage}), url(${bgShape})`,
		position: 'relative',
	},
	jumbo: {
		background: `transparent`,
		height: '100vh',
	},
	cta: {
		fontSize: '1rem',
	},
	scroll: {
		bottom: 0,
		cursor: 'pointer',
		left: 0,
		margin: '0 auto',
		position: 'absolute',
		right: 0,
		width: '35px',
	},
}

const Hero = () => {
	return (
		<section className='hero bg-primary' style={styles.hero} id='inicio'>
			<Jumbotron
				fluid
				style={styles.jumbo}
				className={`m-0 d-flex justify-content-center align-items-center flex-column`}>
				<Container className={`d-flex flex-column`}>
					<h2
						className={`hero-text display-4 text-center text-md-left w-100 w-md-75 text-white`}>
						Brindamos a las empresas un asesoramiento integral en materia impositiva, laboral
						y contable.
					</h2>
					{isMobileOnly ? (
						<Button
							href='/#contacto'
							variant='accent'
							size='lg'
							className='mt-5 mx-auto d-inline-flex align-items-center'>
							<i className='ri-chat-3-line mr-2'></i>
							<span>Asesorate</span>
						</Button>
					) : (
						<Button
							href='/#nosotros'
							variant='accent'
							size='lg'
							className='mt-5 text-white mr-auto'>
							<span className='text-uppercase' style={styles.cta}>
								Conocenos
							</span>
						</Button>
					)}
				</Container>
				<Link to={`/#nosotros`} className={`scroll text-white h2`} style={styles.scroll}>
					<i
						className='ri-arrow-down-line d-flex justify-content-center'
						style={styles.scroll}></i>
				</Link>
			</Jumbotron>
		</section>
	)
}

export default Hero
