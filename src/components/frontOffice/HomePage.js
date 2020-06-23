import React, { useState } from 'react';
import { motion, AnimatePresence, useCycle } from "framer-motion"
import Base3en1 from './Base3en1';
import fondBilletterie from '../../images/home/fond_billetterie.png';
import fondDecouvrir from '../../images/home/fond_découvrir.png';
import fondInfosPratiques from '../../images/home/fond_infos_pratiques.png';
import fondProgrammation from '../../images/home/fond_programmation.png';
import fondProjet from '../../images/home/fond_projet.png';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

export default function HomePage(){

    const [openedPage, setOpenedPage] = useCycle(false, true);
    const [pageOpen, setPageOpen] = useState(undefined);

    function _changePage(page){
        setOpenedPage()
        setPageOpen(page)
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
                                    <Link style={{backgroundImage: `url(${fondInfosPratiques})`}} to="/infosPratiques" className="home_first_bloc_2_inside_1 menu_open" onClick={setOpenedPage}>
                                        <p>Infos pratiques</p>
                                    </Link>
                                    <Link style={{backgroundImage: `url(${fondBilletterie})`}} className="home_first_bloc_2_inside_2 menu_open">
                                        <p>Billetterie</p>
                                    </Link>
                                    {/* <div
                                        className="home_first_bloc_2_inside_2 menu_open"
                                        onClick={setOpenedPage}
                                        // exit={{ y: "-100%", opacity: 0}}
                                        // initial={{ y: "-100%", opacity: 0 }}
                                        // animate={{ y: "0", opacity: 1 }}
                                        // transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
                                    >
                                    </div> */}
                                </div>
                            </div>
                            <section style={{backgroundImage: `url(${fondProgrammation})`}} className="home_second_bloc menu_open" onClick={setOpenedPage}>
                                <div>
                                    <p className="light">Programmation</p>
                                    <span className="light">Expositions & ateliers</span>
                                </div>
                            </section>
                        </section>
                        <section className="homePage_bloc homePage_bloc_2 m_order_1" onClick={() => _changePage("decouvrirLeCentre")}>
                            <Link style={{backgroundImage: `url(${fondDecouvrir})`}} to="" className="home_final_bloc menu_open">
                                <p className="light">Découvrir le Centre</p>
                            </Link>
                        </section>
                    </div>
                }
        </>
    )
}