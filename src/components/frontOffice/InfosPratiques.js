import React, { Component } from 'react';
import Header from './header/Header';
import infosPratiques from '../../images/decouvrirCentre/infos_pratiques.png';

export default class InfosPratiques extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <>
                <Header contrast="dark"/>
                <section className="infosPratiques">
                    <section className="infosPratiques_topBloc">
                        <div className="infosPratiques_topBloc_nav">
                            <img src={infosPratiques} />
                            <div>
                                <h1>Infos pratiques</h1>
                            </div>
                        </div>
                    </section>
                    <section className="infosPratiques_middleBloc">
                        <div className="left">
                            <div className="left_1">
                                <h4>Horaires</h4>
                                <span>Fermé actuellement pour travaux.</span>
                                <p>Réouverture en octobre 2020</p>
                            </div>
                            <div className="left_2">

                            </div>
                        </div>
                        <div className="right">

                        </div>
                    </section>
                    <section className="infosPratiques_bottomBloc">
                        <div className="left">

                        </div>
                        <div className="right">

                        </div>
                    </section>
                </section>
            </>
        )
    }
}