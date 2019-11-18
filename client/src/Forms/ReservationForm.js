import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { postReservation } from '../actions'

import { basicFormField } from './formFields'

import './reservationForm.css'


const mapStateToProps = (state) => {
    return {
        // user: state.requestUser.user,
        // userIsPending: state.requestUser.userIsPending,
        // userError: state.requestUser.userError
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onResFormSubmit: (reservation, history) => dispatch(postReservation(reservation, history))
    }
}

class ReservationForm extends Component {

    render(){

        // may need error, touched out of this.props as well
        // can do field level validation per https://redux-form.com/8.2.2/docs/api/field.md/
        const { handleSubmit, pristine, reset, submitting, onResFormSubmit, history } = this.props

        return(
            // hundle submit sends an object with the values contained within it
            <form onSubmit={handleSubmit(reservation => onResFormSubmit(reservation, history))}>
                {/* using unique syntax for basicFormField so can get access to meta object which allows me to present error validation */}
                <Field name="fullName" component={basicFormField} type="text" placeholder="Who is the reservation for?" label='Customer Name'/>
                <Field name='apptTime' component={basicFormField} type='datetime-local' label='Appointment Date & Time'/>
                <div>
                    <label>Loaner Model Preferred</label>
                    <div>
                        <Field name="reqModel" component="select">
                            <option />
                            <option value="Odyssey">Odyssey</option>
                            <option value="Pilot">Pilot</option>
                            <option value="CR-V">CR-V</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}

function validate(values){
    const errors = {}

    if (!values.fullName){
        errors.fullName = 'The Client Name is Required'
    }
    if (!values.apptTime){
        errors.apptTime = 'The Appointment Date and Time is Required'
    }

    return errors
}

ReservationForm = connect(mapStateToProps, MapDispatchToProps)(withRouter(ReservationForm))

export default reduxForm({ form: 'reservationForm', validate: validate})(ReservationForm)