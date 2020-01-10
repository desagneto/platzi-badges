import React from 'react';
import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import {Link} from "react-router-dom";

function BadgeDetails(props) {

    const badge = props;

    return(
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="logo"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Badge
                            firstName={badge.firstName || 'FIRST_NAME'}
                            lastName={badge.lastName || 'LAST_NAME' }
                            jobTitle={badge.jobTitle || 'JOB_TITLE' }
                            twitter={badge.twitter || 'twitter' }
                            email={badge.email || 'EMAIL' }
                        />
                    </div>
                    <div className="col-md-6">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary" to={`/badges/${badge.id}/edit`}> Editar </Link>
                            </div>
                            <div>
                                <button className="btn btn-danger"> Eliminar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default BadgeDetails;
