import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import HomePage from './components/home/HomePage';
<<<<<<< HEAD
import Homeremedies from './components/homeremedy/Homeremedies'
import Dashboard from './components/dashboard/Dashboard';
import HomeRemedy from './components/homeremedy/HomeRemedy';
import LabtestsPage from './components/labtest/LabtestsPage';
import LabtestsForm from './components/labtest/LabtestsForm';
import PatientDiagnosticReport from './components/patientdiagnosticreport/PatientDiagnosticReport';
import SpecialityAvailability from './components/specialityavailability/SpecialityAvailability';
import UserProfile from './components/userprofile/UserProfile';
=======
import LabtestsPage from './components/labtest/LabtestsPage';
import LabtestsForm from './components/labtest/LabtestsForm';


>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e




export default (
  <Route path="/" component={App}>
<<<<<<< HEAD
    <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="homeremedy" component={Homeremedies} />
     <Route path="patientdiagnosticreport" component={PatientDiagnosticReport} />
     <Route path="specialityavailability" component={SpecialityAvailability} />
     <Route path="userprofile" component={UserProfile} />
     <Route path="labtests" component={LabtestsPage} />
    <Route path="labtestsf" component={LabtestsForm} />
    <Route path="labtestsf/:id" component={LabtestsForm} />
    <Route path="labtestdf/:dcode" component={LabtestsForm} />
=======
    <IndexRoute component={HomePage} />
    <Route path="labtests" component={LabtestsPage} />
    <Route path="labtestsf" component={LabtestsForm} />
    <Route path="labtestsf/:id" component={LabtestsForm} />

>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
  </Route>
);