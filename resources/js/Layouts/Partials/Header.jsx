import React from 'react';
import Navigation from "@/Components/Navigation.jsx";
import SearchBarGallery from "@/Components/SearchBarGallery.jsx";
import 'boxicons/css/boxicons.min.css';
import { Link } from '@inertiajs/react';





function Header() {
    return (
        <header className="header">

            <Navigation/>


            <section className="home section">

                <div className="home-content">

                    <h1>The <span> smartest</span> way <br/>
                        to connect</h1>

                    <SearchBarGallery/>

                </div>

                <div className="home-img">
                    <img src="./images/home_page_background.png" alt="Bungalov"/>
                </div>

                <Link href="/mock-up-1">
                    <button className="right-arrow">
                        <i className='bx bxs-right-arrow-circle' style={{ color: '#ecaa16' }}></i>
                    </button>
                </Link>
            </section>

        </header>

    );
}


export default Header;
