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

