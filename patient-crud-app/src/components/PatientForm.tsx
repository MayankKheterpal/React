import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { IValues } from "./Interface";

interface Iprops {
  patient?: IValues;
  handleOnSubmit: (patient: IValues) => void;
}

export default function PatientForm<RouteComponentProps>(props: Iprops) {
  const [patient, setpatient] = useState({
    id: props.patient ? props.patient.id : "",
    first_name: props.patient ? props.patient.first_name : "",
    last_name: props.patient ? props.patient.last_name : "",
    gender: props.patient ? props.patient.gender : "",
    address: props.patient ? props.patient.address : "",
    city: props.patient ? props.patient.city : "",
    state: props.patient ? props.patient.state : "",
    date_birth: props.patient ? props.patient.date_birth : "",
  } as IValues);

  const [errorMsg, setErrorMsg] = useState("");
  const { first_name, last_name, address, city, state, gender, date_birth } =
    patient;

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const values = [
      first_name,
      last_name,
      address,
      city,
      state,
      gender,
      date_birth,
    ];
    const checkRequired = values.every((value: string) =>
      value === "" ? false : true
    );
    if (checkRequired) {
      const patient = {
        id: uuidv4(),
        first_name,
        last_name,
        gender,
        address,
        city,
        state,
        date_birth,
      };
      props.handleOnSubmit(patient);
    } else {
      setErrorMsg("Fill all the Fields with *");
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setpatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="patient-form">
      {errorMsg && <p className="error">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="firstname" className="col-xs-2">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={first_name}
                placeholder="Enter First name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group controlId="lastname">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={last_name}
                placeholder="Enter Last name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div key="inline-radio" className="mb-3">
          <Form.Label column sm={2}>
            Gender*
          </Form.Label>
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            value="male"
            id="M"
            checked={gender === "male"}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value="female"
            id="F"
            checked={gender === "female"}
            onChange={handleInputChange}
          />
        </div>

        <Form.Group controlId="date_birth" className="mb-3">
          <Form.Label>Date of Birth*</Form.Label>
          <Form.Control
            type="date"
            value={date_birth}
            name="date_birth"
            placeholder="Date of Birth"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="address" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Row>
          <Col className="mb-3">
            <Form.Group controlId="city">
              <Form.Label>City*</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group controlId="state">
              <Form.Label>State*</Form.Label>
              <Form.Control
                as="select"
                name="state"
                defaultValue={state}
                onChange={handleInputChange}
              >
                <option value="" disabled hidden>
                  Select one
                </option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
}
