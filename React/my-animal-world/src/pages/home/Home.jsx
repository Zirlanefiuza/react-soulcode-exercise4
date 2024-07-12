import { Card, Button, Accordion, Col, Container, Row } from 'react-bootstrap';
import animal1 from '../../assets/img/pexels-pixabay-45201.jpg';
import animal2 from '../../assets/img/pexels-konrads-photo-12790284.jpg';
import animal3 from '../../assets/img/pexels-adi-k-182036-16507665.jpg';
import './Home.css';

function Home() {
  return (
    <Container className="mt-4 home-container">
      <h1 className="animate__animated animate__fadeInDown">Bem-vindo ao Mundo Animal</h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-4 animate__animated animate__zoomIn">
            <Card.Img variant="top" src={animal1} />
            <Card.Body>
              <Card.Title>Gatinho Branco</Card.Title>
              <Card.Text>
                Os gatos são conhecidos por sua independência e curiosidade. Eles têm excelente visão noturna e podem ouvir sons que os humanos não conseguem.
              </Card.Text>
              <Button className="button-custom">Saiba mais</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 animate__animated animate__zoomIn">
            <Card.Img variant="top" src={animal2} />
            <Card.Body>
              <Card.Title>Cachorro Preto</Card.Title>
              <Card.Text>
                Os cães são leais e amigáveis, sendo considerados os melhores amigos do homem. Eles possuem um olfato altamente desenvolvido.
              </Card.Text>
              <Button className="button-custom">Saiba mais</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 animate__animated animate__zoomIn">
            <Card.Img variant="top" src={animal3} />
            <Card.Body>
              <Card.Title>Tigre</Card.Title>
              <Card.Text>
                Os tigres são grandes felinos conhecidos por suas listras e força. Eles são predadores solitários e podem correr até 65 km/h.
              </Card.Text>
              <Button className="button-custom">Saiba mais</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Curiosidade 1</Accordion.Header>
          <Accordion.Body>
            Os gatos têm mais ossos em seus corpos do que os humanos, totalizando cerca de 230.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Curiosidade 2</Accordion.Header>
          <Accordion.Body>
            Os cães possuem cerca de 300 milhões de receptores olfativos em seus narizes, comparado aos 6 milhões nos humanos.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Curiosidade 3</Accordion.Header>
          <Accordion.Body>
            Os tigres são excelentes nadadores e gostam de água, ao contrário de muitos outros felinos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Home;
