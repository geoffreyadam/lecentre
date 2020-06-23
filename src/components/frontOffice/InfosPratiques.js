import React, { Component } from 'react';
import Header from './header/Header';
import fondInfos from '../../images/infosPratiques/fond_infos.png';
import plan from '../../images/infosPratiques/plan.png';
import fondNewsletters from '../../images/infosPratiques/fond_newsletters.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
                            <img src={fondInfos} />
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
                                <h4 className="light">Tarifs & billetterie</h4>
                                <p className="light">Plein tarif : 5€</p>
                                <p className="light">Tarif réduit : 3€</p>
                                <p className="light">Entrée gratuite tous les premiers dimanches du mois.</p>
                                <div className="button">
                                    <Link className="mainButton">Acheter un billet</Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h3>Accès</h3>
                            <b>Bordeaux Bassins à flot - Bacalan</b>
                            <p>284 Boulevard Alfred Daney, 33300 Bordeaux</p>
                            <br/>
                            <b>Transports</b>
                            <p>Tram B: Cité du Vin</p>
                            <p>Bus: Lignes 32, 42, 63, 72, 80, 82, 92 arrêt</p>
                            <br/>
                            <p>Parking en face de la Base sous-marine</p>
                            <div className="plan">
                                <img src={plan}/>
                            </div>
                        </div>
                    </section>
                    <section className="infosPratiques_bottomBloc">
                        <div className="left">
                            <h4>Contacts</h4>
                            <form>
                                <div>
                                    <label for="Nom">Nom</label>
                                    <input type="text" name="Nom" required/>
                                </div>
                                <div>
                                    <label for="Nom">Nom</label>
                                    <input type="text" name="Nom" required/>
                                </div>
                                <div>
                                    <label for="Nom">Nom</label>
                                    <input type="text" name="Nom" required/>
                                </div>
                                <div>
                                    <label for="Nom">Nom</label>
                                    <input type="text" name="Nom" required/>
                                </div>
                                <div className="button">
                                    <button className="mainButton">Acheter un billet</button>
                                </div>
                            </form>
                        </div>
                        <div style={{backgroundImage: `url(${fondNewsletters})`}} className="right">
                            <h4 className="light">Newsletters</h4>
                            <p className="light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, sed diam voluptua. At vero eos et accusam.</p>
                            <form>
                                <div>
                                    <label for="Nom">Nom</label>
                                    <div>
                                        <input type="text" name="Nom" required/>
                                        <button className="mainButton">Envoyer</button>
                                    </div>
                                </div>
                            </form>
                            <h4 className="light">Nous suivre</h4>
                            <p className="light">@BasesousmarinedeBordeaux</p>
                            <p className="light">@bsm_bordeaux_officiel</p>
                        </div>
                    </section>
                </section>
            </>
        )
    }
}