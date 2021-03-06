import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";
import EditPatient from "../components/EditPatient";
import useStorage from "../hooks/useStorage";
import PatientContext from "../context/PatientContext";

const Router = () => {
  const [patients, setPatients] = useStorage("patients", []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main">
          <PatientContext.Provider value={{ patients, setPatients }}>
            <Switch>
              <Route component={PatientList} path="/" exact={true} />
              <Route component={AddPatient} path="/add" />
              <Route component={EditPatient} path="/edit/:id" />
            </Switch>
          </PatientContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
