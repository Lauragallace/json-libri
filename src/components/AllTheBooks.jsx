import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fantasy from "../books/fantasy.json"

function reduceText(testo, lunghezzaMassima) {
  if (testo.length > lunghezzaMassima) {
   
    return testo.slice(0, lunghezzaMassima) + "...";
  } else {
    return testo;
  }
}

function AllTheBooks(props) {
  return (
    <Container>
      <Row className="gy-4">
       
        
        {props.genre.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={book.img} className="card-img" />
              <Card.Body>
                <Card.Title>{reduceText(book.title, 20)}</Card.Title>
                <Card.Text>
                  Categoria:&nbsp;
                  {book.category}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;