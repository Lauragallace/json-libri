import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = ({ genre }) => {
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <Container className="mb-6 book-list">
        <Container className="book-list-search flex-grow-1">
          <Row className="text-center d-flex justify-content-start">
            <Col className="col-3">
              <Form.Group className="mb-3">
                <Form.Label>Ricerca</Form.Label>
                <Form.Control
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Row className="gy-4">
          <Col className="col-8 left">
            <Row className="gy-4">
              {genre
                .filter((book) => {
                  return book.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((book) => {
                  return (
                    <Col xs={12} lg={4} key={book.asin}>
                      <SingleBook
                        book={book}
                        setSelectedBook={setSelectedBook}
                        selectedBook={selectedBook}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col className="col-4 right">
            <CommentArea selectedBook={selectedBook} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;