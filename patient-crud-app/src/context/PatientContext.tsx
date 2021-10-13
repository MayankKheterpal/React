import React from "react";

interface PatientContext {
  patients: any;
  setPatients: (patients: any) => void;
}

const CrudContext = React.createContext<PatientContext>({} as PatientContext);

export default CrudContext;
