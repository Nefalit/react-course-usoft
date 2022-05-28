import React from 'react'
import './form.css' 

export const FormTitle = ({props="default"}) => {

    return (<h2 className="form_title">{props}</h2> )

}