import React, { useState } from 'react'
import { Container, Card, Row, Col, ListGroup, Form, InputGroup, Button } from 'react-bootstrap'
import qs from 'qs'
import axios from 'axios'

import hex2rgba from '../utils/hex2rgba'

import ContactModal from './ContactModal'

import colors from '../styles/_customcolors.module.scss'
import bg from '../images/mpb-hero-bg.gif'

const styles = {
	section: {
		background: `${colors.primaryGrey} url(${bg}) no-repeat fixed center / cover`,
	},
}

const Contact = () => {
	const [validated, setValidated] = useState(false)
	const [modal, setModal] = useState(false)
	const [modalStatus, setModalStatus] = useState('')
	const [data, setData] = useState({ name: '', email: '', message: '' })
	const [modalTexts, setModalTexts] = useState({ title: '', text: '' })

	const handleChange = e => {
		const { name, value } = e.target

		setData({ ...data, [name]: value })
	}

	const handleSubmit = e => {
		const form = e.currentTarget

		e.preventDefault()
		e.stopPropagation()

		setValidated(true)

		if (form.checkValidity()) {
			const url =
				'https://cors-anywhere.herokuapp.com/https://mpbconsultores.com/contact-form/index.php'

			setModal(true)
			setModalTexts({
				title: 'Enviado...',
				text: `${data.name}, estamos preparando tu mensaje.`,
			})
			setModalStatus('sending')

			axios({
				method: 'post',
				url,
				data: qs.stringify({
					...data,
					dest: 'info@mpbconsultores.com',
					primaryColor: colors.primary,
					secondaryColor: colors.secondary,
					textColor: colors.dark,
					host: 'mpbconsultores.com',
				}),
				headers: {
					'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				},
			})
				.then(resp => {
					setModalTexts({
						title: '¡Mensaje Enviado!',
						text: `${data.name}, gracias por comunicarte con nosotros, te responderemos a la brevedad.`,
					})
					setModalStatus('success')
					console.log(resp)
				})
				.catch(err => {
					setModalTexts({
						title: '¡Hubo un error!',
						text: `${data.name}, algo parece haber salido mal, intenta de nuevo más tarde.`,
					})
					setModalStatus('error')
					console.error(err)
				})

			setValidated(false)
			setData({ name: '', email: '', message: '' })
		}
	}

	return (
		<section
			className={`section bg-primary-grey bg-foo py-5`}
			id='contacto'
			style={styles.section}>
			<ContactModal
				show={modal}
				onHide={() => setModal(false)}
				status={modalStatus}
				title={modalTexts.title}
				text={modalTexts.text}
			/>
			<Container className='py-5'>
				<Card
					className='border-0 pt-3 px-3 p-md-3'
					style={{ background: hex2rgba(colors.light, 0.3) }}>
					<Card.Body className='mb-md-4 p-0'>
						<h2 className='h1 p-0 p-md-3 text-white'>Contacto</h2>
						<Row>
							<Col sm={12} md={6}>
								<ListGroup className='bg-transparent mb-4 mb-md-0' variant='flush'>
									<ListGroup.Item
										className='contact-link d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href='https://goo.gl/maps/HJ7gkQApvdugrEc56'
										target='_blank'
										rel='noopener noreferrer'>
										<i className='h3 text-white mb-0 mr-3 ri-home-2-line'></i>
										<span className={`text-white`}>
											Bandera de los Andes 4166 Villa Nueva (5521) Mendoza.
										</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='contact-link d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href='mailto:info@mpbconsultores.com'>
										<i className='h3 text-white mb-0 mr-3 ri-at-line'></i>
										<span className={`text-white`}>info@mpbconsultores.com</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='contact-link d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href='tel:+5492616277088'>
										<i className='h3 text-white mb-0 mr-3 ri-phone-line'></i>
										<span className={`text-white`}>261 627 7088</span>
									</ListGroup.Item>
									<ListGroup.Item
										className='contact-link d-flex align-items-center bg-transparent px-0 px-md-3'
										action
										href={`https://wa.me/5492616277088?text=${encodeURI(
											'Hola, necesito hacer una consulta.'
										)}`}>
										<i className='h3 text-white mb-0 mr-3 ri-whatsapp-line'></i>
										<span className={`text-white`}>Comunicate por Whatsapp</span>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={12} md={6} className='px-0 px-md-3'>
								<Form
									className={`bg-white rounded p-3 p-lg-4 shadow-sm`}
									noValidate
									validated={validated}
									onSubmit={handleSubmit}>
									<Form.Group controlId='name'>
										<Form.Label className='sr-only'>Nombre</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`bg-light border-grey-100`}>
													<i
														className={`ri-account-circle-line text-primary-grey`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-white border-grey-100 text-dark rounded-right`}
												onChange={e => handleChange(e)}
												type='text'
												placeholder='Nombre y Apellido'
												name='name'
												value={data.name}
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor ingresa tu nombre
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-muted'>
											Por favor ingresa tu nombre completo.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='email'>
										<Form.Label className='sr-only'>Email</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`bg-light border-grey-100`}>
													<i className={`ri-at-line text-primary-grey`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-white border-grey-100 text-dark rounded-right`}
												onChange={e => handleChange(e)}
												type='email'
												name='email'
												placeholder='nombre@email.com'
												value={data.email}
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor ingresa un correo válido.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-muted'>
											No compartiremos tu dirección de correo con nadie.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='msg'>
										<Form.Label className='sr-only'>Mensaje</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`bg-light border-grey-100`}>
													<i className={`ri-message-2-line text-primary-grey`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-white border-grey-100 text-dark rounded-right`}
												onChange={e => handleChange(e)}
												as='textarea'
												name='message'
												value={data.message}
												rows='4'
												placeholder='Tu mensaje...'
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor escribe un mensaje.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-muted'>
											Cuéntanos en que podemos ayudarte.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='formBasicCheckbox'>
										<Form.Check
											type='checkbox'
											label='No soy un robot'
											className='text-grey'
											required
										/>
									</Form.Group>

									<Button
										className='d-flex w-100 w-md-auto w-lg-auto w-xl-auto justify-content-center align-items-center'
										variant={'outline-accent'}
										type='submit'>
										<span className='mr-2'>Enviar</span>
										<i className='ri-mail-send-line'></i>
									</Button>
								</Form>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	)
}

export default Contact
