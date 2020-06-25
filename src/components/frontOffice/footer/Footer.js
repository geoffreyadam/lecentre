import React, { Component } from 'react';
import {ReactComponent as Facebook} from '../../../images/icons/facebook.svg'
import {ReactComponent as Instagram} from '../../../images/icons/instagram.svg'
import {ReactComponent as Twitter} from '../../../images/icons/twitter.svg'
import logoLeCentre1 from '../../../images/logos/LOGO_BASE_SM-NOIR.png'
import logoLeCentre2 from '../../../images/logos/LOGO_LE_CENTRE-NOIR.png'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import axios from 'axios';

export default class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
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
        const {contrast} = this.props
        const {menu} = this.state
        return(
            <section className="footer">
                <div>
                    <h4>Connaître le Centre</h4>
                    <Link to="/base_3_en_1">La Base 3 en 1</Link>
                    <Link to="/decouvrir_le_centre">Découvrir le Centre</Link>
                    <Link to="/programmation">Programme</Link>
                    <Link to="/infos_pratiques">Infos pratiques</Link>
                    <Link to="/billetterie">Billetterie</Link>
                </div>
                <div>
                    <h4>Le Centre</h4>
                    <p className="underline">base-sous-marine@mairie-bordeaux.fr</p>
                    <br/>
                    <p>Bassins à flot - Bacalan</p>
                    <p>284 Boulevard Alfred Daney</p>
                    <p>33300 Bordeaux</p>
                </div>
                <div>
                    <h4>Suivre l'actualité du Centre</h4>
                    <section className="social_medias">
                        <Facebook/>
                        <Instagram/>
                        <Twitter/>
                        <p>@LeCentreBdx</p>
                    </section>
                    <form onSubmit={(e) => this._sendNewsletter(e)}>
                        <div>
                            <label for="Nom">Adresse e-mail</label>
                            <div>
                                <input type="text" name="Nom" value={this.state.email} required onChange={(e) => this.setState({email: e.target.value})}/>
                                <button className="mainButton">Envoyer</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h4>Les amis du Centre</h4>
                    <a href="#">Espace Presse</a>
                    <a href="#">Partenariat</a>
                    <a href="#">Mentions légales</a>
                    <section>
                        <img src={logoLeCentre1}/>
                        <img src={logoLeCentre2}/>
                    </section>
                </div>
            </section>
        )
    }
}