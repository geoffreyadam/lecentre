import React, { Component } from 'react';
import axios from 'axios';
import Conference from "./types/Conference";
import Exposition from "./types/Exposition";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Venir extends Component{
    constructor(props) {
        super(props);
        this.state = {
            evenements: []
        }
    }

    componentDidMount(){
        let allEvenements = [];
        axios
        .get('https://radiant-falls-78689.herokuapp.com/api/evenements/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb')
        .then(response => (
            response.data.forEach((evenement) => {
                if(evenement.fini != "Terminé"){
                    allEvenements.push(evenement)
                }
            }),
            this.setState({
                evenements: allEvenements
            })
        ))
        .catch((error) => {
          console.log(error)
        })
    }
    
    render(){
        const {evenements} = this.state;
        return(
            <>
            <section className="programme_evenements">
                <div>
                    <h2 className="light">Autour de l'exposition</h2>
                    {evenements.length > 0 &&
                        <>
                            {evenements.map((evenement, i) => {
                                if(evenement.type != "Exposition"){
                                    return(
                                        evenement.type === "Exposition" ?
                                        <Exposition data={evenement}/>
                                        :
                                        <Conference data={evenement}/>
                                    ) 
                                }
                            })}
                        </>
                    }
                </div>
                <div>
                    <h2 className="light">Expositions à venir</h2>
                    {evenements.length > 0 &&
                        <>
                            {evenements.map((evenement, i) => {
                                if(evenement.type === "Exposition"){
                                    return(
                                        evenement.type === "Exposition" ?
                                        <Exposition data={evenement}/>
                                        :
                                        <Conference data={evenement}/>
                                    ) 
                                }
                            })}
                        </>
                    }
                </div>
            </section>
            </>
        )
    }
}