import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { reduceText } from "../utility/utility";

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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;