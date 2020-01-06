import React from 'react';

import "./styles/Badge.css"

import logoBadge from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoBadge} alt="Logo"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon" alt="Avatar"/>
                    <h1>Agneto</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Frontend engineer</h3>
                    <div>@desagneto</div>
                </div>
                <div className="Badge__footer">
                    #agnetoPractice
                </div>
            </div>
        )
    }

}

export default Badge;
