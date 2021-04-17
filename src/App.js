import React from 'react'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import AppointmentScreen from './screens/AppointmentScreen'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/appointment/:name' component={AppointmentScreen} />
          </Container>
        </main>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
