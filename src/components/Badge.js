import React from 'react';

import "./styles/Badge.css"

import logoBadge from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {

        // this.props;

        const firstName = "Agneto";
        const lastName = "Dev";

        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logoBadge} alt="Logo"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
                    <h1>{this.props.firstName} {this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #agnetoPractice
                </div>
            </div>
        )
    }
}

export default Badge;
