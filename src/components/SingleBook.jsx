import Card from "react-bootstrap/Card";
import { reduceText } from "../utility/utility";

const SingleBook = ({ setSelectedBook, book, selectedBook }) => {
  return (
    <>
      <Card
        className={selectedBook === book.asin ? "selected" : ""}
        onClick={() => {
          setSelectedBook(book.asin);
        }}
      >
        <Card.Img variant="top" src={book.img} className="card-img" />
        <Card.Body>
          <Card.Title>{reduceText(book.title, 20)}</Card.Title>
          <Card.Text>
            Categoria:&nbsp;
            {book.category}
          </Card.Text>
          <Card.Text>
            Prezzo:&nbsp;
            {book.price}
            <strong>$</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;