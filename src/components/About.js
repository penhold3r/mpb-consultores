import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

import aboutImg from '../images/mpb-contract.jpg'

const About = () => {
	return (
		<section className='about section pt-5' id='nosotros'>
			<Container className='py-5'>
				<Card className={`shadow-sm border-0 p-0 p-md-3 bg-white`}>
					<Card.Body>
						<Row className='foo'>
							<Col sm={12} md={8} className='pr-md-5 order-2 order-md-1'>
								<h2 className='about-title font-weight-bold text-primary display-4 mt-4 mt-md-0'>
									¿<span className='font-weight-normal'>Quienes</span> Somos?
								</h2>
								<p className='lead py-2 text-secondary'>
									Somos un grupo de profesionales con experiencia desarrollada en la
									atención a emprendedores y pequeñas y medianas empresas.
								</p>

								<p className='text-primary-grey'>
									Nuestro objetivo es construir relaciones de largo plazo con nuestros
									clientes, manteniendo una comunicación proactiva, ofreciéndoles atención
									personalizada acorde a las necesidades de cada uno de ellos y poniéndoles
									a disposición soluciones eficientes.
								</p>

								<p className='text-primary-grey pb-3 mb-0 border-bottom border-accent'>
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
								className='d-flex order-1 order-md-2'
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
