import React, { Component } from 'react';
import Header from './header/Header';
import Light from '../../images/decouvrirCentre/light.jpg';
import Underwater from '../../sons/itai.mp3';
import bloc2top from '../../images/decouvrirCentre/illus/illu_14.gif';
import bloc2bot from '../../images/decouvrirCentre/typos/le_centre.gif';
import bloc5bot from '../../images/decouvrirCentre/illus/illu_17.gif';
import bloc5top from '../../images/decouvrirCentre/typos/decouvrir.gif';
import bloc6bot from '../../images/decouvrirCentre/illus/illu_2.gif';
import bloc6top from '../../images/decouvrirCentre/typos/decouvrir_centre.gif';
import bloc7bot from '../../images/decouvrirCentre/illus/illu_2.gif';
import bloc7top from '../../images/decouvrirCentre/illus/illu_14.gif';
import Neon from '../../images/decouvrirCentre/neon.jpg';
import TableauMur from '../../images/decouvrirCentre/tableau_mur.jpg';
import TableauSol from '../../images/decouvrirCentre/tableau_sol.png';
import Danse from '../../images/decouvrirCentre/danse.jpg';
import Masque from '../../images/decouvrirCentre/masque.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default class DecouvrirLeCentre extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let triggerOffset = document.documentElement.clientHeight / 2;

        let viewHeight = document.documentElement.clientHeight;

        var duration = viewHeight;
        var halfDuration = triggerOffset;

        let firstSceneStart = triggerOffset + 100;
        let secondSceneStart = firstSceneStart + 200;
        let thirdSceneStart = secondSceneStart + triggerOffset;
        let fourthSceneStart = thirdSceneStart + 300 + viewHeight + 500;
        let fifthSceneStart = fourthSceneStart + triggerOffset;
        let sixthSceneStart = fifthSceneStart + 300 + viewHeight + 500;
        let seventhSceneStart = sixthSceneStart + triggerOffset;
        let heightSceneStart = seventhSceneStart + 300 + viewHeight + 500;
        let ninthSceneStart = heightSceneStart + 350;
        let tenthSceneStart = ninthSceneStart + 300 + viewHeight + 500;

        var requestId = null;
     
        gsap.from(".decouvrir_topBloc", {
            opacity: 0,
            duration: 2.5
        });
        gsap.from(".decouvrir_topBloc img", {
            rotate: -25,
            scale: 0.8,
            duration: 2.5,
            ease: "power3"
        });
        gsap.from(".decouvrir_topBloc h3", {
            x: -200,
            duration: 2.5,
            ease: "power3"
        });
        gsap.from(".decouvrir_topBloc h2", {
            x: 200,
            duration: 2.5,
            ease: "power3"
        });

        gsap.set(".decouvrir_secondBloc", {
            autoAlpha: 0,
        })
        gsap.set(".decouvrir_thirdBloc", {
            autoAlpha: 0,
        })

        gsap.set(".decouvrir_fourthBloc", {
            autoAlpha: 0,
        })

        gsap.set(".decouvrir_fifthBloc", {
            autoAlpha: 0
        })

        gsap.set(".decouvrir_sixthBloc", {
            autoAlpha: 0
        })
        gsap.set(".decouvrir_sixthBloc_img",{
            rotate: -15
        })

        gsap.set(".decouvrir_seventhBloc", {
            autoAlpha: 0
        })

        /* End Set */


        
        var tl = gsap.timeline({ paused: true })
        .to(".decouvrir_topBloc", {
            y: "-80%",
            duration: duration * 2
        }, firstSceneStart)
        .to(".decouvrir_topBloc img", {
            rotate: 5,
            scale:0.8,
            duration: duration * 2
        }, firstSceneStart)
        .to(".decouvrir_topBloc > h2", {
            autoAlpha: 0,
            x: -200,
            duration: duration
        }, firstSceneStart)
        .to(".decouvrir_topBloc > h3", {
            autoAlpha: 0,
            x: 200,
            duration: duration
        }, firstSceneStart)

        .to(".decouvrir_secondBloc", {
            autoAlpha: 1,
            duration: duration
        }, secondSceneStart)

        .to(".decouvrir_thirdBloc", {
            autoAlpha: 1,
            duration: duration
        }, thirdSceneStart)
        .to(".decouvrir_thirdBloc > img", {
            autoAlpha: 1,
            rotate: 10,
            scale: 1.5,
            duration: duration
        }, thirdSceneStart)

        .set(".decouvrir_thirdBloc > h3", {
            autoAlpha: 0,
            x: -50,
        }, thirdSceneStart)
        .to(".decouvrir_thirdBloc > h3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, thirdSceneStart + 100)
        .set(".decouvrir_thirdBloc2", {
            autoAlpha: 0,
            x: -50,
        }, thirdSceneStart)
        .to(".decouvrir_thirdBloc2", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, thirdSceneStart + 200)
        .set(".decouvrir_thirdBloc3", {
            autoAlpha: 0,
            x: -50,
        }, thirdSceneStart)
        .to(".decouvrir_thirdBloc3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, thirdSceneStart + 300)

        /* Start fourth leave */

        .to(".decouvrir_topBloc", {
            y: "-100%",
            autoAlpha: 0,
            duration: halfDuration
        }, fourthSceneStart)
        .to(".decouvrir_thirdBloc > img", {
            y: "-100%",
            x: "100%",
            autoAlpha: 0,
            duration: halfDuration
        }, fourthSceneStart)
        .to(".decouvrir_thirdBloc > h3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, fourthSceneStart + 100)
        .to(".decouvrir_thirdBloc2", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, fourthSceneStart + 200)
        .to(".decouvrir_thirdBloc3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, fourthSceneStart + 300)

        /* End fourth Leave */
        
        .to(".decouvrir_fourthBloc", {
            autoAlpha: 1,
            duration: duration
        }, fifthSceneStart)
        .to(".decouvrir_fourthBloc > img", {
            autoAlpha: 1,
            rotate: -10,
            scale: 2.5,
            duration: duration
        }, fifthSceneStart)

        .set(".decouvrir_fourthBloc > h3", {
            autoAlpha: 0,
            x: -50,
        }, fifthSceneStart)
        .to(".decouvrir_fourthBloc > h3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, fifthSceneStart + 100)
        .set(".decouvrir_fourthBloc2", {
            autoAlpha: 0,
            x: -50,
        }, fifthSceneStart)
        .to(".decouvrir_fourthBloc2", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, fifthSceneStart + 200)
        .set(".decouvrir_fourthBloc3", {
            autoAlpha: 0,
            x: -50,
        }, fifthSceneStart)
        .to(".decouvrir_fourthBloc3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, fifthSceneStart + 300)

        /* Start sixth leave */

        .to('.decouvrir_secondBloc',{
            autoAlpha: 0,
            duration: halfDuration
        }, sixthSceneStart)
        .to(".decouvrir_fourthBloc > img", {
            y: "-100%",
            x: "-100%",
            autoAlpha: 0,
            duration: halfDuration
        }, sixthSceneStart)
        .to(".decouvrir_fourthBloc > h3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, sixthSceneStart + 100)
        .to(".decouvrir_fourthBloc2", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, sixthSceneStart + 200)
        .to(".decouvrir_fourthBloc3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, sixthSceneStart + 300)

        /* End sixth leave */


        .to(".decouvrir_fifthBloc", {
            autoAlpha: 1,
            duration: duration
        }, seventhSceneStart)
        .to(".decouvrir_danse", {
            autoAlpha: 1,
            rotate: 10,
            y: "-125%",
            x: "-25%",
            duration: duration
        }, seventhSceneStart)

        .set(".decouvrir_fifthBloc > h3", {
            autoAlpha: 0,
            x: -50,
        }, seventhSceneStart)
        .to(".decouvrir_fifthBloc > h3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, seventhSceneStart + 100)
        .set(".decouvrir_fifthBloc2", {
            autoAlpha: 0,
            x: -50,
        }, seventhSceneStart)
        .to(".decouvrir_fifthBloc2", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, seventhSceneStart + 200)
        .set(".decouvrir_fifthBloc3", {
            autoAlpha: 0,
            x: -50,
        }, seventhSceneStart)
        .to(".decouvrir_fifthBloc3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, seventhSceneStart + 300)


        /* Start heigth leave */

        .to('.decouvrir_secondBloc',{
            autoAlpha: 0,
            duration: halfDuration
        }, heightSceneStart)
        .to(".decouvrir_fifthBloc_bottomImg, .decouvrir_fifthBloc_topImg", {
            autoAlpha: 0,
            duration: halfDuration
        }, heightSceneStart)
        .to(".decouvrir_danse", {
            autoAlpha: 0,
            y:"-250%",
            x: "100%",
            duration: halfDuration
        }, heightSceneStart)
        .to(".decouvrir_fifthBloc > h3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, heightSceneStart + 100)
        .to(".decouvrir_fifthBloc2", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, heightSceneStart + 200)
        .to(".decouvrir_fifthBloc3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, heightSceneStart + 300)

        /* End height leave */


        .to(".decouvrir_sixthBloc", {
            autoAlpha: 1,
            duration: duration
        }, seventhSceneStart)
        .to(".decouvrir_sixthBloc_img", {
            autoAlpha: 1,
            rotate: 0,
            scale: 3,
            duration: duration
        }, seventhSceneStart)

        .set(".decouvrir_sixthBloc > h3", {
            autoAlpha: 0,
            x: -50,
        }, seventhSceneStart)
        .to(".decouvrir_sixthBloc > h3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, seventhSceneStart + 100)
        .set(".decouvrir_sixthBloc2", {
            autoAlpha: 0,
            x: -50,
        }, seventhSceneStart)
        .to(".decouvrir_sixthBloc2", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, seventhSceneStart + 200)
        .set(".decouvrir_sixthBloc3", {
            autoAlpha: 0,
            x: -50,
        }, seventhSceneStart)
        .to(".decouvrir_sixthBloc3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, seventhSceneStart + 300)


        /* Start tenth leave */

        .to('.decouvrir_secondBloc',{
            autoAlpha: 0,
            duration: halfDuration
        }, heightSceneStart)
        .to(".decouvrir_sixthBloc_bottomImg, .decouvrir_sixthBloc_topImg", {
            autoAlpha: 0,
            duration: halfDuration
        }, heightSceneStart)
        .to(".decouvrir_sixthBloc_img", {
            autoAlpha: 0,
            y:"-100%",
            rotate: 15,
            x: "100%",
            duration: halfDuration
        }, heightSceneStart)
        .to(".decouvrir_sixthBloc > h3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, heightSceneStart + 100)
        .to(".decouvrir_sixthBloc2", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, heightSceneStart + 200)
        .to(".decouvrir_sixthBloc3", {
            autoAlpha: 0,
            x: -50,
            duration: halfDuration
        }, heightSceneStart + 300)

        /* End tenth leave */

        .to(".decouvrir_seventhBloc", {
            autoAlpha: 1,
            duration: duration
        }, ninthSceneStart)
        .to(".decouvrir_seventhBloc_img", {
            autoAlpha: 1,
            duration: duration
        }, ninthSceneStart)

        .set(".decouvrir_seventhBloc > h3", {
            autoAlpha: 0,
            x: -50,
        }, ninthSceneStart)
        .to(".decouvrir_seventhBloc > h3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, ninthSceneStart + 100)
        .set(".decouvrir_seventhBloc2", {
            autoAlpha: 0,
            x: -50,
        }, ninthSceneStart)
        .to(".decouvrir_seventhBloc2", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, ninthSceneStart + 200)
        .set(".decouvrir_seventhBloc3", {
            autoAlpha: 0,
            x: -50,
        }, ninthSceneStart)
        .to(".decouvrir_seventhBloc3", {
            autoAlpha: 1,
            x: 0,
            duration: 100
        }, ninthSceneStart + 300)

        window.addEventListener("scroll", function() {

            if (!requestId) {
                requestId = requestAnimationFrame(update);
            }
        });
    
        function update() {
            tl.time(window.pageYOffset + triggerOffset);
            requestId = null;
        }
        document.getElementById("my_audio").volume = 0.3; 
        document.getElementById("my_audio").play();
    }
    
    render(){
        return(
            <>
            <audio id="my_audio" src={Underwater} loop="loop"></audio>
                <Header contrast="light"/>
                <section className="decouvrirLecentre">
                    <section className="decouvrir_topBloc">
                        <div>
                            <h3 className="light">Découvrir</h3>
                            <h2 className="light">Le Centre</h2>
                        </div>
                        <img src={Light} />
                    </section>
                    <section className="decouvrir_secondBloc">
                        <img className="decouvrir_secondBloc_topImg" src={bloc2top}/>
                        <img className="decouvrir_secondBloc_bottomImg" src={bloc2bot}/>
                    </section>
                    <section className="decouvrir_thirdBloc">
                        <img src={Neon}/>
                        <h3 className="decouvrir_thirdBloc1">Un espace hors du temps</h3>
                        <p className="decouvrir_thirdBloc2">Explorez et découvrez les artistes qui habillent</p>
                        <p className="decouvrir_thirdBloc3">les profondeurs de la Base sous-marine</p>
                    </section>
                    <section className="decouvrir_fourthBloc">
                        <img src={TableauSol}/>
                        <h3 className="decouvrir_fourthBloc1">La nouvelle bulle artistique </h3>
                        <p className="decouvrir_fourthBloc2">Entre laboratoire de travail et lieu de rencontres artistiques, </p>
                        <p className="decouvrir_fourthBloc3">e Centre vous invite à plonger dans la nouvelle vague des arts numériques</p>
                    </section>
                    <section className="decouvrir_sixthBloc">
                        <img className="decouvrir_sixthBloc_img" src={TableauMur}/>
                        <img className="decouvrir_sixthBloc_topImg" src={bloc6top}/>
                        <img className="decouvrir_sixthBloc_bottomImg" src={bloc6bot}/>
                        <h3 className="decouvrir_sixthBloc1">Un titre</h3>
                        <p className="decouvrir_sixthBloc2">Vivamus neque dui, vulputate at</p>
                        <p className="decouvrir_sixthBloc3">risus a, tristique eleifend neque.</p>
                    </section>
                    <section className="decouvrir_seventhBloc">
                        <img className="decouvrir_seventhBloc_img" src={Masque}/>
                        <img className="decouvrir_seventhBloc_topImg" src={bloc7top}/>
                        <img className="decouvrir_seventhBloc_bottomImg" src={bloc7bot}/>
                        <Link to="/billetterie" className="mainButton">Acheter un billet</Link>
                    </section>
                </section>
            </>
        )
    }
}