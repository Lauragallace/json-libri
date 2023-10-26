import { Component } from "react";
import CommentList from "./CommentsList";
import AddComment from "./AddComment";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    listOfComments: [],
    error: false,
  };
  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",+ this.props.id, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmIyNmY2ZTNkZDAwMTQ5NWU0NmQiLCJpYXQiOjE2OTgzMjczMzUsImV4cCI6MTY5OTUzNjkzNX0.wBALfsJ9rbb9HJoTfo0jsu1t7mBWvXx2MR-NynmDvlw"
        }
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({
          listOfComments: data,
        });
      }
    } catch (err) {
      console.log("ERRORE", err);
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <>
        {this.state.error && <Error />}
        <CommentList
          listOfComments={this.state.listOfComments}
          update={this.getComments}
          commentArea={this}
        />
        <AddComment
          id={this.props.id}
          update={this.getComments}
          commentArea={this}
        />
      </>
    );
  }
}

export default CommentArea;