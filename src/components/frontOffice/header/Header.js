import React, { useState } from 'react';
import {ReactComponent as Menu} from '../../../images/icons/menu.svg'
import {ReactComponent as Facebook} from '../../../images/icons/facebook.svg'
import {ReactComponent as Instagram} from '../../../images/icons/instagram.svg'
import {ReactComponent as Twitter} from '../../../images/icons/twitter.svg'

export default function Header(props){
    console.log(props.contrast)
    return(
        <>
            <section className={props.contrast === "light" ? "lightHeader header" : "darkHeader header"}>
                <Menu className="burger"/>
                <div className="social_medias">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </section>
        </>
    )
}