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
          <div className='d-flex gap-2 align-items-center'>
            <ArrowLeft className='cursor-pointer' />
            <h2 className='m-0' style={{fontWeight: 600}}>Header Title</h2>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NavHeader