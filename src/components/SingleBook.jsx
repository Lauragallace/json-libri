import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function reduceText(testo, lunghezzaMassima) {
  // Verifica se la lunghezza del testo supera quella massima
  if (testo.length > lunghezzaMassima) {
    // Accorcia il testo e aggiunge puntini alla fine
    return testo.slice(0, lunghezzaMassima) + "...";
  } else {
    // Restituisci il testo inalterato se non supera la lunghezza massima
    return testo;
  }
}

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          className={this.state.selected ? "selected" : ""}
          onClick={() => {
            let actual = this.state.selected;
            if (actual) {
              this.setState({ selected: false });
            } else {
              this.setState({ selected: true });
            }
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
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;