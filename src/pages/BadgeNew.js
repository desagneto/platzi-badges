import React from 'react';

import './styles/BadgeNew.css'

import header from '../images/badge-header.svg'

import Navbar from '../components/Navbar'
import Badge from "../components/Badge";

class BadgeNew extends React.Component {

    render() {

        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Des"
                                lastName="AN"
                                avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                                jobTitle="Frontend Engineer"
                                twitter="desagneto23"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;
