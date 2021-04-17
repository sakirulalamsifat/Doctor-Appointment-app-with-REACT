import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Doctor from '../components/Doctor'
import Doctors from '../doctors'
const HomeScreen = () => {
    return (
        <>
        <h1>All Available Doctors</h1>
        <Row>
            {Doctors.map((doctor)=>(
                <Col key={doctor.name} md={12} lg={12} xl={12} sm={12}>
                    <Doctor doctor={doctor}/>
                </Col>
            ))}
        </Row>
            
        </>
    )
}

export default HomeScreen
