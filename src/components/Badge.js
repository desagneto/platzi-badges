import React from 'react';

import logoBadge from '../images/badge-header.svg'

class Badge extends React.Component {

    render() {
        return(
            <div>
                <div>
                    <img src={logoBadge} alt="Logo"/>
                </div>
                <div>
                    <img src="" alt="Avatar"/>
                    <h1>Agneto</h1>
                </div>
                <div>
                    <p>Frontend engineer</p>
                    <p>@desagneto</p>
                </div>
                <div>
                    #agnetoPractice
                </div>
            </div>
        )
    }

}

export default Badge;
