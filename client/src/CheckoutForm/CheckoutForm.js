import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { postOutTrip } from '../actions'

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
                <h1>checkout form is connected!</h1>
                <div>
                    <label>Loaner to Check-Out</label>
                    <div>
                        <Field name="_id" component="select">
                            <option />
                            {loanerOptionEls}
                        </Field>
                    </div>
                </div>
                <div>
                    <label>Rental Agreement Number</label>
                    <div>
                        <Field name="agreementNum" component="input" type="text" placeholder="Agreement #" />
                    </div>
                </div>
                <div>
                    <label>Repair Order Number</label>
                    <div>
                        <Field name="ro" component="input" type="text" placeholder="RO #" />
                    </div>
                </div>
                <div>
                    <label>Customer Name</label>
                    <div>
                        <Field name="customer" component="input" type="text" placeholder="Name" />
                    </div>
                </div>

                <div>
                    <label>Out Date</label>    
                    <div>
                        <Field name='outDate' component='input' type='datetime-local'/>
                    </div>
                </div> 
                <div>
                    <label>Out Miles</label>
                    <div>
                        <Field name="outMiles" component="input" type="number" placeholder="Miles" />
                    </div>
                </div>
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
                <div>
                    <label>Noted Out Damage</label>
                    <div>
                        <Field name="outDamage" component="textarea" />
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

CheckoutForm = connect(mapStateToProps, MapDispatchToProps)(withRouter(CheckoutForm))

export default reduxForm({ form: 'checkoutForm' })(CheckoutForm)  // need to add validation