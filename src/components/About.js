import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

import aboutImg from '../images/mpb-contract.jpg'

const About = () => {
	const styles = {
		imgs: {
			objectFit: 'cover',
			height: '200px',
			width: '100%',
			filter: 'sepia(0.6)',
			mixBlendMode: 'multiply',
		},
	}
	return (
		<section className='about section pt-5' id='nosotros'>
			<Container className='py-5'>
				<Card className={`shadow-sm border-0 p-0 p-md-3 bg-white`}>
					<Card.Body>
						<Row>
							<Col sm={12} md={8} className='pr-md-5'>
								<h2 className='about-title text-primary display-4 mt-4 mt-md-0'>
									¿Quienes Somos?
								</h2>
								<p className='lead py-2 text-secondary-grey'>
									Somos un grupo de profesionales con experiencia desarrollada en la
									atención a emprendedores y pequeñas y medianas empresas.
								</p>

								<p className='text-primary-grey'>
									Nuestro objetivo es construir relaciones de largo plazo con nuestros
									clientes, manteniendo una comunicación proactiva, ofreciéndoles atención
									personalizada acorde a las necesidades de cada uno de ellos y poniéndoles
									a disposición soluciones eficientes.
								</p>

								<p className='text-primary-grey'>
									Brindamos una solución rápida e integral y efectiva a las necesidades de
									nuestros clientes, acompañándolos en su crecimiento. Ponemos nuestros
									recursos técnicos y humanos a su servicio, contribuyendo con nuestro
									trabajo a que obtengan mejores resultados alcanzando de esta manera sus
									objetivos.
								</p>
							</Col>
							<Col
								sm={12}
								md={4}
								className='d-flex'
								style={{ height: isMobile ? '175px' : 'auto' }}>
								<Image src={aboutImg} fluid rounded style={{ objectFit: 'cover' }} />
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	)
}

export default About