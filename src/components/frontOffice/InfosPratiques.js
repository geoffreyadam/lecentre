import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import fondInfos from '../../images/infosPratiques/fond_infos.png';
import plan from '../../images/infosPratiques/plan.png';
import fondNewsletters from '../../images/infosPratiques/fond_newsletters.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from 'axios';

export default class InfosPratiques extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contact1: undefined,
            contact2: undefined,
            contact3: undefined,
            contact4: undefined,
            email: undefined,
            infos: [],
            tarifs: []
        }
    }
    
    componentDidMount(){
        axios
        .get('https://radiant-falls-78689.herokuapp.com/api/infos/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb')
        .then(response => (
            this.setState({
                infos: response.data
            })
        ))
        .catch((error) => {
          console.log(error)
        })
        axios
        .get('https://radiant-falls-78689.herokuapp.com/api/tarifs/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb')
        .then(response => (
            this.setState({
                tarifs: response.data
            })
        ))
        .catch((error) => {
          console.log(error)
        })
    }

    _sendContact(e){
        const{contact1,contact2,contact3,contact4} = this.state;
        e.preventDefault();
        const data = {contact1, contact2, contact3, contact4};
        axios
        .post('https://radiant-falls-78689.herokuapp.com/api/addContact/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb', {
            data
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    _sendNewsletter(e){
        const{email} = this.state;
        e.preventDefault();
        // const data = {email};
        axios
        .post('https://radiant-falls-78689.herokuapp.com/api/addNewsletter/4v8e61bfdqs4789fgf32e38vcxq2ezafbv7489d123fvdeza45b3vfdgvfdfdzafbbb', {
            email
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    render(){
        const {infos, tarifs} = this.state;
        return(
            <>
                {infos.length > 0 &&
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
                                        {infos[0]["ouvert"] === "Fermé" ?
                                            <span>Fermé actuellement pour travaux.</span>
                                            :
                                            <>
                                                <p>{infos[0]["horaires_ouvert"]}</p>
                                                <p>{infos[0]["horaires_fermé"]}</p>
                                                <p>{infos[0]["horaires_plus"]}</p>
                                            </>
                                        }
                                        {infos[0]["ouvert"] === "Fermé" ?
                                            <>
                                                {infos[0]["reouverture"] != "" &&
                                                    <p>{infos[0]["reouverture"]}</p>                      
                                                }
                                            </>
                                            :
                                            <>

                                            </>
                                        }
                                    </div>
                                    <div className="left_2">
                                        <h4 className="light">Tarifs & billetterie</h4>
                                        {tarifs &&
                                        <>
                                            {tarifs.map((tarif) =>{
                                                return(
                                                    <>
                                                        <p className="light">Tarif {tarif.nom} : {tarif.prix}€</p>
                                                    </>
                                                )
                                            })}
                                        </>
                                        }

                                        <p className="light">Entrée gratuite tous les premiers dimanches du mois.</p>
                                        <div className="button">
                                            <Link to="/billetterie" className="mainButton">Acheter un billet</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <h3>Accès</h3>
                                    <b>Bordeaux Bassins à flot - Bacalan</b>
                                    <p>284 Boulevard Alfred Daney, 33300 Bordeaux</p>
                                    <br/>
                                    <b>Transports</b>
                                    <p>{infos[0]["acces_tram"]}</p>
                                    <p>{infos[0]["acces_bus"]}</p>
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
                                    <form onSubmit={(e) => this._sendContact(e)}>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" value={this.state.contact1} required onChange={(e) => this.setState({contact1: e.target.value})}/>
                                        </div>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" value={this.state.contact2} required onChange={(e) => this.setState({contact2: e.target.value})}/>
                                        </div>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" value={this.state.contact3} required onChange={(e) => this.setState({contact3: e.target.value})}/>
                                        </div>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" value={this.state.contact4} required onChange={(e) => this.setState({contact4: e.target.value})}/>
                                        </div>
                                        <div className="button">
                                            <button type="submit" className="mainButton">Envoyer</button>
                                        </div>
                                    </form>
                                </div>
                                <div style={{backgroundImage: `url(${fondNewsletters})`}} className="right">
                                    <h4 className="light">Newsletters</h4>
                                    <p className="light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam, sed diam voluptua. At vero eos et accusam.</p>
                                    <form onSubmit={(e) => this._sendNewsletter(e)}>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <div>
                                                <input type="text" name="Nom" value={this.state.email} required onChange={(e) => this.setState({email: e.target.value})}/>
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
                        <Footer/>
                    </>
                }
            </>
        )
    }
}