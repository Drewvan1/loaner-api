import React from 'react'

export const basicFormField = ({ input, label, type, placeholder, meta}) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={placeholder} type={type}/>
            </div>
            <div>
                {meta.touched && ((meta.error && <span>{meta.error}</span>))}
            </div>
        </div>
    )
}

export const customSelectField = ({ input, label, meta, loaners }) => {
    
    const loanerOptionEls = loaners.map((loaner, i) => {
        const loanerJSON = JSON.stringify(loaner)
        
        return (
            <option key={loaner._id} value={loanerJSON}>{`${loaner.identifiers.stockNum} - ${loaner.identifiers.model}`}</option>
        )
    })
    
    return (
        <div>
            <label>{label}</label>
            <div>
                <select {...input}>
                    <option></option>
                    {loanerOptionEls}
                </select>
            </div>
            <div>
                {meta.touched && ((meta.error && <span>{meta.error}</span>))}
            </div>
        </div>
    )
}