import React, { Component } from 'react';
import Header from './header/Header';
import decouvrirCentre from '../../images/decouvrirCentre/bsm_le_centre.png';
import eau from '../../images/decouvrirCentre/bsm_motif_eau.png';
import { TimelineLite, TweenLite, TimelineMax } from "gsap/all";
import WaterWave from 'react-water-wave';

export default class DecouvrirCentre extends Component{
    constructor(props) {
        super(props);
        this.logoContainer = null;
        this.logoTween = null
    }

    componentDidMount(){
		// create logo tween
        // this.logoTween = new TimelineLite({ paused:true })
		// 	.to("#test", 2, { x: 500 })
        //     .to("#test", 1, { rotation: 360, transformOrigin: "center" });
        // this.logoTween.play()

        this.logoTween = new TimelineMax({paused: true})
        this.logoTween.set("#turbwave",{attr:{"baseFrequency":0.03}});
        this.logoTween.to("#turbwave", 8, {
            attr:{"baseFrequancy": 0.01},
            repeat: -1,
            yoyo: true
        });
        TweenLite.set("#turbwave",{
            attr:{"baseFrequency":0}
        });
        this.logoTween.play()
	}
    render(){
        return(
            <>
                <Header contrast="light"/>
                <section className="decouvrirCentre">
                    <section className="topBloc">
                        <WaterWave 
                            className="background_img_water"
                            style={{ width: '100%', height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}
                            imageUrl={decouvrirCentre}
                            perturbance="0.05"
                            dropRadius="15"
                        >
                        {({  }) => (
                            <div className="topBloc_nav">
                                <h1 className="light">Base 3 en 1 c'est ...</h1>
                                <div>
                                    <button>Le Centre</button>
                                    <button>Le Bassin des Lumières</button>
                                    <button>Centre associatif</button>
                                </div>
                            </div>
                        )}
                        </WaterWave>
                    </section>
                    <section className="bottomBloc">
                        <section className="bottomBloc_1">
                            <div>
                                <h2>La Base sous-marine, un lieu hors du temps</h2>
                                <p>La Base sous-marine est l’une des cinq bases <b>construites par les Allemands sur le littoral atlantique</b> pour abriter des flottilles de sous-marins U-Boote pendant la Seconde Guerre mondiale. Sa construction par les forces d’occupation allemande débuta en 1941 pour s’achever en 1943. Ce gigantesque bunker est organisé en onze alvéoles liées entre elles par une rue intérieure. Aujourd’hui, une partie du bâtiment est accessible au public et comprend : - un espace d’expositions temporaires dédiée à la création contemporaine (actuellement fermé, en travaux, réouverture prévue le 1er trimestre 2021). - un espace dédiée aux Bassins des lumières, centre d’art numérique (ouvert depuis le 10 juin).</p>
                            </div>
                            <div>
                                <h2>Le projet de la Base 3 en 1</h2>
                                <p>« La Base 3 en 1 » est un projet culturel global et ambitieux, visant à terme <b>l’exploitation des 41 000m²</b> de la Base sous-marine. Les espaces d’exposition pilotés par la Ville de Bordeaux, sont pensés comme une caisse de résonance des langages artistiques d’aujourd’hui et plus précisément de l’image, ils accueilleront une programmation orientée vers les frontières entre art contemporain et cinéma. Les Bassins de Lumières qui ont ouvert le 10 juin présentent <b>des expositions numériques immersives monumentales</b> dédiées aux grands artistes de l’Histoire de l’art et à la création contemporaine. Implantés au sein de 4 alvéoles de la Base sous-marine, ils représentent 3 fois la surface des Carrières de Lumières des Baux-de-Provence et 5 fois l’Atelier des Lumières de Paris. Les 5 dernières alvéoles et le toit, feront l’objet d’un Appel à Manifestation d’Intérêt public pour l’aménagement, le développement et la gestion d’une offre culturelle et de <b>mise en valeur patrimoniale.</b></p>
                            </div>
                        </section>
                        <section className="bottomBloc_2">
                            <div>
                                <img src={eau} />
                            </div>
                            <div>
                                <img src={eau} />
                            </div>
                        </section>
                    </section>
                </section>
            </>
        )
    }
}