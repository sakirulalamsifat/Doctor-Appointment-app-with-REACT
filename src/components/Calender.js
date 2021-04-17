import { getDay } from 'date-fns'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import './calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import { Col, Row, Button, Card } from 'react-bootstrap'

const Calender = ({ days, doctor }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [message, setMessage] = useState('')
  const [slot, setSlot] = useState('')
  const dayv = String(selectedDate)
  const selectedfinal = dayv.slice(0, 3)
  console.log(selectedfinal)

  var startingTime
  var endingTime

  if (selectedfinal === 'Sun') {
    startingTime = doctor.availibility.timeslots.sun.startingTime
    endingTime = doctor.availibility.timeslots.sun.endingTime
  } else if (selectedfinal === 'Mon') {
    startingTime = doctor.availibility.timeslots.mon.startingTime
    endingTime = doctor.availibility.timeslots.mon.endingTime
  } else if (selectedfinal === 'Tue') {
    startingTime = doctor.availibility.timeslots.tue.startingTime
    endingTime = doctor.availibility.timeslots.tue.endingTime
  } else if (selectedfinal === 'Wed') {
    startingTime = doctor.availibility.timeslots.wed.startingTime
    endingTime = doctor.availibility.timeslots.wed.endingTime
  } else if (selectedfinal === 'Thu') {
    startingTime = doctor.availibility.timeslots.thu.startingTime
    endingTime = doctor.availibility.timeslots.thu.endingTime
  } else if (selectedfinal === 'Fri') {
    startingTime = doctor.availibility.timeslots.fri.startingTime
    endingTime = doctor.availibility.timeslots.fri.endingTime
  } else if (selectedfinal === 'Sat') {
    startingTime = doctor.availibility.timeslots.sat.startingTime
    endingTime = doctor.availibility.timeslots.sat.endingTime
  }

  console.log(startingTime)

  //console.log(startingTime)
  let dateValues = []
  for (let i = 0; i < days.length; i++) {
    if (days[i] === 'Sunday') {
      dateValues.push(0)
    } else if (days[i] === 'Monday') {
      dateValues.push(1)
    } else if (days[i] === 'Tuesday') {
      dateValues.push(2)
    } else if (days[i] === 'Wednessday') {
      dateValues.push(3)
    } else if (days[i] === 'Thursday') {
      dateValues.push(4)
    } else if (days[i] === 'Friday') {
      dateValues.push(5)
    } else if (days[i] === 'Saturday') {
      dateValues.push(6)
    }
  }

  const isWeekday = (date) => {
    const day = getDay(date)

    return dateValues.includes(day)
  }

  function getTimeStops(start, end) {
    var startTime = moment(start, 'HH:mm')
    var endTime = moment(end, 'HH:mm')

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day')
    }

    var timeStops = []

    while (startTime <= endTime) {
      timeStops.push(new moment(startTime).format('HH:mm'))
      startTime.add(doctor.visitDurationInMin, 'minutes')
    }
    return timeStops
  }

  var timeStops = getTimeStops(startingTime, endingTime)
  console.log('timeStops ', timeStops)

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time]

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1) // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM' // Set AM/PM
      time[0] = +time[0] % 12 || 12 // Adjust hours
    }
    return time.join('') // return adjusted time or original string
  }

  const giveMessage = () => {
    setMessage('Time Slot Selected! Please Give Information Below')
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <DatePicker
            inline
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            showMonthDropdown
            showYearDropdown
            filterDate={isWeekday}
            wrapperClassName='datepicker'
          />
        </Col>
        <Col md={3}></Col>

        <Col md={3}>
          <Card style={{ width: '450px' }}>
            <Card.Title as='div' style={{ textAlign: 'center' }}>
              <h5>Availbale Time Slots</h5>
            </Card.Title>
            <div className='grid-container'>
              {timeStops.map((timeStop) => (
                <Button variant='outline-primary' onClick={giveMessage}>
                  {tConvert(timeStop)}
                </Button>
              ))}
            </div>
            <strong>
              <h6
                style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}
              >
                {message}
              </h6>
            </strong>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Calender
