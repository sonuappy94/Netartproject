import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function MyBody() {
    return (
        <>
            <Container fluid>
                <Row className='mr-2'>
                    <Col xs={12} sm={4}><Image src="asserts/1.png" style={{ width: "300px", height: "600px" }} fluid /></Col>
                    <Col sm={8} className=''>
                        <p><b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></p>
                        <ul className='text-justify'>
                            <li>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                        </li>

                            <li>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>

                        </ul>
                        <Image src="asserts/2.png" style={{ width: "800px", height: "450px" }} fluid />
                        <p className='text-justify'>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </Col>
                </Row>
            </Container>
            <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        </>
    )
}