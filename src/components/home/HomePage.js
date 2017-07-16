<<<<<<< HEAD
import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as diagnosticcenterActions from '../../actions/diagnosticcenterActions';
import DiagnosticList from './diagnosticlists';


class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
       const { diagnosticcenters } = this.props;
=======
import React from 'react';


class HomePage extends React.Component {
  render() {
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
    return (
      <div >
   
        <p>Patient Care Dashboard</p>

<<<<<<< HEAD
         <div className="bcontainer" >
      

        <DiagnosticList diagnosticcenters={diagnosticcenters} />
      </div>

=======
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
      </div>
    );
  }
}

<<<<<<< HEAD


// export default HomePage;
HomePage.propTypes = {
  diagnosticcenters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Pull in the React Router context so router is available on this.context.router.
HomePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    diagnosticcenters: state.diagnosticcenters
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(diagnosticcenterActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
=======
export default HomePage;
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e
