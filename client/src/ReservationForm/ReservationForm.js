import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

import { postReservation } from '../actions'

const mapStateToProps = (state) => {
    return {
        // user: state.requestUser.user,
        // userIsPending: state.requestUser.userIsPending,
        // userError: state.requestUser.userError



    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onResFormSubmit: reservation => dispatch(postReservation(reservation))
    }
}

class ReservationForm extends Component {

    render(){

        // may need error, touched out of this.props as well
        // can do field level validation per https://redux-form.com/8.2.2/docs/api/field.md/
        const { handleSubmit, pristine, reset, submitting, onResFormSubmit } = this.props

        return(
            // hundle submit sends an object with the values contained within it
            <form onSubmit={handleSubmit(reservation => onResFormSubmit(reservation))}>
                <div>
                     <label>Client Name</label>
                    <div>
                        <Field name="fullName" component="input" type="text" placeholder="Who is the reservation for?" />
                    </div>
                    <div>
                        {/* need to accomplish some error handling / validation here */}
                        {/* {touched && error} */}
                    </div>
                </div>   
                <div>
                    <label>Appointment Date</label>    
                    <div>
                        <Field name='apptTime' component='input' type='datetime-local'/>
                    </div>
                </div> 
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
        errors.fullName = 'The Client Name is required'
    }
    if (!values.apptTime){
        errors.apptTime = 'The Appointment Date is required'
    }

    return errors
}

ReservationForm = connect(mapStateToProps, MapDispatchToProps)(ReservationForm)

export default reduxForm({ form: 'reservationForm', validate: validate})(ReservationForm)