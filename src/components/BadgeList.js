import React from 'react';

import "./styles/BadgesList.css"
import {Link} from "react-router-dom";
import Gravatar from "./Gravatar";

function userSarchBadges(badges) {

    const [query, setQuery] = React.useState('');

    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {

        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase());
        });

        setFilteredBadges(result);

    }, [badges, query]);

    return {query, setQuery, filteredBadges};
}

function BadgeList(props){

    const badges = props.badges;

    const {query, setQuery, filteredBadges} = userSarchBadges(badges);

    if(filteredBadges.length === 0){
        return (
            <div>
                <div className="form-group">
                    <label>Filter</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
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
            <div className="form-group">
                <label>Filter</label>
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map(badge => {
                    return(
                        <li key={badge.id}>
                            <Link className="text-reset" to={`/badges/${badge.id}`}>
                                <div className="BadgesListItem">
                                    <Gravatar className="BadgesListItem__avatar" email={badge.email} alt="Avatar"/>
                                    <div>
                                        <div>{badge.firstName} {badge.lastName}</div>
                                        <div>@{badge.twitter}</div>
                                        <div>{badge.jobTitle}</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BadgeList;
