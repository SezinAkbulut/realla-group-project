import React from 'react';
import SearchBarGallery from "@/Components/SearchBarGallery.jsx";
import RightArrow from "@/Components/RightArrow.jsx";
import LoginRegisterButtons from "@/Components/LoginRegisterButtons.jsx";



const Landing = () => {
    return (
<section className="home section">

        <div className="home-content">

            <h1>The <span> smartest</span> way <br/>
                to connect</h1>
            <SearchBarGallery/>
            <LoginRegisterButtons />
        </div>


        <div className="home-img">
            <img src="./images/home_page 3.png" alt="Bungalov"/>
        </div>

        <RightArrow/>
</section>

    );
};

export default Landing;