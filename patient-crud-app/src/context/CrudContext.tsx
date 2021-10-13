import React from "react";

interface CrudContext {
  patients: any;
  setPatients: (patients: any) => void;
}

const CrudContext = React.createContext<CrudContext>({} as CrudContext);

export default CrudContext;
