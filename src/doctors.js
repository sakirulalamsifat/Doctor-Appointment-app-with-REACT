const doctors = [
  {
    name: 'Dr. John Doe',
    org: 'Kings London Hospital',
    availibility: {
      days: ['Sunday', 'Wednessday'],
      timeslots: {
        sun: { startingTime: '10:00', endingTime: '18:00' },
        wed: { startingTime: '18:00', endingTime: '21:00' },
        sat:{startingTime: '19:00', endingTime: '22:00'}
      }
    },
    visitDurationInMin: 15,
  },
  {
    name: 'Dr. Mary Ellis',
    org: 'ABC Hospital',
    availibility: {
      days: ['Sunday', 'Monday', 'Thursday'],
      timeslots: {
        sun: { startingTime: '10:00', endingTime: '18:00' },
        mon: { startingTime: '21:00', endingTime: '23:00' },
        thu: { startingTime: '11:00', endingTime: '14:00' },
      },
    },
    visitDurationInMin: 15,
  },

  {
    name: 'Dr. B Chowdhury',
    org: 'Central Hospital',
    availibility: {
      days: ['Sunday', 'Monday', 'Thursday', 'Friday'],
      timeslots: {
        sun: { startingTime: '10:00', endingTime: '18:00' },
        mon: { startingTime: '21:00', endingTime: '23:00' },
        thu: { startingTime: '11:00', endingTime: '14:00' },
        fri: { startingTime: '11:00', endingTime: '14:00' },
      },
    },
    visitDurationInMin: 30,
  },
]
export default doctors
