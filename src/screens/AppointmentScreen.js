import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import doctors from '../doctors'
import { Row, Col, Button, Form } from 'react-bootstrap'
import Calender from '../components/Calender'

const AppointmentScreen = ({ match }) => {
  const doctor = doctors.find((d) => d.name === match.params.name)

  const days = doctor.availibility.days
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState('')

  const submitHandler=()=>{
      alert('Your Appointment Has Been Scheduled! Please Come on Time')
  }

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>
        {' '}
        Fix an appointment with <strong>{doctor.name}</strong>
      </h4>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <h5>Select A date</h5>
          <Calender days={days} doctor={doctor} />
        </Col>
      </Row>
      <Row style={{ marginTop: '50px' }}>
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                row='3'
                value={name}
                placeholder='Enter Your Name'
                required
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='phone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                row='3'
                value={phone}
                required
                placeholder='Enter Your Phone Number'
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='reason'>
              <Form.Label>  Problems</Form.Label>
              <Form.Control
                as='textarea'
                row='3'
                value={reason}
                required
                placeholder='Enter Your Phone Problems'
                onChange={(e) => setReason(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default AppointmentScreen
