import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const IndexPage = () => (
	<Layout>
		<Header />
		<Hero />
		<About />
		<Services />
		<Contact />
		<Footer />
	</Layout>
)

export default IndexPage
