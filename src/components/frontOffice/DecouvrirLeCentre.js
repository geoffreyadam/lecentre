import React, { Component } from 'react';
import Header from './header/Header';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class DecouvrirLeCentre extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <>
                <Header contrast="dark" />
            </>
        )
    }
}