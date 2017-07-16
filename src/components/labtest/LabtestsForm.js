import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as labtestActions from '../../actions/labtestActions';
<<<<<<< HEAD
import LabtestEnter from './LabtestEnter';
import toastr from 'toastr';
 // locations: props.diagnosticcenters
=======

import LabtestEnter from './LabtestEnter';
import toastr from 'toastr';

>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
export class LabtestsForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            labtest: props.labtest,
            errors: {},
            saving: false,
            deleteEnable: props.deleteEnable,
<<<<<<< HEAD
            // locations: [{ value: 'vert',label: 'Vert Lab' },
            // { value: 'ther', label: 'Ther Lab' }, { value: 'medi', label: 'Medi lab' }],
            // locations:locations,
            
=======
            locations: [{ value: "vert", text: "Vert Lab" },
            { value: "ther", text: "Ther Lab" }, { value: "medi", text: "Medi lab" }],

>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
        };

        this.updateLabtestState = this.updateLabtestState.bind(this);
        this.saveLabtest = this.saveLabtest.bind(this);
        this.deleteLabtest = this.deleteLabtest.bind(this);
        this.backBoards = this.backBoards.bind(this);

        this.updateTestChange = this.updateTestChange.bind(this);

    }

    updateLabtestState(event) {
        const field = event.target.name;
        let labtest = this.state.labtest;
        labtest[field] = event.target.value;
        return this.setState({ labtest: labtest });
    }

    updateTestChange(value) {debugger;

        let labtest = this.state.labtest;
        let options = value;
        let tests = [];
        let l = options.length
            for (let i = 0; i < l; i++) {
                if (options[i].value) {
<<<<<<< HEAD
                 //tests.push(options[i].value);
                  tests.push(options[i]);
=======
                tests.push(options[i].value);
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
                }
            }
        labtest["tests"] = tests;
        return this.setState({ labtest: labtest });
    }




    labtestFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.labtest.name.length < 3) {
            errors.name = 'Name be at least 3 characters.';
            formIsValid = false;
            this.setState({ errors: errors });
            return formIsValid;
        }
        if (this.state.labtest.name.length > 50) {
            errors.name = 'Name not be more than 50 characters.';
            formIsValid = false;
            this.setState({ errors: errors });
            return formIsValid;
        }


        this.setState({ errors: errors });
        return formIsValid;
    }


    redirect() {
        this.setState({ saving: false });

        toastr.success('Labtest changes saved');
        this.context.router.push('/labtests');
    }

    backBoards() {
        this.context.router.push('/labtests');
    }

    saveLabtest(event) {
        event.preventDefault();

        if (!this.labtestFormIsValid()) {
            return;
        }

        this.setState({ saving: true });


        this.props.actions.saveLabtest(this.state.labtest)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({ saving: false });
<<<<<<< HEAD
                this.redirect();
=======

>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e

            });
    }


    deleteLabtest(event) {
        event.preventDefault();
<<<<<<< HEAD
        if ((this.state.labtest.id).length == 0) {
            return;
        }
        this.props.actions.deleteLabtest(this.state.labtest.id)
=======
        if ((this.state.labtest._id).length == 0) {
            return;
        }
        this.props.actions.deleteLabtest(this.state.labtest._id)
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
            });
    }




    render() {

        return (
            <div className="bcontainer">
<<<<<<< HEAD
                <div className="form-header paraheader-labtest"><label> {this.state.labtest.id ? (this.state.labtest.dcenter + "  test order from " + this.state.labtest.name) : "New Order"} </label></div>
=======
                <div className="form-header paraheader-labtest"><label> {this.state.labtest._id ? (this.state.labtest.dcenter + "  test order from " + this.state.labtest.name) : "New Order"} </label></div>
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
                <div>
                    <input type="button" value="Back" className="btn btn-primary btn-xs  bbtn" onClick={this.backBoards} />

                </div>
                <LabtestEnter
                    onChange={this.updateLabtestState}
                    labtest={this.state.labtest}
                    errors={this.state.errors}
                    onSave={this.saveLabtest}
                    saving={this.state.saving}
                    deleteEnable={this.state.deleteEnable}
                    onDelete={this.deleteLabtest}
<<<<<<< HEAD
                    allLocation={this.props.locations}
=======
                    allLocation={this.state.locations}
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
                    onTestChange={this.updateTestChange}

                />


            </div>
        );
    }
}

LabtestsForm.propTypes = {
    labtest: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    deleteEnable: PropTypes.bool.isRequired
};

function getLabtestById(labtests, id) {
<<<<<<< HEAD
    const labtest = labtests.filter(labtest => labtest.id == id);
=======
    const labtest = labtests.filter(labtest => labtest._id == id);
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
    if (labtest) return labtest[0]; //since filter returns an array, have to grab the first.
    return null;
}
//Pull in the React Router context so router is available on this.context.router.
LabtestsForm.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
<<<<<<< HEAD
    debugger;
    let labtestId = ownProps.params.id;
    let dcode = ownProps.params.dcode;
    let labtest = {
        id: '', name: '', age: '', gender: 'Male', mobile: '', address1: '', address2: '', address3: '',
        email: '', dcenter:'', tests: []
    };
    let locations;
    let deleteEnable = true;

     if (dcode) {
       
       labtest = {
        id: '', name: '', age: '', gender: 'Male', mobile: '', address1: '', address2: '', address3: '',
        email: '', dcenter: dcode, tests: []
    };

        deleteEnable = false;
    }
    
=======
    const labtestId = ownProps.params.id;
    let labtest = {
        _id: '', name: '', age: '', gender: 'Male', mobile: '', address1: '', address2: '', address3: '',
        email: '', dcenter: '', tests: []
    };
    let deleteEnable = true;
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
    if (labtestId && state.labtests.length > 0) {
        labtest = getLabtestById(state.labtests, labtestId);

        deleteEnable = false;
    }
    return {
        labtest: labtest,
<<<<<<< HEAD
        locations:locationMap(state.diagnosticcenters),
=======

>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
        deleteEnable: deleteEnable
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(labtestActions, dispatch)
    };
}
<<<<<<< HEAD
function locationMap(dcenters)
{

    // { value: 'vert',label: 'Vert Lab' }
    return dcenters.map(center => {
        return {
            value:center.code,
            label:center.name
        }
    });

}
=======

>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
export default connect(mapStateToProps, mapDispatchToProps)(LabtestsForm);