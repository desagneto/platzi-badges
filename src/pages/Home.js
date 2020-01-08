import React from 'react';

import confLogo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import {Link} from "react-router-dom";

class Home extends React.Component{

    render() {

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">

                        <div className="container">

                            <div className="row">

                                <div className="col-md-4">

                                    <img className="Badges_conf-logo" src={confLogo} alt="logo"/>

                                    <Link to="/badges" className="btn btn-primary">Start</Link>

                                </div>

                                <div className="col-md-8">

                                    <img className="Badges_conf-logo" src={astronauts} alt="logo"/>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Home;
