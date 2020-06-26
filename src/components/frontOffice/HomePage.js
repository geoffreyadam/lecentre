import React, { useState } from 'react';
import { motion, AnimatePresence, useCycle } from "framer-motion"
import fondBilletterie from '../../images/home/fond_billetterie.png';
import fondDecouvrir from '../../images/home/fond_découvrir.png';
import fondInfosPratiques from '../../images/home/fond_infos_pratiques.png';
import fondProgrammation from '../../images/home/fond_programmation.png';
import fondProjet from '../../images/home/fond_projet.png';
import Logo from '../../images/logos/LOGO_LE_CENTRE-BLANC.png';
import Video from '../../videos/digital-abysses.mp4';
import {ReactComponent as Sound} from '../../images/icons/casque.svg'
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

export default function HomePage(){

    const [openedPage, setOpenedPage] = useCycle(false, true);
    const [pageOpen, setPageOpen] = useState(undefined);
    const [showVideo, setShowVideo] = useState(false);

    function _changePage(page){
        setOpenedPage()
        setPageOpen(page)
    }
    function startVideo(){
        setShowVideo(true)
        document.getElementById("homePageVideo").play()
        document.getElementsByTagName('video')[0].volume = 0.1;
    }
    function stopVideo(){
        document.getElementById("homePageVideo").pause()
        setShowVideo(false)
    }
    
    return(
        <>
                {!openedPage &&
                    <div className="homePage_ctn">
                        <section className="homePage_bloc homePage_bloc_1 m_order_2">
                            <div className="home_first_bloc">
                                <Link style={{backgroundImage: `url(${fondProjet})`}} className="home_first_bloc_1 menu_open" onClick={setOpenedPage} to="/base_3_en_1">
                                    <p className="light">Le projet Base 3 en 1</p>
                                </Link>
                                <div className="home_first_bloc_2">
                                    <Link style={{backgroundImage: `url(${fondInfosPratiques})`}} to="/infos_pratiques" className="home_first_bloc_2_inside_1 menu_open" onClick={setOpenedPage}>
                                        <p>Infos pratiques</p>
                                    </Link>
                                    <Link style={{backgroundImage: `url(${fondBilletterie})`}} className="home_first_bloc_2_inside_2 menu_open" to="/billetterie">
                                        <p>Billetterie</p>
                                    </Link>
                                </div>
                            </div>
                            <section style={{backgroundImage: `url(${fondProgrammation})`}} className="home_second_bloc menu_open" onClick={setOpenedPage}>
                                <Link to="/programmation">
                                    <div>
                                        <p className="light">Programmation</p>
                                        <span className="light">Expositions & ateliers</span>
                                    </div>
                                </Link>
                            </section>
                        </section>
                        <section onMouseOver={() => startVideo()} onMouseLeave={() => stopVideo()} className="homePage_bloc homePage_bloc_2 m_order_1" onClick={() => _changePage("decouvrirLeCentre")}>
                            <Link style={{backgroundImage: `url(${fondDecouvrir})`}} to="/decouvrir_le_centre" className="home_final_bloc menu_open">
                                <div>
                                    <img src={Logo}/>
                                    <p className="light">Découvrir le Centre</p>
                                    <section>
                                        <Sound/>
                                        <p className="light">Mettez un casque pour une meilleure immersion</p>
                                    </section>
                                </div>
                                    <video id="homePageVideo" autoplay loop className={showVideo ? "" : "hide"}>
                                        <source src={Video} type="video/mp4"/>
                                    </video>
                            </Link>
                        </section>
                    </div>
                }
        </>
    )
}