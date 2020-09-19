import React from 'react'
import { Container } from 'react-bootstrap'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

import colors from '../styles/_customcolors.module.scss'

const StylesPage = () => {
	const siteColors = Object.entries(colors).reduce((obj, color) => {
		color[1].includes('#') && (obj[color[0]] = color[1])
		return obj
	}, {})

	return (
		<Layout pageTitle='Site Styles'>
			<Header />
			<header className='bg-primary py-5 px-1'>
				<h2 className='text-white py-5 text-center text-uppercase'>Styles</h2>
			</header>
			<Container className='d-flex bg-white flex-column justify-center my-5 py-5'>
				<h3>Colors</h3>

				{Object.entries(siteColors).map(color => {
					let slug = color[0].replace(/[A-Z]/g, s => '-' + s)
					slug = slug.match(/grey([0-9]{3})/g) ? slug.replace('grey', 'grey-') : slug

					return (
						<div className='d-flex mb-4' key={color[0]}>
							<p
								className={`m-0 mr-3 p-2 d-flex justify-column border border-${slug.toLowerCase()}`}>
								{slug.toLowerCase()}: {color[1]}
							</p>
							<div className={`p-3 w-100 bg-${slug.toLowerCase()}`}></div>
						</div>
					)
				})}
			</Container>
			<Footer />
		</Layout>
	)
}

export default StylesPage
