import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
class SingleComment extends Component {
  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-between">
        <div>
          {this.props.comment.comment} - voto: {this.props.comment.rate}
        </div>
        <Button
          variant="danger"
          onClick={async () => {
            try {
              this.props.super.setState({
                isLoading: true,
              });
              const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                  this.props.comment._id,
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmIyNmY2ZTNkZDAwMTQ5NWU0NmQiLCJpYXQiOjE2OTg2ODAyOTQsImV4cCI6MTY5OTg4OTg5NH0.l8S8EEgCuPwPYadJZpQsZPOaydfFa-gJ7O-IH-4hqBE"
                  },
                  method: "DELETE",
                }
              );
              if (response.ok) {
                this.props.super.setState({
                  isLoading: false,
                });
                this.props.commentArea.setState({ error: false });
                this.props.update();
              } else {
                this.props.super.setState({
                  isLoading: false,
                });
                throw new Error("Errore di rete!");
              }
            } catch (err) {
              console.log("ERRORE", err);
              this.props.commentArea.setState({ error: true });
            }
          }}
        >
          <Trash3Fill />
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;