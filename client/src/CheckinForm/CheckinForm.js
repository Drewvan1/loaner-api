import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { postInTrip } from '../actions'

const mapStateToProps = (state) => {
    return {
        loaners: state.requestLoaners.loaners
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onCheckinFormSubmit: (inTrip, history) => dispatch(postInTrip(inTrip, history))
    }
}

class CheckinForm extends Component {

    render(){
        const { loaners, pristine, reset, submitting, handleSubmit, history, onCheckinFormSubmit } = this.props

        const availLoaners = loaners.filter(loaner => loaner.isOut === true)

        const loanerOptionEls = availLoaners.map((loaner, i) => {
            return (
                <option key={loaner._id} value={loaner._id}>{loaner.identifiers.stockNum}</option>
            )
        })

        return(
            <form onSubmit={handleSubmit(inTrip => onCheckinFormSubmit(inTrip, history))}>
                <h1>checkin form is connected!</h1>
                <div>
                    <label>Loaner to Check-In</label>
                    <div>
                        <Field name="_id" component="select">
                            <option />
                            {loanerOptionEls}
                        </Field>
                    </div>
                </div>
                <div>
                    <label>In Date</label>    
                    <div>
                        <Field name='inDate' component='input' type='datetime-local'/>
                    </div>
                </div> 
                <div>
                    <label>In Miles</label>
                    <div>
                        <Field name="inMiles" component="input" type="number" placeholder="Miles" />
                    </div>
                </div>
                <div>
                    <label>In Fuel</label>
                    <div>
                        <label htmlFor="fuelLevel">E</label>
                        <Field name="inFuel" component="input" type="range" list="tickmarks" id='fuelLevel'/>
                            <datalist id="tickmarks">
                                <option value="100"/>
                                <option value="75"/>
                                <option value="50"/>
                                <option value="25"/>
                                <option value="0"/>
                            </datalist>
                        <label htmlFor="fuelLevel">F</label>
                    </div>
                </div>
                <div>
                    <label>Noted In Damage</label>
                    <div>
                        <Field name="inDamage" component="textarea" />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form> 
        )
    }
}

// function validate(values){
//     const errors = {}

//     if (!values.fullName){
//         errors.fullName = 'The Client Name is required'
//     }
//     if (!values.apptTime){
//         errors.apptTime = 'The Appointment Date is required'
//     }

//     return errors
// }

CheckinForm = connect(mapStateToProps, MapDispatchToProps)(withRouter(CheckinForm))

export default reduxForm({ form: 'checkinForm' })(CheckinForm)  // need to add validation