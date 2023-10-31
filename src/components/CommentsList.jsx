import { ListGroup, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";
import { useState } from "react";

const CommentList = ({ update, setError, listOfComments }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ListGroup>
      <h4 className="text-center">Commenti</h4>
      {isLoading && (
        <div className="text-center mb-2">
          <Spinner animation="border" variant="info" />
        </div>
      )}
      {listOfComments.map((comment, i) => {
        return (
          <SingleComment
            comment={comment}
            key={i}
            update={update}
            setIsLoading={setIsLoading}
            setError={setError}
          />
        );
      })}
    </ListGroup>
  );
};

export default CommentList;