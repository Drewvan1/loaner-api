import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { postInTrip } from '../actions'

import { basicFormField } from './formFields'

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
                <div>
                    <label>Loaner to Check-In</label>
                    <div>
                        <Field name="_id" component="select">
                            <option />
                            {loanerOptionEls}
                        </Field>
                    </div>
                </div>
                <Field name='inDate' component={basicFormField} type='datetime-local' label='In Date & Time'/>
                <Field name="inMiles" component={basicFormField} type="number" placeholder="Miles" label='In Miles'/>
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
                <Field name="inDamage" component={basicFormField} type='text' label='Noted In Damage'/>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form> 
        )
    }
}

function validate(values){
    const errors = {}

    if (!values._id){
        errors._id = 'You must choose a loaner'
    }
    if (!values.inDate){
        errors.inDate = 'A Date & Time is required'
    }
    if (!values.inMiles){
        errors.inMiles = 'Miles are required'
    }
    if (!values.inDamage){
        errors.inDamage = 'Damage field is required. If no damage noted enter "na"'
    }

    return errors
}

CheckinForm = connect(mapStateToProps, MapDispatchToProps)(withRouter(CheckinForm))

export default reduxForm({ form: 'checkinForm', validate })(CheckinForm)