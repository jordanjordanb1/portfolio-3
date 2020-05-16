import React from 'react';
import './contact.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from '../src/components/Contact/Form/Form';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Full Stack Web Dev | Jordan Barbosa</title>
        <link rel="canonical" href="https://jordanbarbosa.com/contact" />
      </Head>
      <Jumbotron fluid className="page">
        <Container fluid>
          <Row>
            <Col
              xs="12"
              md={{ span: 8, offset: 2 }}
              lg={{ span: 4, offset: 4 }}
              className="contact mt-3 mt-md-0"
            >
              <Row>
                <Col className="text-center">
                  <h1>Contact me</h1>
                </Col>
              </Row>

              <hr />

              <Row noGutters>
                <Col xs="12" md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                  <Form />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
