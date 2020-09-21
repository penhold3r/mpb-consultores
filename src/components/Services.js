import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import servicesList from '../data/servicesList'

const Services = () => {
	return (
		<section className='services bg-light py-5' id='servicios'>
			<Container className='pb-4 my-4'>
				<h2 className='h1 text-primary text-center mt-2 py-2 text-uppercase'>
					Áreas de trabajo
				</h2>
				<div className='mb-4'>
					<p className='lead text-center text-primary m-0'>
						Asesoramiento impositivo, contable o laboral.
					</p>
					<p className='lead text-center text-primary m-0'>Liquidación de sueldos.</p>
					<p className='lead text-center text-primary m-0'>
						Atención personalizada y home office.
					</p>
					<p className='lead text-center text-primary m-0'>
						Sabes que impuestos debes que pagar.
					</p>
					<p className='lead text-center text-primary m-0'>Querés organizar tu empresa.</p>
					<p className='lead text-center text-primary m-0'>
						Conoces los beneficios de crear una sociedad.
					</p>
					<p className='lead text-center text-primary m-0'>
						Sabes cómo informatizar tu empresa.
					</p>
				</div>
				<Row className='pb-4'>
					{servicesList.map((service, index) => (
						<Col sm={12} md={6} className='my-3' key={index}>
							<Card className={`bg-light h-100`}>
								<Card.Header className='bg-secondary p-3 border-bottom border-accent'>
									<Card.Title className='m-0'>
										<span className='text-white text-center'>{service.title}</span>
									</Card.Title>
								</Card.Header>
								<Card.Body className='bg-white'>
									<ul className='card-text text-grey list-group list-group-flush'>
										{service.list.map((node, i) => {
											if (node.sublist) {
												return (
													<li key={i} className='list-group-item bg-transparent'>
														{node.item}
														<ul className='list-group list-group-flush'>
															{node.sublist.map((node, i) => (
																<li
																	key={i}
																	className='list-group-item bg-transparent'>
																	{node.item}
																</li>
															))}
														</ul>
													</li>
												)
											}

											return (
												<li key={i} className='list-group-item bg-transparent'>
													{node.item}
												</li>
											)
										})}
									</ul>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	)
}

export default Services
