import React, { Component } from 'react';
import {ReactComponent as Menu} from '../../../images/icons/menu.svg'
import {ReactComponent as Close} from '../../../images/icons/close.svg'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    _openMenu(){
        const {menu} = this.state

        if(menu){
            this.setState({
                menu: false
            })
        }else{
            this.setState({
                menu: true
            })
        }
        console.log(menu)
    }
    render(){
        const {contrast} = this.props
        const {menu} = this.state
        return(
            <>
                {menu ?
                    <section className="menu">
                        <Close className="close" onClick={() => this._openMenu()}/>
                        <div>
                            <Link to="/">Accueil</Link>
                            <Link to="/decouvrir_le_centre">Découvrir le Centre</Link>
                            <Link to="/programmation">Programme</Link>
                            <Link to="/base_3_en_1">Le projet Base 3 en 1</Link>
                            <Link to="/infos_pratiques">Infos pratiques</Link>
                            <Link to="/billetterie">Billetterie</Link>
                        </div>                        
                    </section>
                :
                    <section className={contrast === "light" ? "lightHeader header" : "darkHeader header"}>
                        <Menu className="burger" onClick={() => this._openMenu()}/>
                    </section>
                }
            </>
        )
    }
}