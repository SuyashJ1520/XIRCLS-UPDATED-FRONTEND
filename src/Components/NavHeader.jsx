import React from 'react'
import { ArrowLeft } from 'react-feather'
// import { useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

const NavHeader = () => {

  // const navigateTo = useNavigate()
  return (
    <Container fluid className='p-3'>
      <Row>
        <Col className='d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-3 align-items-center'>
            <ArrowLeft strokeWidth={3.5} className='cursor-pointer' />
            <h1 className='m-0' style={{fontWeight: 600}}>Header Title</h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NavHeader