import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LabtestList = ({ labtests }) => {
    return (

        <div>
            {labtests.map(labtest =>

<<<<<<< HEAD
                <div className="belement" key={labtest.id}>
                   <Link className="belementn" to={'/labtestsf/' + labtest.id}>{labtest.id} - {labtest.name}</Link>
=======
                <div className="belement" key={labtest._id}>
                    <Link className="belementn" to={'/labtestsf/' + labtest._id}>{labtest.dcenter}  test order from  {labtest.name}</Link>
>>>>>>> 1a1d9ede9cbb09034eaff46f55fa1971e529384e

                </div>

            )}
        </div>

    );
};

LabtestList.propTypes = {
    labtests: PropTypes.array.isRequired
};

export default LabtestList;