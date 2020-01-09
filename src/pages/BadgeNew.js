import React from 'react';

import './styles/BadgeNew.css'

import header from '../images/platziconf-logo.svg'

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
    };

    handleChange = e => {

        // const nextForm = this.state.form;
        //
        // nextForm[e.target.name]= e.target.value
        //
        // this.setState({
        //     form: nextForm,
        // })

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e =>{
      e.preventDefault();

      this.setState({loading: true, error: null});

      this.props.history.push('/badges');

      try {
          await api.badges.create(this.state.form);
          this.setState({loading: false});
      } catch (e) {
          this.setState({loading: false, error: e});
      }

    };

    render() {

        if (this.state.loading) {
            return <PageLoading/>
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME' }
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE' }
                                twitter={this.state.form.twitter || 'twitter' }
                                email={this.state.form.email || 'EMAIL' }
                                avatarUrl="https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                                />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
