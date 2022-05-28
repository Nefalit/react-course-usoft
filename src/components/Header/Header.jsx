import React from 'react'
import './header.css' 

export const Header = ({props="default"}) => {

    return (<p className="header_title">{props}</p>)

}