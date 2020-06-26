import React, { Component } from 'react';
import image1 from '../../../../images/programmation/venir/autour_de_lexposition_1.png'
import image2 from '../../../../images/programmation/venir/autour_de_lexposition_2.png'
import image3 from '../../../../images/programmation/venir/expositions_a venir_1.png'
import image4 from '../../../../images/programmation/venir/expositions_a venir_2.png'
import image5 from '../../../../images/programmation/venir/expositions_a venir_3.png'
import image6 from '../../../../images/programmation/venir/events_passes_1.png'
import image7 from '../../../../images/programmation/venir/events_passes_2.png'
import image8 from '../../../../images/programmation/venir/events_passes_3.png'
import background from '../../../../images/home/fond_infos_pratiques.png'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Venir extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {data} = this.props;
        return(
            <article className="singleConference exposition">
                <section className="left">
                    {data.fini === "Terminé"&&
                        <div className="ended"></div>
                    }
                    {data.titre === "La pérennité du virtuel, Miguel Chevalier" &&
                        <img src={image1}/>
                    }
                    {data.titre === "Initiation au codage pour enfant (6-12 ans)" &&
                        <img src={image2}/>
                    }
                    {data.titre === "Kodachrome, Harry Gruyaert" &&
                        <img src={image7}/>
                    }
                    {data.titre === "Rivages, Harry Gruyaert" &&
                        <img src={image6}/>
                    }
                    {data.titre === "Légendes Urbaines" &&
                        <img src={image8}/>
                    }
                    {data.titre === "Africa 2020" &&
                        <img src={image3}/>
                    }
                    {data.titre === "Bienvenue Bordeaux 2021" &&
                        <img src={image4}/>
                    }
                </section>
                <section className="right">
                    <div>
                        <h3>{data.titre}</h3>
                        <button className="smallMainButton">{data.type}</button>
                    </div>
                    <p>{data.description}</p>
                </section>
            </article>
        )
    }
}


