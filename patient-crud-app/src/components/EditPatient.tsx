import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PatientForm from "./PatientForm";
import CrudContext from "../context/PatientContext";
import { PatientModel } from "./Interface";

const EditBook = ({ history }: any) => {
  const { patients, setPatients } = useContext(CrudContext);
  const { id }: any = useParams();

  //use memo
  const findPatient = patients.find(
    (patient: PatientModel) => patient.id === id
  );

  //use callback
  const handleOnSubmit = (patient: PatientModel) => {
    const filteredPatient = patients.filter(
      (patient: PatientModel) => patient.id !== id
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
