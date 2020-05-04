import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import M from 'materialize-css';

const NavBar = () => {
    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {hover: true, constrainWidth: false, coverTrigger: false});
    }, [])

    return (
        <div className="navbar-fixed">
            <ul id="dropdown1" className="dropdown-content">
                <li><a className="black-text" href="#project1">1. Coronavirus Prediction</a></li>
                <li><a className="black-text" href="#project2">2. Face Labo</a></li>
                <li><a className="black-text" href="#project3">3. ice candi</a></li>
                <li><a className="black-text" href="#project4">4. IOT Face Recognition(仮)</a></li>
                <li><a className="black-text" href="#project5">5. Who's That Pokémon?</a></li>
                <li><a className="black-text" href="#project6">6. Climbing Data Analysis</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper white" >
                    <a href="#" className="brand-logo black-text" style={{marginLeft: "1vw"}}>Akimi Yano</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className="black-text" href="#about"><FontAwesomeIcon icon="seedling"/>About</a></li>
                        <li>
                            <a style={{outline: 'none'}} class='dropdown-trigger black-text' href='#projecttitle' data-target='dropdown1'>
                                <FontAwesomeIcon icon="trophy"/>
                                Projects
                                <FontAwesomeIcon icon="caret-down"/>
                            </a>
                        </li>
                        <li><a className="black-text" href="#skills"><FontAwesomeIcon icon="star"/>Skills</a></li>
                        <li><a className="black-text" href="#education"><FontAwesomeIcon icon="graduation-cap"/>Education</a></li>
                        <li><a className="black-text" href="#experience"><FontAwesomeIcon icon="fire-alt"/>Experience</a></li>
                        <li><a className="black-text" href="#courses"><FontAwesomeIcon icon="tasks"/>Courses</a></li>
                        <li><a className="black-text" href="#contact"><FontAwesomeIcon icon="paper-plane"/>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
