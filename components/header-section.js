import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import MainMenu from "./main-menu/main-menu";

export default function HeaderSection({ mainMenu }) {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const navbarAreaEl = useRef(null);

    function fixNavBar() {
        if (navbarAreaEl.current) {
            setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', fixNavBar);

        return () => {
            window.removeEventListener('scroll', fixNavBar);
        }
    }, []);

    return (
        <header className="header">
            <div ref={navbarAreaEl} className={`navbar-area ${isNavbarSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                    <span class="mb-0 h1">WG Business</span>
                                </a>
                                <MainMenu mainMenuLinks={mainMenu} />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
