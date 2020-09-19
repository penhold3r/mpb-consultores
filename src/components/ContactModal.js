import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'

const ContactModal = props => {
	const { status, title, text } = props

	const icon =
		status === 'sending' ? (
			<Spinner animation='border' variant='grey-200' className='font-weight-normal mr-2' />
		) : status === 'success' ? (
			<i className='ri-checkbox-circle-line text-success mr-2'></i>
		) : (
			<i className='ri-alert-line text-danger mr-2'></i>
		)

	return (
		<Modal {...props} size='md' centered dialogClassName='border-0'>
			<Modal.Header closeButton>
				<Modal.Title
					id='contained-modal-title-vcenter'
					className={`${
						status === 'danger' ? 'text-danger' : 'text-primary'
					} d-flex align-items-center`}>
					{icon} {title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p className='py-3'>{text}</p>
			</Modal.Body>
		</Modal>
	)
}

export default ContactModal
