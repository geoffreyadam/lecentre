import React, { Component } from 'react';
import Header from './header/Header';
import Venir from './programmation/Venir';
import EnCours from './programmation/EnCours';
import Passees from './programmation/Passees';
import {ReactComponent as Scroll} from '../../images/icons/arrow.svg'
import fondProgrammation from '../../images/programmation/header_programme.png';

export default class Programmation extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentPage: 1,
        }
    }

    _changePage(newPage){
        this.setState({
            currentPage: newPage
        })
    }
    
    render(){
        const {currentPage} = this.state;
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
                                <Scroll/>
                                <p className="light">Scroll</p>
                            </section>
                        </div>
                    </section>
                    {currentPage === 1 &&
                        <EnCours/>
                    }
                    {currentPage === 2 &&
                        <Venir />
                    }
                    {currentPage === 3 &&
                        <Passees />
                    }
                </section>
            </>
        )
    }
}