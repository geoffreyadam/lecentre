import React, { Component } from 'react';
import Header from './header/Header';
import fondBilletterie from '../../images/billetterie/fond_billetterie.png';
import fondRecap from '../../images/billetterie/fond_recap.png';
import {ReactComponent as Visa} from '../../images/icons/visa.svg'
import {ReactComponent as Mastercard} from '../../images/icons/mastercard.svg'
import {ReactComponent as Paypal} from '../../images/icons/paypal.svg'
import {ReactComponent as Check} from '../../images/icons/check.svg'

export default class Billetterie extends Component{
    constructor(props) {
        super(props);
        this.tarifs = [
            {"tarif": "Plein", "infoTarif": "", "Montant": "5,00"},
            {"tarif": "Réduit", "infoTarif": ["jeune 16-25 ans", "demandeur d'emploi", "famille nombreuse"], "Montant": "3,00"}
        ]
        this.state = {
            currentPage: 1,
            finalPage: false,
            pleinAdded: 0,
            reduitAdded: 0
        }
    }

    _changePage(){
        const {currentPage} = this.state;
        if(currentPage + 1 === 5){
            this.setState({
                currentPage: currentPage + 1,
                finalPage: true
            })
        }else{
            this.setState({
                currentPage: currentPage + 1
            })
        }
    }

    _addTicket(e, tarif){
        if(tarif.tarif === "Plein"){
            this.setState({
                pleinAdded: e.target.value
            })
        }else{
            this.setState({
                reduitAdded: e.target.value
            })
        }
    }

    _changePaiement(newPaiement){
        this.setState({
            paiement: newPaiement
        })
    }
    render(){
        const {image, currentPage, pleinAdded, reduitAdded, paiement} = this.state;
        return(
            <>
                <Header contrast="dark"/>
                <section className="billeterie">
                    <section className="billetterie_topBloc">
                        <div className="billetterie_topBloc_nav">
                            <img src={fondBilletterie} />
                            <div>
                                <h1>Billetterie</h1>
                            </div>
                        </div>
                    </section>
                    <section className="billetterie_bottomBloc">
                        <section className="left">
                            <h2>Exposition : Digital Abysses</h2>
                            <div className="currentPage">
                                <span className={currentPage === 1 ? "active" : ""}>Choix des billets</span>
                                <span> > </span>
                                <span className={currentPage === 2 ? "active" : ""}>Coordonnées</span>
                                <span> > </span>
                                <span className={currentPage === 3 ? "active" : ""}>Paiement</span>
                                <span> > </span>
                                <span className={currentPage === 4 ? "active" : ""}>Téléchargement des billets</span>
                            </div>
                            {currentPage === 1 &&
                                <>
                                    <div className="recapInfos">
                                        <p>Billet d'entrée et réservation</p>
                                        <br/>
                                        <p className="text_bold">Horaires d'ouverture :</p>
                                        <p>Ouvert du mardi au vendredi de 13h30 à 19h</p>
                                        <p>Fermeture hebdomadaire le lundi et les jours fériés</p>
                                    </div>
                                    <div className="tarifs">
                                        <div className="tarifsHead">
                                            <p className="text_bold">Tarifs</p>
                                            <p className="text_bold">Montant</p>
                                            <p className="text_bold">Nombre de billets</p>
                                        </div>
                                        <div className="tarifsBody">
                                            {this.tarifs.map((tarif, i) => {
                                                return (
                                                    <div className="singleTarif">
                                                        <p>
                                                            <p>{tarif.tarif}</p>
                                                            {tarif.infoTarif.length > 0 &&
                                                                <div className="infoTarif">
                                                                    {tarif.infoTarif.map((info, i) => {
                                                                        return(
                                                                            <p>- {info}</p>
                                                                        )
                                                                    })}
                                                                </div>
                                                            }
                                                        </p>
                                                        <p>{tarif.Montant}</p>
                                                        <select onChange={(e) => this._addTicket(e, tarif)}>
                                                            {[1,2,3,4,5,6,7,8,9,10,11].map((tarif, i) => {
                                                                return(
                                                                    <option value={i}>{i}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                ) 
                                            })}
                                        </div>
                                    </div>
                                    <div className="dates">
                                            <p className="text_bold">Choississez la date qui vous convient parmi celles disponibles :</p>
                                            <button className="mainButton" onClick={() => this._changePage()}>Acheter un billet</button>
                                    </div>
                                </>
                            }
                            {currentPage === 2 &&
                                <>
                                    <form>
                                        <h4>Vos informations</h4>
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
                                    </form>
                                    <form>
                                        <h4>Adresse de facturation</h4>
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
                                            <button className="mainButton" onClick={() => this._changePage()}>Acheter un billet</button>
                                        </div>
                                    </form>
                                </>
                            }
                            {currentPage === 3 &&
                                <>
                                    <form>
                                        <h4>Choisir un moyen de paiement</h4>
                                        <div className="paiements">
                                            <div onClick={() => this._changePaiement("visa")} className={paiement === "visa" ? "active" : ""}>
                                                <Visa />
                                            </div>
                                            <div onClick={() => this._changePaiement("mastercard")} className={paiement === "mastercard" ? "active" : ""}>
                                                <Mastercard />
                                            </div>
                                            <div onClick={() => this._changePaiement("paypal")} className={paiement === "paypal" ? "active" : ""}>
                                                <Paypal />
                                            </div>
                                        </div>
                                    </form>
                                    <form>
                                        <h4>Carte bancaire</h4>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" required/>
                                        </div>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" required/>
                                        </div>
                                        <div className="inputDate">
                                            <div>
                                                <label for="Nom">Nom</label>
                                                <input type="number" name="Nom" required/>
                                            </div>
                                            <div>
                                                <label for="Nom">Nom</label>
                                                <input type="number" name="Nom" required/>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" required/>
                                        </div>
                                        <div className="button">
                                            <button className="mainButton" onClick={() => this._changePage()}>Acheter un billet</button>
                                        </div>
                                    </form>
                                </>
                            }
                            {currentPage === 4 &&
                                <section className="valide">
                                    <div className="svg_ctn">
                                        <Check />
                                    </div>
                                    <h3>Votre commande N°3288 a été validée !</h3>
                                    <p>Merci pour votre réservation.</p>
                                    <p>Un e-mail vous a été envoyé avec le détail de la commande et vos billets.</p>
                                    <div className="pdf">
                                        <button className="mainButton">Télécharger les billets</button>
                                    </div>
                                </section>
                            }
                        </section>
                        <section className="right">
                            <div className="right_1">
                                <h3>Date de la visite</h3>
                                <p className="text_bold">Mercredi 12 juillet 2020</p>
                                <br/>
                                <p>Exposition : Digital Abysses</p>
                                <p>Le Centre - Base sous-marine</p>
                                <br/>
                                <p>Ouvert du mardi au vendredi de 13h30 à 19h</p>
                                <p>Dernière entrée à 18h30</p>
                            </div>
                            <div className="right_2" style={{backgroundImage: `url(${fondRecap})`}}>
                                <h3 className="light">Récapitulatif</h3>
                                <div className="recap">
                                    {pleinAdded > 0 &&
                                        <div className="singleRecap">
                                            <p className="light">Digital Abysses - {pleinAdded} billet tarif Plein</p>
                                            <p className="light">Prix: {pleinAdded * 5},00€</p>
                                        </div>
                                    }
                                    {reduitAdded > 0 &&
                                        <div className="singleRecap">
                                            <p className="light">Digital Abysses - {reduitAdded} billet tarif Réduit</p>
                                            <p className="light">Prix: {reduitAdded * 3},00€</p>
                                        </div>
                                    }
                                    {pleinAdded + reduitAdded > 0 &&
                                        <div className="total">
                                            <span className="text_bold light">Montant total:</span>
                                            <span className="text_bold light">{(reduitAdded * 3) + (pleinAdded * 5)},00€</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </>
        )
    }
}