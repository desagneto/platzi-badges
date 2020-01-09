import React from 'react';

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from '../api'
import Badge from "../components/Badge";
import {Link} from "react-router-dom";

class BadgeDetails extends React.Component{

    state = {
      loading: true,
      error: null,
      data: undefined
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {

        if (this.state.loading) {
            return <PageLoading/>
        }

        if(this.state.error){
            return(
                <PageError error={this.state.error} />
            )
        }

        const badge = this.state.data;

        return (
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
                            <div className="btn btn-primary">
                                <Link className="text-reset" to={`/badges/${badge.id}/edit`}> Editar </Link>
                            </div>
                            <div className="btn btn-danger">
                                <Link className="text-reset" to={`/badges/${badge.id}/edit`}> Eliminar </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeDetails;
