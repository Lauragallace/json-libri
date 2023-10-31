import CommentList from "./CommentsList";
import AddComment from "./AddComment";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = ({ selectedBook }) => {
  const [listOfComments, setlistOfComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook]);

  const getComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + selectedBook,
        {
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmIyNmY2ZTNkZDAwMTQ5NWU0NmQiLCJpYXQiOjE2OTg3NjAyMjUsImV4cCI6MTY5OTk2OTgyNX0.7azTwQiFiOVQiBCHLlfKQDr5ikUBZnV4rth4NE3uhmQ"
},
        }
      );
      if (response.ok) {
        const data = await response.json();
        setlistOfComments(data);
      }
    } catch (err) {
      console.log("ERRORE", err);
      setError(true);
    }
  };
  return (
    <div className="comment-area">
      {error && <Error />}
      <CommentList
        listOfComments={listOfComments}
        update={getComments}
        setError={setError}
      />
      <AddComment
        selectedBook={selectedBook}
        update={getComments}
        // commentArea={this}
      />
    </div>
  );
};

export default CommentArea;