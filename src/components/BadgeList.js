import React from 'react';

import "./styles/BadgesList.css"
import {Link} from "react-router-dom";
import Gravatar from "./Gravatar";

class BadgeList extends React.Component{

    render() {

        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>
                        No se encontraron resultados
                    </h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crear new badge
                    </Link>
                </div>
            )
        }

        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return(
                            <li key={badge.id}>

                                <div className="BadgesListItem">
                                    <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar"/>
                                    <div>
                                        <div>{badge.firstName} {badge.lastName}</div>
                                        <div>@{badge.twitter}</div>
                                        <div>{badge.jobTitle}</div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default BadgeList;
