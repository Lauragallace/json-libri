import { Component } from "react";
import Card from "react-bootstrap/Card";

function reduceText(testo, lunghezzaMassima) {
  
  if (testo.length > lunghezzaMassima) {
  
    return testo.slice(0, lunghezzaMassima) + "...";
  } else {
   
    return testo;
  }
}

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          className={
            this.props.selectedBook === this.props.book.asin ? "selected" : ""
          }
          onClick={() => {
            this.props.setSelectedBook(this.props.book.asin);
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className="card-img"
          />
          <Card.Body>
            <Card.Title>{reduceText(this.props.book.title, 20)}</Card.Title>
            <Card.Text>
              Categoria:&nbsp;
              {this.props.book.category}
            </Card.Text>
            <Card.Text>
              Prezzo:&nbsp;
              {this.props.book.price}
              <strong>$</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;