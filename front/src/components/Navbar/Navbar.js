import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const[blur, setBlur] = useState(0)
    let {scrollTop, scrollHeight, clientHeight} = document.documentElement
    window.addEventListener('scroll', (scrolled) => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement
        setBlur(scrollTop/30);
        // console.log(scrollTop);
        // if(scrollTop > 400){
        //     console.log("AZERAZEEEEEEEEEEEEEE");
        //     var element = document.getElementsByClassName('Navbar')
        //     element.classList.add("newstyle")
        // }
    })

    // let divstyyle = {
    //     position: "fixed",
    //     left: "0",
    //     right: "0",
    //     background: "var(--primary)",
    // }

    let divstyle = {
        backdropFilter: `blur(${blur}px)`,
        filter: `blur(${blur}px)`
    }

    function changeClass (e){
        e.preventDefault()
        e.target.addClass('bg')
    }

    return (
        <div className='FondEcran'>
            <div className={scrollTop > 550 ?'Navbar newstyle' : 'Navbar'}>

                <Logo height="100" width="100px"/>

                {/* <p className=''>EVENEMENTS</p> */}
                <NavLink to={`/`} >EVENEMENTS</NavLink>
                <NavLink to={`/event/7dd94c01cff9af1493f175adc270b4a7e146ca8a`} >A PROPOS</NavLink>

                <div className='Navbar_Items OnElement'>
                    <svg width="1em" height="1em" viewBox="0 0 8 8"><path fill="currentColor" d="M3 0v1H1L0 2l1 1h2v5h1V4h2l1-1l-1-1H4V0H3z"></path></svg>
                    <p className='Navbar_Items_Event'>MES EVENEMENTS</p>
                </div>
            </div>

            
            <div className='blur' style={divstyle}>
            <h1>Evenements proche de vous...</h1>
            </div>
        </div>
    );
};

export default Navbar;