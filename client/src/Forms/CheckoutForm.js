import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { postOutTrip } from '../actions'

import { basicFormField } from './formFields'

const mapStateToProps = (state) => {
    return {
        loaners: state.requestLoaners.loaners
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onCheckoutFormSubmit: (outTrip, history) => dispatch(postOutTrip(outTrip, history))
    }
}

class CheckoutForm extends Component {

    render(){
        const { loaners, pristine, reset, submitting, handleSubmit, history, onCheckoutFormSubmit } = this.props

        const availLoaners = loaners.filter(loaner => loaner.isOut !== true)

        console.log(availLoaners)

        const loanerOptionEls = availLoaners.map((loaner, i) => {
            return (
                <option key={loaner._id} value={loaner._id}>{loaner.identifiers.stockNum}</option>
            )
        })

        return(
            // loaner obj info to update on submission: isOut -> true
            // trip info: create new trip -> info needed: 
            // tripId: String, this will be `${ro}_${agreementNum}` // AgreementNum: String // ro: String // customer: String,
            // outVars: {outDate: Date, outMiles: Number, outFuel: Number, outDamage: String}
            <form onSubmit={handleSubmit(outTrip => onCheckoutFormSubmit(outTrip, history))}>
                <div>
                    <label>Loaner to Check-Out</label>
                    <div>
                        <Field name="_id" component="select">
                            <option />
                            {loanerOptionEls}
                        </Field>
                    </div>
                </div>
                <Field name="agreementNum" component={basicFormField} type="text" placeholder="Agreement #" label='Rental Agreement Number'/>
                <Field name="ro" component={basicFormField} type="text" placeholder="RO #" label='Repair Order'/>
                <Field name="customer" component={basicFormField} type="text" placeholder="Name" label='Customer Name'/>
                <Field name='outDate' component={basicFormField} type='datetime-local' label='Out Date & Time'/>
                <Field name="outMiles" component={basicFormField} type="number" placeholder="Miles" label='Out Miles'/>
                <div>
                    <label>Out Fuel</label>
                    <div>
                        <label htmlFor="fuelLevel">E</label>
                        <Field name="outFuel" component="input" type="range" list="tickmarks" id='fuelLevel'/>
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
                {/* may want to make a class out of this in order to enlarge the text area */}
                <Field name="outDamage" component={basicFormField} type='text' label='Noted Out Damage'/>
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

    if (!values.agreementNum){
        errors.agreementNum = 'You must enter a Rental Agreement Number'
    }
    if (!values._id){
        errors._id = 'A loaner is required'
    }
    if (!values.ro){
        errors.ro = 'The RO number is required'
    }
    if (!values.customer){
        errors.customer = 'The customer name is required'
    }
    if (!values.outDate){
        errors.outDate = 'The customer name is required'
    }
    if (!values.outMiles){
        errors.outMiles = 'The customer name is required'
    }
    if (!values.outFuel){
        errors.outFuel = 'The customer name is required'
    }

    return errors
}

CheckoutForm = connect(mapStateToProps, MapDispatchToProps)(withRouter(CheckoutForm))

export default reduxForm({ form: 'checkoutForm', validate })(CheckoutForm)  // need to add validation