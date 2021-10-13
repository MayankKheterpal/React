import React, { useContext } from "react";
import PatientForm from "./PatientForm";
import CrudContext from "../context/CrudContext";
import { IValues } from "./Interface";

const AddPatient = ({ history }: any) => {
  const { patients, setPatients } = useContext(CrudContext);
  const handleOnSubmit = (patient: IValues) => {
    setPatients([patient, ...patients]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <PatientForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPatient;
