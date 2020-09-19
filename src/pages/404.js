import React from 'react'
import { Container } from 'react-bootstrap'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from '../components/Link'

const NotFoundPage = () => {
	return (
		<Layout pageTitle='Página no encontrada'>
			<Header />
			<Container className='d-flex flex-column justify-center my-5 py-5'>
				<h2 className='display-1 text-primary text-center mt-5 mb-3'>404</h2>
				<p className='lead text-grey text-center mb-3'>
					La página que buscas no existe o parece no estar disponible.
				</p>
				<Link to='/' className='btn btn-primary m-auto'>
					Volver al inicio
				</Link>
			</Container>
			<Footer />
		</Layout>
	)
}

export default NotFoundPage
