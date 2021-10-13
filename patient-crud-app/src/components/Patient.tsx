import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Patient = ({ id, first_name, last_name, handleDelete }: any) => {
  const history = useHistory();
  return (
    <Card className="patient">
      <Card.Body>
        <Card.Title>{`${first_name}, ${last_name}`}</Card.Title>
        <Button
          className="btn-card"
          variant="primary"
          onClick={() => history.push(`/edit/${id}`)}
        >
          Edit
        </Button>
        <Button
          className="btn-card"
          variant="danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Patient;
