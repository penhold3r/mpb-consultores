/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AOS from 'aos'

import SEO from './SEO'

import 'aos/dist/aos.css'
import 'remixicon/fonts/remixicon.css'

import '../styles/global.scss'

const Layout = ({ children, pageTitle }) => {
	useEffect(() => {
		AOS.init({
			disable: 'mobile',
			offset: 100, // offset (in px) from the original trigger point
			delay: 200, // values from 0 to 3000, with step 50ms
			duration: 800, // values from 0 to 3000, with step 50ms
			easing: 'ease-in-out', // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		})
	}, [])
	return (
		<>
			<SEO title={pageTitle} />
			<main>{children}</main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	pageTitle: PropTypes.string,
}

export default Layout
