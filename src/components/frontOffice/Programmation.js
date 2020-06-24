import React, { Component } from 'react';
import Header from './header/Header';
import fondProgrammation from '../../images/programmation/header_programme.png';
import enCours1 from '../../images/programmation/enCours/expo_en_cours_digital_abysses_1.png';
import enCours2 from '../../images/programmation/enCours/expo_en_cours_digital_abysses_2.png';
import enCours3 from '../../images/programmation/enCours/expo_en_cours_digital_abysses_3.png';
import enCours4 from '../../images/programmation/enCours/expo_en_cours_digital_abysses_4.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class Programmation extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentPage: 1,
            currentScroll: 1,
        }
    }

    _changePage(newPage){
        this.setState({
            currentPage: newPage
        })
    }
    
    componentDidMount(){
        let triggerOffset = document.documentElement.clientHeight / 2;

        let viewHeight = document.documentElement.clientHeight;
        let viewWidth = document.documentElement.clientWidth;

        // var sceneStart = triggerOffset * 3;
        var duration = triggerOffset;
        let firstSceneStart = viewHeight / 2;
        let secondSceneStart = viewHeight + 350;
        let thirdSceneStart = viewHeight + viewHeight / 2 + 350;
        let fourthSceneStart = viewHeight + viewHeight + 350;
        let fifthSceneStart = viewHeight + viewHeight + viewHeight + 350;
        let sceneStart = triggerOffset;

        var requestId = null;
        
        // DEVONLY pour voir les triggers



        var tl = gsap.timeline({ paused: true })
        .set(".programmation_topBloc", {
            autoAlpha: 1,
            y:0
        }, firstSceneStart)
        .to(".programmation_topBloc", {
            autoAlpha: 0,
            y: "-25%",
            duration: duration
        }, firstSceneStart)
        .set(".firstImage", { 
            x: "-100%",
            y: 100,
            rotation: 30
        }, firstSceneStart)
        .to(".firstImage", { 
            duration: duration, 
            rotation: 0, 
            y: 0,
            x: "-50%" 
        }, firstSceneStart)

        .set(".programmation_secondBloc",{
            y: 0,
            autoAlpha: 0,
            css:{zIndex:100}
        }, firstSceneStart)
        .to(".programmation_secondBloc",{
            duration: duration,
            autoAlpha: 1,
            y: "-100%",
        }, firstSceneStart)
        .set(".programmation_secondBloc",{
            y: "-100%",
            autoAlpha: 0,
            css:{zIndex:100}
        }, secondSceneStart)
        .to(".programmation_secondBloc",{
            duration: duration,
            autoAlpha: 1,
            y: "-200%",
        }, secondSceneStart)

        .set(".programmation_thirdBloc",{
            y: "-100%",
            autoAlpha: 0,
            rotation: 30,
        }, firstSceneStart)
        .to(".programmation_thirdBloc",{
            duration: duration,
            autoAlpha: 0.1,
        }, firstSceneStart)
        .set(".programmation_thirdBloc",{
            y: "-100%",
            autoAlpha: 0.1,
            rotation: 30,
        }, secondSceneStart)
        .to(".programmation_thirdBloc",{
            duration: duration,
            y: "-110%",
            autoAlpha: 1,
            rotation: 10,
        }, secondSceneStart)

        .set(".programmation_thirdBloc",{
            y: "-110%",
        }, fourthSceneStart)
        .to(".programmation_thirdBloc",{
            duration: duration,
            y: "-170%",
        }, fourthSceneStart)

        .set(".programmation_fourthBloc",{
            y: "0%",
            autoAlpha: 0,
            rotation: -25
        }, fourthSceneStart)
        .to(".programmation_fourthBloc",{
            duration: duration,
            autoAlpha: 1,
            y: "-100%",
        }, fourthSceneStart)

        .set(".programmation_fourthBloc",{
            y: "-100%",
            rotation: -25
        }, fifthSceneStart)
        .to(".programmation_fourthBloc",{
            duration: duration,
            y: "-150%",
        }, fifthSceneStart)

        .set(".programmation_fifthBloc",{
            y: "-100%",
            autoAlpha: 0,
        }, fifthSceneStart)
        .to(".programmation_fifthBloc",{
            duration: duration,
            autoAlpha: 1,
        }, fifthSceneStart)

        .set(".fifthBloc_text",{
            x: "-100%",
            autoAlpha: 0,
        }, fifthSceneStart)
        .to(".fifthBloc_text",{
            x: "0%",
            duration: duration,
            autoAlpha: 1,
        }, fifthSceneStart)
        
        .set(".fifthBloc_img",{
            x: "100%",
            y: "100%",
            autoAlpha: 0,
        }, fifthSceneStart)
        .to(".fifthBloc_img",{
            x: "0%",
            y: "0%",
            duration: duration,
            autoAlpha: 1,
        }, fifthSceneStart)


        window.addEventListener("scroll", function() {
        if (!requestId) {
            requestId = requestAnimationFrame(update);
        }
        });

        function update() {
            tl.time(window.pageYOffset + triggerOffset);
            requestId = null;
        }

    }
    render(){
        const {currentPage, currentScroll} = this.state;
        return(
            <>
                <Header contrast="light" />
                <section className="programmation">
                    <section className="programmation_topBloc">
                        <div className="programmation_topBloc_nav">
                            <img src={fondProgrammation} />
                            <div>
                                <h1 className="light">Programme</h1>
                                <div className="filters">
                                    <button className={currentPage === 1 ? "active" : ""} onClick={() => this._changePage(1)}>Exposition en cours</button>
                                    <button className={currentPage === 2 ? "active" : ""} onClick={() => this._changePage(2)}>Exposition à venir</button>
                                    <button className={currentPage === 3 ? "active" : ""} onClick={() => this._changePage(3)}>Exposition passées</button>
                                </div>
                            </div>
                            <section className="topScroll">
                                <p className="light">Scroll</p>
                            </section>
                        </div>
                    </section>
                    {currentPage === 1 &&
                        <>
                            <section className="programmation_secondBloc">
                                <img src={enCours1} className="firstImage"/>
                                <div>
                                    <h2 className="light">Digital Abysses</h2>
                                    <p className="light">L’œuvre de Miguel Chevalier met en scène la nature grâce à son imaginaire et à des pixels. « Digital Abysses » est un savant mélange de rêve et de technologie qui évoque autant les laboratoires de recherche que les cabinets de curiosité des XVIe et XVIIe siècles.</p>
                                </div>  
                            </section>
                            
                            <section className="programmation_thirdBloc">
                                <img src={enCours2}/>
                            </section>
                            <section className="programmation_fourthBloc">
                                <img src={enCours3}/>
                            </section>
                            <section className="programmation_fifthBloc">
                                <div className="fifthBloc_text">
                                    <p className="light">«  Le propos n’est pas de faire l’illustration de la mémoire de ce lieu, mais d’en faire le point de départ d’une nouvelle histoire inspirée des grands fonds marins : les abysses. »</p>
                                    <br/>
                                    <p className="text_bold light">- Miguel Chevalier</p>
                                </div>
                                <img className="fifthBloc_img" src={enCours4}/>
                            </section>
                        </>
                    }
                    {currentPage === 2 &&
                        <>
                        </>
                    }
                    {currentPage === 3 &&
                        <>
                        </>
                    }
                </section>
            </>
        )
    }
}