module.exports = {
	siteMetadata: {
		title: `MPB Consultores`,
		description: `Estudio contable.`,
		siteUrl: 'https://mpbconsultores.com',
		keywords: 'contador consultoria contable impuestos ingresos brutos iva facturacion afip',
		author: `@mpbconsultores`,
		socialMedia: [
			{
				name: 'Whatsapp',
				icon: 'ri-whatsapp-line',
				url: `https://wa.me/5492610000000?text=${encodeURI(
					'Hola, necesito hacer una consulta.'
				)}`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 6,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: 80,
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				custom: {
					families: ['colaborate-thin', 'colaborate-regular', 'colaborate-bold'],
					urls: ['/fonts/fonts.css'],
				},
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `MPB Consultores`,
				short_name: 'MPB',
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`,
	],
}
