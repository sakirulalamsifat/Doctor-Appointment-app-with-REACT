import React from 'react'
import { Card, Button } from 'react-bootstrap'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import { Icon, InlineIcon } from '@iconify/react'
import doctorIcon from '@iconify-icons/mdi/doctor'
import { Link } from 'react-router-dom'

const Doctor = ({ doctor }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Header>
        <h1>
          <Icon icon={doctorIcon} />
          <strong>{doctor.name}</strong>
        </h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <LocalHospitalIcon style={{ marginRight: '10px' }} />
          {doctor.org}
        </Card.Title>
        <Card.Text style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            Visiting Days:
            {doctor.availibility.days.map((day) => (
              <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                {day}
              </span>
            ))}
          </div>
          <div>
            Visiting Duration:{' '}
            <span style={{ marginRight: '5px' }}>
              {doctor.visitDurationInMin} minutes
            </span>
          </div>
        </Card.Text>
        <Link to={`/appointment/${doctor.name}`}>
          <Button variant='primary'>Fix appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Doctor
