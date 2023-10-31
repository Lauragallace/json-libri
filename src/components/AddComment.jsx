import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddComment = ({ selectedBook, id, update }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: "1",
    elementId: selectedBook,
  });

  useEffect(() => {
    setComment({
      ...comment,
      elementId: selectedBook,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook]);

  const sendComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmIyNmY2ZTNkZDAwMTQ5NWU0NmQiLCJpYXQiOjE2OTg3NjAyMjUsImV4cCI6MTY5OTk2OTgyNX0.7azTwQiFiOVQiBCHLlfKQDr5ikUBZnV4rth4NE3uhmQ"
          },
          method: "POST",
          body: JSON.stringify(comment),
        }
      );
      if (response.ok) {
        setComment({
          comment: "",
          rate: "1",
          elementId: id,
        });
        update();
      }
    } catch (err) {
      console.log("ERRORE", err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    sendComment();
  };

  const handleInputChange = (name, value) => {
    setComment({ ...comment, [name]: value });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Recensione</Form.Label>
        <Form.Control
          type="text"
          required
          value={comment.comment}
          onChange={(e) => handleInputChange("comment", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Voto</Form.Label>
        <Form.Select
          onChange={(e) => handleInputChange("rate", e.target.value)}
          value={comment.rate}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;