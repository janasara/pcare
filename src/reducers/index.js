// Set up your root reducer here...
 import { combineReducers } from 'redux';
 
 import labtests from './labtestReducer';
 
<<<<<<< HEAD
 import diagnosticcenters from './diagnosticcenterReducer';

 import homeremedies from './homeremediesReducer';

 const rootReducer=combineReducers({
     labtests,
    diagnosticcenters,
    homeremedies
=======
 
 const rootReducer=combineReducers({
     labtests
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
 });

 export default rootReducer;