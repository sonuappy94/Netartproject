import React from 'react'
import {Container, Row, Col,Image} from 'react-bootstrap'

function Footer() {
    return (
      <footer className="text-light p-4 mx-2" style={{backgroundColor:"#ec3237"}}>
        <Container fluid>

        <Row >
          <Col sm ={4}><Image src="asserts/a.png" className={{width:"2px", height:"2px"}}/>Toll free <b>1800 200 1234</b></Col>
          <Col sm ={4}><Image src="asserts/b.png" className={{width:"2px", height:"2px"}}/>www.facebook.com/cripumps</Col>
          <Col sm = {4}><Image src="asserts/c.png" className={{width:"2px", height:"2px"}}/>www.crigroups.com</Col>
        </Row>
       
      </Container>
       </footer>
    )
}

export default Footer
