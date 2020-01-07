import React from 'react';

import "./styles/BadgesList.css"

class BadgeList extends React.Component{

    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return(
                            <li key={badge.id}>

                                <div className="BadgesListItem">
                                    <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar"/>
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
