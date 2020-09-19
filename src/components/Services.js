import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
	const servicesList = [
		{
			title: 'Materia Impositiva',
			list: [
				{
					item:
						'Trámite de inscripciones ante la Administración Federal y Organismos Provinciales.',
				},
				{
					item: 'Asistencia y atención de inspecciones.',
				},
				{
					item:
						'Asesoramiento, confección y presentación en materia de moratorias y planes de facilidades de pago.',
				},
				{
					item: 'Proyecciones y planeamiento estratégico impositivo.',
				},
				{
					item:
						'Confección de liquidaciones juradas de impuestos de frecuencia mensual y anual requeridas tanto a nivel Nacional como Provincial, entre ellas, las mencionadas a continuación:',
					sublist: [
						{
							item: 'I.V.A. Impuesto a las Ganancias personas físicas y sociedades.',
						},
						{
							item: 'Impuesto a los Bienes Personales y Participaciones Societarias.',
						},
						{
							item:
								'Impuesto a los Ingresos Brutos en sus distintas modalidades (Contribuyente Local o Convenio Multilateral)',
						},
						{ item: 'Regímenes de información (Citi ventas, R.G. 4120, etc.)' },
						{ item: 'Monotributo, monitoreo y recategorización' },
						{ item: 'Régimen de facturación electrónica.' },
						{ item: 'Regímenes de retención (S.I.C.O.R.E.).' },
					],
				},
			],
		},
		{
			title: 'Laboral y Seguridad Social',
			list: [
				{
					item:
						'Asesoramiento integral en materia laboral-previsional y sobre los distintos convenios colectivos de trabajo.',
				},
				{
					item:
						'Liquidación de sueldos, confección de los recibos correspondientes y presentación de declaraciones juradas de cargas sociales ante la Administración Federal, sindicatos, aseguradoras de riesgos de trabajo y obras sociales.',
				},
				{
					item:
						'Manejo de inscripciones varias, altas, bajas de empleados, certificaciones de servicios y liquidaciones finales.',
				},
				{
					item:
						'Asistencia y atención de inspecciones de organismos de índole laboral y previsional.',
				},
				{
					item:
						'Liquidación del impuesto a las ganancias para aquellos que realicen su actividad bajo relación de dependencia.',
				},
				{
					item: 'Liquidación de aportes de trabajadores autónomos (SICAM).',
				},
				{
					item:
						'Altas, bajas, asesoramiento y liquidación de aportes de los empleados de Servicio Doméstico.',
				},
			],
		},
		{
			title: 'Sociedades',
			list: [
				{
					item:
						'Asesoramos y acompañamos a nuestro cliente en la búsqueda de la forma societaria que mejor se acomode a sus necesidades.',
				},
				{ item: 'Inscripciones, transformaciones, reformas y disoluciones.' },
				{ item: 'Escisión y fusión societaria.' },
				{ item: 'Elaboraciones de actas de los órganos de dirección.' },
				{ item: 'Gestiones ante la Inspección General de Justicia y órganos de contralor.' },
			],
		},
		{
			title: 'Servicios Contables',
			list: [
				{
					item:
						'Organización contable integral basada en el desarrollo de planes de cuentas ajustados a la actividad.',
				},
				{
					item:
						'Registro de operaciones, análisis y conciliación de cuentas contables y elaboración de balances de saldos.',
				},
				{
					item:
						'Elaboración de Estados Contables comparativos, anexos y notas complementarias.',
				},
			],
		},
	]

	return (
		<section className='services bg-light py-5' id='servicios'>
			<Container className='pb-4 my-4'>
				<h2 className='h1 text-primary text-center mt-2 py-2 text-uppercase'>
					Áreas de trabajo
				</h2>
				<p className='lead text-center text-primary mb-4'>
					Podemos ayudarte. Contanos que te pasó y te contactaremos a la brevedad.
				</p>
				<Row className='pb-4'>
					{servicesList.map((service, index) => (
						<Col sm={12} md={6} className='my-3' key={index}>
							<Card className={`bg-light h-100`}>
								<Card.Header className='bg-secondary p-3'>
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
