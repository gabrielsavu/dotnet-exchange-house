import React, { Component } from 'react';
import {AuthenticationService} from '../services';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export class UserNew extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <div>
                <h1>Add a new user</h1>
                <Formik
                    initialValues={{
                        email: '',
                        userName: '',
                        password: '',
                        confirmPassword: '',
                        firstName: '',
                        lastName: ''
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('Email is required'),
                        userName: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required'),
                        confirmPassword: Yup.string().required('Confirm password is required'),
                        firstName: Yup.string().required('First name is required'),
                        lastName: Yup.string().required('Last name is required')

                    })}
                    onSubmit={(regRequest, {setStatus, setSubmitting}) => {
                        AuthenticationService.register(regRequest)
                            .then(
                                user => {
                                    const {from} = this.props.location.state || {from: {pathname: "/user/" + user.id}};
                                    this.props.history.push(from);
                                },
                                error => {
                                    setSubmitting(false);
                                    let sb = "";
                                    for (let key in error) {
                                        if (error.hasOwnProperty(key)) {
                                            sb += key + ": " + error[key];
                                        }
                                    }

                                    setStatus(sb);
                                }
                            );
                    }}
                >
                    {({errors, status, touched, isSubmitting}) => (
                        <Form>

                            {status &&
                            <div className={'alert alert-danger'}>{status}</div>
                            }
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text"
                                       className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="userName">Username</label>
                                <Field name="userName" type="text"
                                       className={'form-control' + (errors.userName && touched.userName ? ' is-invalid' : '')}/>
                                <ErrorMessage name="userName" component="div" className="invalid-feedback"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password"
                                       className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                                <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password"
                                       className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <Field name="firstName" type="text"
                                       className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}/>
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <Field name="lastName" type="text"
                                       className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')}/>
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback"/>
                            </div>
                            
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add new user</button>
                                {isSubmitting &&
                                <img
                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                                }
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}
