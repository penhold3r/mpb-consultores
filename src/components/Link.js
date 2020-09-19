import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Link = ({ children, to, activeClassName, ...other }) => {
	const internal = /^\/(?!\/)/.test(to)
	const hashed = to.includes('#')

	if (internal)
		return (
			<GatsbyLink to={to} activeClassName={activeClassName} {...other}>
				{children}
			</GatsbyLink>
		)
	else if (hashed)
		return (
			<AnchorLink to={to} {...other}>
				{children}
			</AnchorLink>
		)
	else
		return (
			<a href={to} {...other} target='_blank' rel='noopener noreferrer'>
				{children}
			</a>
		)
}

export default Link
