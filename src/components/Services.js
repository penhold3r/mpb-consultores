import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

import servicesList from '../data/servicesList'

import colors from '../styles/_customcolors.module.scss'

import bgImg from '../images/mpb-graph.jpg'

const styles = {
	section: {
		background: `${colors.primary} url(${bgImg}) no-repeat fixed center / cover`,
		backgroundBlendMode: 'multiply',
	},
	separator: {
		width: '4rem',
	},
}

const Services = () => {
	return (
		<section className='services bg-light py-5' id='servicios'>
			<div className='bg-primary px-2 py-5 mb-5' style={styles.section}>
				<h2
					className='services-title h1 text-white text-center mt-2 py-2 text-uppercase'
					data-aos='fade-up'>
					Áreas de trabajo
				</h2>
				<div className='mb-4' data-aos='fade-up'>
					<p className='lead text-center text-white m-0'>
						Asesoramiento impositivo, contable o laboral.
					</p>
					<div
						className='my-3 mx-auto border-bottom border-accent'
						style={styles.separator}></div>
					<p className='lead text-center text-white m-0'>Liquidación de sueldos.</p>
					<div
						className='my-3 mx-auto border-bottom border-accent'
						style={styles.separator}></div>
					<p className='lead text-center text-white m-0'>Sociedades.</p>
					<div
						className='my-3 mx-auto border-bottom border-accent'
						style={styles.separator}></div>
					<p className='lead text-center text-white m-0'>
						Atención personalizada y home office.
					</p>
				</div>
			</div>
			<Container className='pb-4 my-4'>
				<h2
					className='services-title h1 text-primary text-center mt-2 py-2 text-uppercase'
					data-aos='fade-up'>
					Servicios
				</h2>

				<Row className='pb-4'>
					{servicesList.map((service, index) => (
						<Col sm={12} md={6} className='my-3' key={index}>
							<Card className={`bg-light h-100`} data-aos='fade-up'>
								<Card.Header className='bg-primary-grey p-3 border-bottom border-accent'>
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
