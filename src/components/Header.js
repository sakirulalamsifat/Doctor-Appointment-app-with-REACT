import { Button } from 'react-bootstrap'
import React from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar  bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Link to='/'>
        <Navbar.Brand>Doctor Lagbe</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
      
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
