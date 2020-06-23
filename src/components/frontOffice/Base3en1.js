import React, { Component } from 'react';
import Header from './header/Header';
import fondBase from '../../images/base3en1/fond_base.png';
import fondBassins from '../../images/base3en1/fond_bassins.png';
import fondCentre from '../../images/base3en1/fond_centre.png';
import fondCentreAsso from '../../images/base3en1/fond_centre_asso.png';
import formeBleue from '../../images/base3en1/forme_bleue.png';
import photoBasDroite from '../../images/base3en1/photo_bas_droite.png';
import { TimelineLite, TweenLite, TimelineMax } from "gsap/all";
import Three from 'three';
import hoverEffect from 'hover-effect'
import WaterWave from 'react-water-wave';
import diss from '../../images/base3en1/diss.jpg'

export default class Base3en1 extends Component{
    constructor(props) {
        super(props);
        this.logoTween = null;
        this.hoverEffect = null;
        this.state = {
            image: fondBase,
            image1Hover: fondBase,
            image2Hover: undefined,
            position: "previous"
        }
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
        this.hoverEffect = new hoverEffect({
            parent: document.getElementById("distortion"),
            image1: fondCentre,
            image2: fondCentre,
            image3: fondBassins,
            image4: fondCentreAsso,
            displacementImage: diss
        })
    }

    _changeImage(newImage){
        const {image} = this.state;
        if(newImage != image){
            if(newImage === "fondCentre"){
                this.setState({
                    image: fondCentre
                })
            }else if(newImage === "fondBassins"){
                this.setState({
                    image: fondBassins
                })
            }else{
                this.setState({
                    image: fondCentreAsso
                })
            }
        }
    }

    _resetImage(){
        this.setState({
            image: fondBase
        })
    }
    render(){
        const {image} = this.state;
        return(
            <>
                <Header contrast="light"/>
                <section className="decouvrirCentre">
                    <section className="topBloc">
                        <WaterWave 
                            className="background_img_water"
                            style={{ width: '100%', height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}
                            imageUrl={image}
                            perturbance="0.05"
                            dropRadius="15"
                        >
                        {({  }) => (
                            <div className="topBloc_nav">
                                <h1 className="light">Base 3 en 1 c'est ...</h1>
                                <div>
                                    <button onMouseOver={() => this._changeImage('fondCentre')} onMouseLeave={() => this._resetImage()}>Le Centre</button>
                                    <button onMouseOver={() => this._changeImage('fondBassins')} onMouseLeave={() => this._resetImage()}>Le Bassin des Lumières</button>
                                    <button onMouseOver={() => this._changeImage('fondCentreAsso')} onMouseLeave={() => this._resetImage()}>Centre associatif</button>
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
                            <div style={{backgroundImage: `url(${formeBleue})`}}>
                                <h1 className="light">Du béton brut, de l’acier, de l’eau, de la pénombre, une histoire…et de l’art !</h1>
                            </div>
                            <section style={{backgroundImage: `url(${photoBasDroite})`}}>
                            </section>
                        </section>
                    </section>
                </section>
            </>
        )
    }
}