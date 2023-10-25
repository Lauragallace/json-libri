import { Component } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <>
        <Container>
          <Row className="text-center d-flex justify-content-center">
            <Col className="col-3">
              <Form.Group className="mb-3">
                <Form.Label>Ricerca</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Container className="mb-6">
          <Row className="gy-4">
            {this.props.genre
              .filter((book) => {
                return book.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase());
              })
              .map((book) => {
                return <SingleBook book={book} key={book.asin} />;
              })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;