/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import SEO from './SEO'

//import 'bootstrap/dist/css/bootstrap.min.css'
import 'remixicon/fonts/remixicon.css'

import '../styles/global.scss'

const Layout = ({ children, pageTitle }) => (
	<>
		<SEO title={pageTitle} />
		<main>{children}</main>
	</>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	pageTitle: PropTypes.string,
}

export default Layout
