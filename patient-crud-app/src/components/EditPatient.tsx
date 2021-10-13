import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PatientForm from "./PatientForm";
import CrudContext from "../context/CrudContext";
import { IValues } from "./Interface";

const EditBook = ({ history }: any) => {
  const { patients, setPatients } = useContext(CrudContext);
  const { id }: any = useParams();

  const findPatient = patients.find((patient: IValues) => patient.id === id);

  const handleOnSubmit = (patient: IValues) => {
    const filteredPatient = patients.filter(
      (patient: IValues) => patient.id !== id
    );
    setPatients([patient, ...filteredPatient]);
    history.push("/");
  };

  return (
    <div>
      <PatientForm patient={findPatient} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
