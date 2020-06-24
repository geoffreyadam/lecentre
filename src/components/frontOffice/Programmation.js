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
import EnCours from "./programmation/EnCours"

gsap.registerPlugin(ScrollTrigger);

export default class Programmation extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentPage: 1,
        }
    }
    
    render(){
        const {currentPage} = this.state;
        return(
            <>
                <Header contrast="light" />
                {currentPage === 1 &&
                    <EnCours currentPage={currentPage}/>
                }
                {currentPage === 2 &&
                    <EnCours currentPage={currentPage}/>
                }
                {currentPage === 3 &&
                    <EnCours currentPage={currentPage}/>
                }
            </>
        )
    }
}