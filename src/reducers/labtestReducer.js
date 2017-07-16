import ActionTypes from '../constants/actionTypes';

<<<<<<< HEAD
export default function labtestReducer(state = [], action) {
    //debugger;
=======
export default function labtestReducer(state = [], action) {debugger;
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
    switch (action.type) {
        case ActionTypes.LOAD_LABTESTS_SUCCESS:
            return action.labtests;

<<<<<<< HEAD
    // case ActionTypes.LOAD_DIAGNOSTICCENTER_SUCCESS:
    //         return action.diagnosticcenters;

=======
   
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
        case ActionTypes.CREATE_LABTESTS_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.labtest)
            ];

        case ActionTypes.UPDATE_LABTESTS_SUCCESS:
            return [
<<<<<<< HEAD
                 Object.assign({}, action.labtest),...state.filter(labtest => labtest.id !== action.labtest.id)
=======
                 Object.assign({}, action.labtest),...state.filter(labtest => labtest._id !== action.labtest._id)
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
               
            ];
        case ActionTypes.DELETE_LABTESTS_SUCCESS:

            return [
<<<<<<< HEAD
                ...state.filter(labtest => labtest.id !== action.labtestId)
=======
                ...state.filter(labtest => labtest._id !== action.labtestId)
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
            ];  
    


        default:
            return state;
    }

}