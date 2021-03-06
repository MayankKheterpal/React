import React, { useContext } from "react";
import Patient from "./Patient";
import CrudContext from "../context/PatientContext";
import { PatientModel } from "./Interface";

function PatientList() {
  const { patients, setPatients } = useContext(CrudContext);
  const handleDelete = (id: string) => {
    setPatients(patients.filter((patient: PatientModel) => patient.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {Object.keys(patients).length !== 0 ? (
          patients.map((patient: PatientModel) => (
            <Patient
              key={patient.id}
              {...patient}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p className="message">No Patients</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default PatientList;
