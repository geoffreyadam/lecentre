import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import 'moment/locale/fr';
import fondBilletterie from '../../images/billetterie/fond_billetterie.png';
import fondRecap from '../../images/billetterie/fond_recap.png';
import {ReactComponent as Visa} from '../../images/icons/visa.svg'
import {ReactComponent as Mastercard} from '../../images/icons/mastercard.svg'
import {ReactComponent as Paypal} from '../../images/icons/paypal.svg'
import {ReactComponent as Check} from '../../images/icons/check.svg'

moment.locale('fr');

export default class Billetterie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            finalPage: false,
            infos: [],
            tarifs: [],
            date: undefined
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
        const {allTarifs, tarifs} = this.state
        let treated = false;
        tarifs.forEach((currentTarif) => {
            if(currentTarif.nom === tarif.nom){
                let price = tarif.prix.replace(",", '.')
                let totalPrice = price * e.target.value;
                currentTarif["total"] = e.target.value
                currentTarif["totalPrice"] = totalPrice
                this.setState({
                    tarifs: tarifs
                })
            }
        })
    }

    _changePaiement(newPaiement){
        this.setState({
            paiement: newPaiement
        })
    }
    render(){
        const {image, currentPage, paiement, infos, tarifs, date} = this.state;
        let basketTotal = 0;
        tarifs.forEach((singleTarif) =>{
            if(singleTarif.totalPrice){
                basketTotal += singleTarif.totalPrice

            }
        })
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
                                        {infos.length > 0 &&
                                            <>
                                                <p>{infos[0]["horaires_ouvert"]}</p>
                                                <p>{infos[0]["horaires_fermé"]}</p>
                                            </>
                                        }
                                    </div>
                                    <div className="tarifs">
                                        <div className="tarifsHead">
                                            <p className="text_bold">Tarifs</p>
                                            <p className="text_bold">Montant</p>
                                            <p className="text_bold">Nombre de billets</p>
                                        </div>
                                        <div className="tarifsBody">
                                            {tarifs.map((tarif, i) => {
                                                return (
                                                    <div className="singleTarif">
                                                        <p>
                                                            <p>{tarif.nom}</p>
                                                            <div className="infoTarif">
                                                                {tarif.info1 &&
                                                                    <p>- {tarif.info1}</p>
                                                                }
                                                                {tarif.info2 &&
                                                                    <p>- {tarif.info2}</p>
                                                                }
                                                                {tarif.info3 &&
                                                                    <p>- {tarif.info3}</p>
                                                                }
                                                                {tarif.info4 &&
                                                                    <p>- {tarif.info4}</p>
                                                                }
                                                                {tarif.info5 &&
                                                                    <p>- {tarif.info5}</p>
                                                                }
                                                            </div>
                                                        </p>
                                                        <p>{tarif.prix}€</p>
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
                                                <div className="datePicker">
                                                    <p className="text_bold">Choississez la date qui vous convient parmi celles disponibles :</p>
                                                    <DayPickerInput onDayChange={(day) => this.setState({date: moment(Date.parse(day)).format("LL")})} />
                                                </div>
                                            <button className="mainButton" onClick={() => this._changePage()}>Acheter un billet</button>
                                    </div>
                                </>
                            }
                            {currentPage === 2 &&
                                <>
                                    <form>
                                        <h4>Vos informations</h4>
                                        <div>
                                            <label for="Prenom">Prénom</label>
                                            <input type="text" name="Prenom" required/>
                                        </div>
                                        <div>
                                            <label for="Nom">Nom</label>
                                            <input type="text" name="Nom" required/>
                                        </div>
                                        <div>
                                            <label for="Email">Adresse e-mail</label>
                                            <input type="text" name="Email" required/>
                                        </div>
                                        <div>
                                            <label for="emailconfirm">Confirmer l'adresse e-mail</label>
                                            <input type="text" name="emailconfirm" required/>
                                        </div>
                                    </form>
                                    <form>
                                        <h4>Adresse de facturation</h4>
                                        <div>
                                            <label for="Adresse">Adresse</label>
                                            <input type="text" name="Adresse" required/>
                                        </div>
                                        <div>
                                            <label for="Postal">Code Postal</label>
                                            <input type="text" name="Postal" required/>
                                        </div>
                                        <div>
                                            <label for="Ville">Ville</label>
                                            <input type="text" name="Ville" required/>
                                        </div>
                                        <div>
                                            <label for="Pays">Pays</label>
                                            <input type="text" name="Pays" required/>
                                        </div>
                                        <div className="button">
                                            <button className="mainButton" onClick={() => this._changePage()}>Poursuivre l'achat</button>
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
                                            <label for="dont">Numéro de carte bancaire</label>
                                            <input type="text" name="dont" required/>
                                        </div>
                                        <div>
                                            <label for="dont">Titulaire de la carte</label>
                                            <input type="text" name="dont" required/>
                                        </div>
                                        <div className="inputDate">
                                            <div>
                                                <label for="dont">Date d'expiration</label>
                                                <input type="number" name="dont" required/>
                                            </div>
                                            <div>
                                                <label for="dont">CVV</label>
                                                <input type="number" name="dont" required/>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <button className="mainButton" onClick={() => this._changePage()}>Finaliser l'achat</button>
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
                                {date &&
                                    <p className="text_bold">{date}</p>
                                }
                                <br/>
                                <p>Exposition : Digital Abysses</p>
                                <p>Le Centre - Base sous-marine</p>
                                <br/>
                                {infos.length > 0 &&
                                    <>
                                        <p>{infos[0]["horaires_ouvert"]}</p>
                                        <p>{infos[0]["horaires_plus"]}</p>
                                    </>
                                }
                            </div>
                            <div className="right_2" style={{backgroundImage: `url(${fondRecap})`}}>
                                <h3 className="light">Récapitulatif</h3>
                                <div className="recap">
                                    {tarifs.map((tarif, i) => {
                                        if(tarif.total > 0){
                                            return(
                                                <div className="singleRecap">
                                                    <p className="light">Digital Abysses - {tarif.total} {tarif.total > 1 ? "billets" : "billet"} tarif {tarif.nom}</p>
                                                    <p className="light">Prix: {tarif.totalPrice}€</p>
                                                </div>
                                            )
                                        }
                                    })}
                                    {basketTotal > 0 &&
                                        <div className="total">
                                            <span className="text_bold light">Montant total:</span>
                                            <span className="text_bold light">{basketTotal}€</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <Footer/>
            </>
        )
    }
}